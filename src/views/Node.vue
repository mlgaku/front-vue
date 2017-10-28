<script>
import Card from '@/components/Card'
import Toolbar from '@/components/Toolbar'
import Confirm from '@/components/Confirm'
import InputBox from '@/components/InputBox'
import NodeList from '@/components/NodeList'

import { Beat } from '@/utils'
import { mapState } from 'vuex'
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
        })
    },

    components: { Card, Toolbar, Confirm, InputBox, NodeList }
}
</script>

<template>
<div>
    <!-- 头部 -->
    <Toolbar/>

    <md-layout md-align="center">
        <md-layout md-flex="65">
            <md-layout class="main" md-gutter="16">
                <md-layout md-flex="75">
                    <!-- 统计信息 -->
                    <Card title="全部节点">
                        共有 3 个父节点, 22 个子节点
                        <div slot="oper">
                            <md-button class="md-icon-button" @click="show.add = true; delete nodeModel.parent">
                                <md-icon>add</md-icon>
                            </md-button>
                        </div>
                    </Card>
                    <!-- 节点列表 -->
                    <NodeList
                        @add="nodeModel.parent = arguments[0]; show.add = true"
                        @remove="removeId = arguments[0]; show.remove = true"/>
                </md-layout>
                <md-layout md-flex="25">
                    <!-- 卡片 -->
                    <Card title="热门节点">
                        这里是一些测试的文字内容
                    </Card>
                </md-layout>
            </md-layout>
        </md-layout>
    </md-layout>

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
.main {
    align-items: flex-start;
}
.main > * {
    padding-top: 20px;
    padding-bottom: 20px;
}
.md-button {
    margin: 0;
    color: rgba(0, 0, 0, 0.54);
}
</style>
