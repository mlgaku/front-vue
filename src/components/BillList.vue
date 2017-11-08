<script>
export default {}
</script>

<template>
<md-table>
    <md-table-header>
        <md-table-row>
            <md-table-head>#</md-table-head>
            <md-table-head>日期</md-table-head>
            <md-table-head>类型</md-table-head>
            <md-table-head md-numeric>数额</md-table-head>
            <md-table-head>提示信息</md-table-head>
        </md-table-row>
    </md-table-header>

    <md-table-body>
        <md-table-row v-for="(row, index) in 5" :key="index">
            <md-table-cell>{{ index + 1 }}</md-table-cell>
            <md-table-cell>2017-10-14T19:27:47.735+08:00</md-table-cell>
            <md-table-cell>每日签到</md-table-cell>
            <md-table-cell md-numeric>20</md-table-cell>
            <md-table-cell>20171103 签到获得</md-table-cell>
        </md-table-row>
    </md-table-body>
</md-table>
</template>

<style scoped>
.md-chip {
    margin-right: 16px;
}
.md-table-card {
    width: 100%;
}
</style>
