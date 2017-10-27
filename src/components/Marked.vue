<script>
import Marked from 'marked'
import 'github-markdown-css'

export default {
    props: {
        // 原内容
        content: String
    },

    computed: {
        compiled () {
            return Marked(this.content, { sanitize: true })
        }
    }
}
</script>

<template>
<div v-html="compiled" class="markdown-body"></div>
</template>

<style scoped>
.markdown-body {
    color: #444;
    width: 100%;
    padding: 8px;
    font-size: 14px;
    overflow-y: auto;
    line-height: 1.8;
    background: white;
}
</style>
