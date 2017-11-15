<script>
import Card from '@/components/Card'
import NodeInfo from '@/components/NodeInfo'
import TopicList from '@/components/TopicList'

import { mapGetters } from 'vuex'
import { SUB_ADD, SUB_REMOVE, TOPIC_LIST } from '@/store/types'

export default {
    data: () => ({
        // 节点ID
        node: ''
    }),

    watch: {
        'info.id': {
            handler (val) {
                if (val) {
                    this.node = val
                    this.$store.dispatch(SUB_ADD, {
                        type: TOPIC_LIST,
                        body: { page: 1, node: val }
                    })
                }
            },
            immediate: true
        }
    },

    methods: {
        onpage (p) {
            this.$store.dispatch(SUB_ADD, {
                type: TOPIC_LIST,
                body: { page: p, node: this.node }
            })
        }
    },

    computed: {
        // 节点信息
        info () {
            return this.nodeInfo({ name: this.$route.params.name })
        },

        ...mapGetters([
            'nodeInfo',
            'topicList'
        ])
    },

    destroyed () {
        this.$store.dispatch(SUB_REMOVE, TOPIC_LIST)
    },

    components: { Card, NodeInfo, TopicList }
}
</script>

<template>
<div>
    <md-layout md-align="center">
        <md-layout md-flex="65">
            <md-layout class="main" md-gutter="16">
                <md-layout md-flex="75">
                    <!-- 节点信息 -->
                    <NodeInfo :info="info"/>
                    <!-- 主题列表 -->
                    <TopicList
                        :per="topicList.per"
                        :page="topicList.page"
                        :total="topicList.total"
                        :list="topicList.list"
                        @onpage="onpage"/>
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
