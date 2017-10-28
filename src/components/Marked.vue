<script>
import Marked from 'marked'
import Prism from '@/utils/Prism'
import 'github-markdown-css'

export default {
    props: {
        // 填充
        padding: String,
        // 原内容
        content: String
    },

    computed: {
        compiled () {
            this.$nextTick(() => {
                Prism.highlightAll()
            })
            return Marked(this.content, { sanitize: true })
        }
    }
}
</script>

<template>
<div v-html="compiled" class="markdown-body" :style="{padding: padding}"></div>
</template>

<style>
.markdown-body {
    color: #444;
    width: 100%;
    overflow-y: auto;
    line-height: 1.8;
    background: white;
}
.markdown-body code[class*="language-"] {
    color: inherit;
    background-color: transparent;
}
</style>
