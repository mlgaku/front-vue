<script>
import Card from '@/components/Card'
import Toolbar from '@/components/Toolbar'
import Shortcut from '@/components/Shortcut'
import NodeInfo from '@/components/NodeInfo'
import TopicList from '@/components/TopicList'

import { mapGetters } from 'vuex'

export default {
    computed: {
        // 节点信息
        info () {
            return this.nodeInfo({ name: this.$route.params.name })
        },

        ...mapGetters([
            'nodeInfo'
        ])
    },

    components: { Card, Toolbar, Shortcut, NodeInfo, TopicList }
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
                    <!-- 节点信息 -->
                    <NodeInfo :info="info"/>

                    <!-- 主题列表 -->
                    <TopicList :node="info.id"/>
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

    <!-- 快捷按钮 -->
    <Shortcut/>
</div>
</template>

<style scoped>
.main {
    align-items: flex-start;
}
.main > .md-layout {
    padding-top: 20px;
    padding-bottom: 20px;
}
.main .md-layout > * + * {
    margin-top: 20px;
}
</style>
