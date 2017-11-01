<script>
import _ from 'lodash'
import Confirm from './Confirm'
import InputBox from './InputBox'

import { Beat } from '@/utils'
import { Validator } from 'vee-validate'
import { mapState, mapGetters } from 'vuex'
import { MSG, NODE_ADD, NODE_EDIT, NODE_CHECK, NODE_REMOVE } from '@/store/types'

export default {
    data: () => ({
        // 添加节点信息
        nodeInfo: {},
        // 最后编辑节点名
        lastName: ''
    }),

    props: {
        // 添加节点
        addNode: {
            show: false, // 显示模态框
            parent: ''   // 父节点 ID
        },
        editNode: Object,
        // 移除节点 ID
        removeId: String
    },

    watch: {
        check (val) {
            this.checkNodeName(Beat(val))
        },
        addStatus (val) {
            if (Beat(val)) {
                this.$emit('close', 1)
                this.$store.dispatch(MSG, '添加节点成功')
            }
        },
        editStatus (val) {
            if (Beat(val)) {
                this.$emit('close', 2)
                this.$store.dispatch(MSG, '编辑节点成功')
                this.$router.push({ path: `/node/${this.lastName}` })
            }
        },
        removeStatus (val) {
            if (Beat(val)) {
                this.$emit('close', 3)
                this.$store.dispatch(MSG, '移除节点成功')
                this.$router.push({ path: `/node` })
            }
        }
    },

    methods: {
        add () {
            this.validate(() => this.$store.dispatch(NODE_ADD, this.nodeModel))
        },
        edit () {
            this.validate(() => {
                this.lastName = this.nodeModel.name
                this.$store.dispatch(NODE_EDIT, this.nodeModel)
            })
        },
        remove () {
            this.$store.dispatch(NODE_REMOVE, this.removeId)
        },
        validate (fn) {
            this.$validator.validateAll().then(() => this.errors.any() || fn())
        }
    },

    computed: {
        type () {
            return this.addNode && this.addNode.show ? 1 : this.editNode &&
                this.editNode.id ? 2 : this.removeId ? 3 : 0
        },
        title () {
            return this.type === 1 ? `加${this.addNode.parent ? '子' : '父'}节点` : '编辑节点'
        },
        nodeModel () {
            if (this.type === 1) {
                this.nodeInfo.parent = this.addNode.parent
                return this.nodeInfo
            }
            return this.editNode ? _.cloneDeep(this.editNode) : {}
        },
        ...mapState({
            check: s => s.node.check,
            addStatus: s => s.node.add,
            editStatus: s => s.node.edit,
            removeStatus: s => s.node.remove
        }),
        ...mapGetters([
            'nodeList'
        ])
    },

    created () {
        // 检查节点名
        Validator.extend('node_name', {
            validate: value => {
                // 编辑节点
                if (this.type === 2) {
                    return true
                }

                this.$store.dispatch(NODE_CHECK, value)
                return new Promise(resolve => {
                    this.checkNodeName = valid => resolve({
                        valid, data: { message: '节点名已存在' }
                    })
                })
            },
            getMessage: (field, params, data) => (data && data.message) || undefined
        })
    },

    components: { Confirm, InputBox }
}
</script>

<template>
<div>
    <!-- 添加或编辑节点 -->
    <InputBox :show="type === 1 || type === 2" :title="title" @close="$emit('close', type)" @submit="type === 1 ? add() : edit()">
        <form novalidate @submit.stop.prevent>
            <md-input-container :class="{'md-input-invalid': errors.has('name')}">
                <label>名称</label>
                <md-input
                    required
                    name="name"
                    v-model="nodeModel.name"
                    v-validate="'required|max:30|alpha_num|node_name'"/>
                <span class="md-error" v-show="errors.has('name')">{{ errors.first('name') }}</span>
            </md-input-container>

            <md-input-container :class="{'md-input-invalid': errors.has('title')}">
                <label>标题</label>
                <md-input
                    required
                    name="title"
                    v-model="nodeModel.title"
                    v-validate="'required|max:30'"/>
                <span class="md-error" v-show="errors.has('title')">{{ errors.first('title') }}</span>
            </md-input-container>

            <md-input-container :class="{'md-input-invalid': errors.has('sort')}">
                <label>排序</label>
                <md-input
                    name="sort"
                    type="number"
                    v-model="nodeModel.sort"
                    v-validate="'numeric'"/>
                <span class="md-error" v-show="errors.has('sort')">{{ errors.first('sort') }}</span>
            </md-input-container>

            <md-input-container :class="{'md-input-invalid': errors.has('desc')}">
                <label>节点描述</label>
                <md-textarea
                    name="desc"
                    v-model="nodeModel.desc"
                    v-validate="'min:5|max:300'"/>
                <span class="md-error" v-show="errors.has('desc')">{{ errors.first('desc') }}</span>
            </md-input-container>
        </form>
    </InputBox>

    <!-- 移除节点 -->
    <Confirm :show="type === 3" title="确认删除" @close="$emit('close', type)" @submit="remove()">
        你确定要删除这个节点么？此操作无可挽回！
    </Confirm>
</div>
</template>