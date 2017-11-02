<script>
import Card from '@/components/Card'
import Reply from '@/components/Reply'
import TopicInfo from '@/components/TopicInfo'
import ReplyList from '@/components/ReplyList'

import { mapState } from 'vuex'
import { SUB_ADD, SUB_REMOVE, TOPIC_INFO, REPLY_LIST } from '@/store/types'

export default {
    beforeMount () {
        this.$store.dispatch(TOPIC_INFO, this.topicId)
        this.$store.dispatch(SUB_ADD, {
            type: REPLY_LIST,
            body: { topic: this.topicId }
        })
    },

    destroyed () {
        this.$store.dispatch(SUB_REMOVE, REPLY_LIST)
    },

    computed: {
        topicId () {
            return this.$route.params.id
        },
        ...mapState({
            topicInfo: s => s.topic.info,
            replyList: s => s.reply.list
        })
    },

    components: { Card, Reply, TopicInfo, ReplyList }
}
</script>

<template>
<md-layout md-align="center">
    <md-layout md-flex="65">
        <md-layout class="main" md-gutter="16">
            <md-layout md-flex="75">
                <!-- 主题信息 -->
                <TopicInfo :info="topicInfo"/>
                <!-- 回复列表 -->
                <ReplyList :list="replyList"/>
                <!-- 回复主题 -->
                <Reply :tid="topicId"/>
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
