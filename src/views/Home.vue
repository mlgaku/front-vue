<script>
import List from '@/components/List'
import Card from '@/components/Card'

import Toolbar from '@/components/Toolbar'

export default {
    components: { List, Card, Toolbar }
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
                        <List/>
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