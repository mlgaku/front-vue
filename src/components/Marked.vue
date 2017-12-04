<script>
import Marked from 'marked'
import { Prism } from '@/utils'
import 'github-markdown-css'

export default {
    props: {
        // 滚动
        scroll: Number,
        // 填充
        padding: String,
        // 原内容
        content: String
    },

    watch: {
        scroll (val) {
            this.$refs.preview.scrollTop = val
        }
    },

    methods: {
        render () {
            return Marked(this.content).replace(/@([a-zA-Z0-9]+)/, '@<at>$1</at>')
        }
    },

    created () {
        const renderer = new Marked.Renderer()
        renderer.link = (href, title, text) => {
            return `<a rel="nofollow" href="${href}" title="${title || ''}" target="_blank">${text}</a>`
        }

        Marked.setOptions({
            breaks: true,
            sanitize: true,
            renderer: renderer
        })
    },

    computed: {
        compiled () {
            this.$nextTick(() => {
                // 高亮
                Prism.highlightAll()

                // at
                document.querySelectorAll('at').forEach(x => {
                    x.onclick = e => {
                        this.$router.push({ path: `/user/${e.target.innerHTML}` })
                    }
                })
            })

            return this.render()
        }
    }
}
</script>

<template>
<div
    ref="preview"
    v-html="compiled"
    class="markdown-body"
    :style="{padding: padding}"
 ></div>
</template>

<style>
at {
    cursor: pointer;
}
at:hover {
    text-decoration: underline;
}
.markdown-body {
    color: #444;
    width: 100%;
    line-height: 1.8;
    background: white;
    overflow-y: hidden;
}
.markdown-body code[class*="language-"] {
    color: inherit !important;
    background-color: transparent !important;
}
</style>
