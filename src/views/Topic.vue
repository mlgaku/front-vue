<script>
import { mapState } from 'vuex'
import { TOPIC_INFO } from '@/store/types'
import Card from '@/components/Card'
import Toolbar from '@/components/Toolbar'
import TopicInfo from '@/components/TopicInfo'
import ReplyList from '@/components/ReplyList'

export default {
    beforeMount () {
        this.$store.dispatch(TOPIC_INFO, this.topicId)
    },

    computed: {
        topicId () {
            return this.$route.params.id
        },
        ...mapState({
            topicInfo: s => s.topic.info
        })
    },

    components: { Card, Toolbar, TopicInfo, ReplyList }
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
                    <!-- 主题信息 -->
                    <TopicInfo :info="topicInfo"/>
                    <!-- 回复列表 -->
                    <ReplyList :tid="topicId"/>
                    <!-- 回复主题 -->
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
</style>