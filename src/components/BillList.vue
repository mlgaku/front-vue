<script>
import { mapState, mapGetters } from 'vuex'
import { BILL_LIST } from '@/store/types'

export default {
    computed: {
        ...mapState({
            billList: s => s.bill.list
        }),
        ...mapGetters([
            'billType'
        ])
    },

    beforeMount () {
        this.$store.dispatch(BILL_LIST)
    }
}
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
        <md-table-row v-for="(x, i) in billList" :key="i">
            <md-table-cell>{{ i + 1 }}</md-table-cell>
            <md-table-cell>{{ x.date }}</md-table-cell>
            <md-table-cell>{{ billType(x.type) }}</md-table-cell>
            <md-table-cell md-numeric>{{ x.number }}</md-table-cell>
            <md-table-cell>{{ x.msg }}</md-table-cell>
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
