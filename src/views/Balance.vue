<script>
import Card from '@/components/Card'
import BillList from '@/components/BillList'

export default {
    components: { Card, BillList }
}
</script>

<template>
<md-layout md-align="center">
    <md-layout md-flex="65">
        <md-layout class="main" md-gutter="16">
            <md-layout md-flex="75">
                    <Card title="账户余额" nopad>
                        <!-- 余额 -->
                        <div class="balance">
                            <md-chip>当前余额：553 点</md-chip>
                        </div>
                        <!-- 账单列表 -->
                        <BillList/>
                    </Card>
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
.balance {
    padding: 15px 0;
    border-bottom: 1px solid #e0e0e0;
}
.balance > * {
    margin-left: 16px;
}
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
