<script>
import InputBox from './InputBox'
import NodeHandle from './NodeHandle'

import { mapGetters } from 'vuex'

export default {
    data: () => ({
        // 显示编辑模态框
        show: false,
        // 移除节点 ID
        removeId: ''
    }),

    props: {
        // 节点信息
        info: Object
    },

    computed: {
        editNode () {
            return this.show ? this.info : {}
        },
        ...mapGetters([
            'nodeTitle'
        ])
    },

    components: { InputBox, NodeHandle }
}
</script>

<template>
<div class="root">
    <md-card>
        <md-card-header>
            <md-card-header-text>
                <div class="md-title">{{ info.title }}</div>
                <div class="md-subhead">共有 349 个主题 &nbsp; 父节点为 {{ nodeTitle(info.parent) }}</div>
            </md-card-header-text>

            <md-menu md-size="4" md-direction="bottom left">
                <md-button class="md-icon-button" md-menu-trigger>
                    <md-icon>more_vert</md-icon>
                </md-button>

                <md-menu-content>
                    <md-menu-item @click="show = true">
                        <span>编辑</span>
                        <md-icon>edit</md-icon>
                    </md-menu-item>

                    <md-menu-item @click="removeId = info.id">
                        <span>删除节点</span>
                        <md-icon>delete</md-icon>
                    </md-menu-item>
                </md-menu-content>
            </md-menu>
        </md-card-header>

        <md-card-content>
            节点的一些描述信息
        </md-card-content>
    </md-card>

    <!-- 节点操作处理 -->
    <NodeHandle
        :removeId="removeId"
        :editNode="editNode"
        @close="show = false"/>
</div>
</template>

<style scoped>
.root {
    width: 100%;
}
</style>
