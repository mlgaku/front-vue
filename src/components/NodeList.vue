<script>
import Card from './Card'
import Confirm from './Confirm'
import InputBox from './InputBox'

import { Beat } from '@/utils'
import { mapState, mapGetters } from 'vuex'
import { Validator } from 'vee-validate'
import { MSG, NODE_ADD, NODE_CHECK, NODE_REMOVE } from '@/store/types'

export default {
    data: () => ({
        // 显示模态框
        show: {
            add: false,
            remove: false
        },
        // 添加节点
        nodeModel: {},
        // 删除节点ID
        removeId: ''
    }),

    watch: {
        check: function (val) {
            this.checkNodeName(Beat(val))
        },
        addStatus: function (val) {
            if (Beat(val)) {
                this.show.add = false
                this.$store.dispatch(MSG, '添加节点成功')
            }
        },
        removeStatus: function (val) {
            if (Beat(val)) {
                this.show.remove = false
                this.$store.dispatch(MSG, '删除节点成功')
            }
        }
    },

    created () {
        // 检查节点名
        Validator.extend('node_name', {
            validate: value => {
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

    methods: {
        add () {
            this.validate(() => this.$store.dispatch(NODE_ADD, this.nodeModel))
        },
        remove () {
            this.$store.dispatch(NODE_REMOVE, this.removeId)
            this.removeId = ''
        },
        validate (fn) {
            this.$validator.validateAll().then(() => this.errors.any() || fn())
        }
    },

    computed: {
        ...mapState({
            check: s => s.node.check,
            addStatus: s => s.node.add,
            removeStatus: s => s.node.remove
        }),
        ...mapGetters([
            'nodeList'
        ])
    },

    components: { Card, Confirm, InputBox }
}
</script>

<template>
<div class="root">
    <Card title="全部节点">
        共有 3 个父节点, 22 个子节点
        <div slot="oper">
            <md-button class="md-icon-button" @click="show.add = true; delete nodeModel.parent">
                <md-icon>add</md-icon>
            </md-button>
        </div>
    </Card>
{{$store.state.msg}}
    <!-- 节点列表 -->
    <div>
        <Card v-for="x in nodeList" :key="x.id" :title="x.title">
            <div slot="oper">
                <md-button class="md-icon-button" @click="removeId = x.id; show.remove = true">
                    <md-icon>remove</md-icon>
                </md-button>
                <md-button class="md-icon-button" @click="nodeModel.parent = x.id; show.add = true">
                    <md-icon>add</md-icon>
                </md-button>
            </div>
            <ul class="list">
                <li v-for="c in x.child">{{ c.title }}</li>
            </ul>
        </Card>
    </div>

    <!-- 添加节点 -->
    <InputBox :show="show.add" :title="`加${nodeModel.parent ? '子' : '父'}节点`" @close="show.add = false" @submit="add()">
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
        </form>
    </InputBox>

    <!-- 删除节点 -->
    <Confirm :show="show.remove" title="确认删除" @close="show.remove = false" @submit="remove()">
        你确定要删除这个节点么? 此操作无可挽回!
    </Confirm>

</div>
</template>

<style scoped>
.root {
    width: 100%;
}
.list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: flex-start;
}
.list li {
    padding: 3px 10px;
    font-size: 12px;
    margin: 2px 5px;
    border-radius: 20px;
    border: 1px solid #e0e0e0;
}
.list li:hover {
    background: #e0e0e0;
}
.md-button {
    margin: 0;
    color: rgba(0, 0, 0, 0.54);
}
</style>
