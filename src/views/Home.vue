<script>
import Card from '@/components/Card'
import Shortcut from '@/components/Shortcut'
import TopicList from '@/components/TopicList'

import { mapGetters } from 'vuex'
import { SUB_ADD, SUB_REMOVE, TOPIC_LIST } from '@/store/types'

export default {
    beforeMount () {
        this.$store.dispatch(SUB_ADD, {
            type: TOPIC_LIST,
            body: { page: 1 }
        })
    },

    destroyed () {
        this.$store.dispatch(SUB_REMOVE, TOPIC_LIST)
    },

    methods: {
        onpage (p) {
            this.$store.dispatch(SUB_ADD, {
                type: TOPIC_LIST,
                body: { page: p }
            })
        }
    },

    computed: mapGetters([
        'topicList'
    ]),

    components: { Card, Shortcut, TopicList }
}
</script>

<template>
<div>
    <md-layout md-align="center">
        <md-layout md-flex="65">
            <md-layout class="main" md-gutter="16">
                <md-layout md-flex="75">
                    <!-- 列表 -->
                    <TopicList
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

    <!-- 快捷按钮 -->
    <Shortcut/>
</div>
</template>

<style scoped>
.main {
    align-items: flex-start;
}
.main > .md-layout:nth-child(1) {
    padding-top: 20px;
    padding-bottom: 20px;
}
.main > .md-layout:nth-child(2) > * {
    margin-top: 20px;
}
</style>
