<script>
import Card from '@/components/Card'
import NodeList from '@/components/NodeList'

export default {
    components: { Card, NodeList }
}
</script>

<template>
<md-layout md-align="center">
    <md-layout md-flex="65">
        <md-layout class="main" md-gutter="16">
            <md-layout md-flex="75">
                <NodeList/>
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
.main > * {
    padding-top: 20px;
    padding-bottom: 20px;
}
.md-button {
    margin: 0;
    color: rgba(0, 0, 0, 0.54);
}
</style>
