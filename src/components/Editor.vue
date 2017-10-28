<script>
import Marked from './Marked'

import Codemirror from 'codemirror'
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
        maxHeight () {
            return this.height || '450px'
        }
    },

    components: { Marked }
}
</script>

<template>
<md-layout>
    <md-layout class="editor">
        <textarea ref="editor"></textarea>
    </md-layout>
    <md-layout :style="{'max-height': maxHeight}">
        <Marked padding="8px" :content="content"/>
    </md-layout>
</md-layout>
</template>

<style scoped>
.editor {
    border-right: 1px solid #e0e0e0;
}
</style>
