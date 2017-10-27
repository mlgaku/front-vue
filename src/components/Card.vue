<script>
export default {
    props: {
        // 标题
        title: String,
        // 不填充
        nopad: Boolean
    }
}
</script>

<template>
<md-card>
    <md-toolbar class="md-transparent">
        <h2 class="md-title">{{title}}</h2>
        <slot name="oper"></slot>
    </md-toolbar>
    <md-card-area :style="{padding: nopad ? '' : '15px'}">
        <slot/>
    </md-card-area>
</md-card>
</template>

<style scoped>
.md-card {
    width: 100%;
    margin: 20px 0;
}
.md-title {
    font-size: 16px;
}
.md-toolbar {
    min-height: 45px;
    justify-content: space-between;
    border-bottom: 1px solid #e0e0e0;
}
</style>
