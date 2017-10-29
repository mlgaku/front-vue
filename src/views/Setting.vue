<script>
import Card from '@/components/Card'
import UserInfo from '@/components/UserInfo'

export default {
    components: { Card, UserInfo }
}
</script>

<template>
<div>
    <md-layout md-align="center">
        <md-layout md-flex="65">
            <md-layout class="main" md-gutter="16">
                <md-layout md-flex="75">
                    <UserInfo/>
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
.main > .md-layout:nth-child(1) {
    padding-top: 20px;
    padding-bottom: 20px;
}
.main > .md-layout:nth-child(2) > * {
    margin-top: 20px;
}
</style>
