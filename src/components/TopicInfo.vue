<script>
import Marked from './Marked'
import { mapGetters } from 'vuex'

export default {
    props: {
        // 主题信息
        info: Object
    },

    computed: mapGetters([
        'nodeTitle'
    ]),

    components: { Marked }
}
</script>

<template>
<md-whiteframe md-elevation="2">
    <div v-if="info.id === undefined">
        加载中...
    </div>
    <div v-else>
        <div class="meta">
            <h1>{{ info.title }}</h1>
            <span>{{ info.user.name }} • {{ nodeTitle(info.node) }} • {{ info.date }} • {{ info.views }} 次查看 • {{ info.replies }} 条回复</span>
        </div>
        <div class="body" v-if="info.content">
            <Marked :content="info.content"/>
        </div>
    </div>
</md-whiteframe>
</template>

<style scoped>
.meta {
    padding: 15px;
    background: #fafafa;
}
.meta h1 {
    font-size: 25px;
}
.meta span {
    color: gray;
    font-size: 13px;
}
.body {
    margin: 5px 0;
    padding: 15px;
}
.md-whiteframe {
    width: 100%;
    margin: 20px 0;
    background: white;
}
</style>
