<script>
import { mapGetters } from 'vuex'

import Card from './Card'
import NodeHandle from './NodeHandle'

export default {
    data: () => ({
        // 添加节点
        addNode: {},
        // 移除节点 ID
        removeId: ''
    }),

    computed: {
        ...mapGetters([
            'nodeList'
        ])
    },

    components: { Card, NodeHandle }
}
</script>

<template>
<div class="root">
    <!-- 统计信息 -->
    <Card title="全部节点">
        共有 3 个父节点, 22 个子节点
        <div slot="oper">
            <md-button class="md-icon-button" @click="addNode = { show: true }">
                <md-icon>add</md-icon>
            </md-button>
        </div>
    </Card>
    <!-- 节点列表 -->
    <Card v-for="x in nodeList" :key="x.id" :title="x.title">
        <div slot="oper">
            <md-button class="md-icon-button" @click="removeId = x.id">
                <md-icon>remove</md-icon>
            </md-button>
            <md-button class="md-icon-button" @click="addNode = { show: true, parent: x.id }">
                <md-icon>add</md-icon>
            </md-button>
        </div>
        <div class="list">
            <router-link
                v-for="c in x.child"
                :key="c.id"
                :to="`/node/${c.name}`"
            >{{ c.title }}</router-link>
        </div>
    </Card>
    <!-- 节点操作处理 -->
    <NodeHandle
        :addNode="addNode"
        :removeId="removeId"
        @close="t => t === 1 ? addNode = {} : removeId = ''"/>
</div>
</template>

<style scoped>
.root {
    width: 100%;
}
.root > * + * {
    margin-top: 20px;
}
.list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.list a {
    font-size: 12px;
    padding: 3px 10px;
    margin: 2px 5px;
    border-radius: 20px;
    color: black !important;
    border: 1px solid #e0e0e0;
}
.list a:hover {
    background: #e0e0e0;
    text-decoration: none;
}
.md-button {
    margin: 0;
    color: rgba(0, 0, 0, 0.54);
}
</style>
