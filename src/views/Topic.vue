<script>
import { mapState } from 'vuex'
import { TOPIC_INFO } from '@/store/types'
import Card from '@/components/Card'
import Toolbar from '@/components/Toolbar'
import TopicInfo from '@/components/TopicInfo'

export default {
    beforeMount () {
        this.$store.dispatch(TOPIC_INFO, this.$route.params.id)
    },

    computed: mapState({
        topicInfo: s => s.topic.info
    }),

    components: { Card, Toolbar, TopicInfo }
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
                    <TopicInfo :info="topicInfo"/>
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