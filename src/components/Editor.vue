<script>
import Marked from 'marked'
import Codemirror from 'codemirror'

import 'github-markdown-css'
import 'codemirror/lib/codemirror.css'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/php/php'

export default {
    data: () => ({
        // 内容
        content: '',
        // Codemirror
        codemirror: null
    }),

    props: {
        // 初始值
        value: String,
        // 编辑器高度
        height: String,
        // 显示行号
        linenum: Boolean,
        // 自动换行
        linewrap: Boolean
    },

    mounted () {
        this.codemirror = Codemirror.fromTextArea(this.$refs.editor, {
            mode: 'markdown',
            readOnly: false,
            lineNumbers: this.linenum,
            lineWrapping: this.linewrap
        })
        this.codemirror.on('change', this.change)
        this.codemirror.setSize('100%', this.maxHeight)
        this.codemirror.setValue(this.value || '')
    },

    methods: {
        change (cm) {
            this.content = cm.getValue()
            this.$emit('input', this.content)
        }
    },

    computed: {
        preview () {
            return Marked(this.content, { sanitize: true })
        },
        maxHeight () {
            return this.height || '450px'
        }
    }
}
</script>

<template>
<md-layout>
    <md-layout>
        <textarea ref="editor"></textarea>
    </md-layout>
    <md-layout :style="{'max-height': maxHeight}">
        <div v-html="preview" class="preview markdown-body"></div>
    </md-layout>
</md-layout>
</template>

<style scoped>
.preview {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    background: white;
    border-left: 1px solid #e0e0e0;
    overflow-y: auto;
}
</style>
