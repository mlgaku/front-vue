<script>
import Card from '@/components/Card'
import Toolbar from '@/components/Toolbar'
import TopicList from '@/components/TopicList'

import { SUB_ADD, SUB_REMOVE, TOPIC_LIST } from '@/store/types'

export default {
    beforeMount () {
        this.$store.dispatch(SUB_ADD, TOPIC_LIST)
    },
    destroyed () {
        this.$store.dispatch(SUB_REMOVE, TOPIC_LIST)
    },
    components: { Card, Toolbar, TopicList }
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
                    <!-- 列表 -->
                    <TopicList/>
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