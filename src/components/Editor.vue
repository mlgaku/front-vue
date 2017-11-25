<script>
import _ from 'lodash'
import Marked from './Marked'

import Codemirror from 'codemirror'
import 'codemirror/lib/codemirror.css'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/php/php'

export default {
    data: () => ({
        scroll: 0,
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

    watch: {
        value (val) {
            const v = this.codemirror.getValue()
            if (val !== v && val !== _.trim(v)) {
                this.codemirror.setValue(val)
            }
        }
    },

    methods: {
        change (cm) {
            this.$emit('input', cm.getValue())

            const scroll = cm.getScrollInfo()
            if (scroll.top === 0) {
                this.scroll = 0
            } else if (scroll.top + scroll.clientHeight === scroll.height) {
                this.scroll = 99999 + scroll.height + Math.random()
            }
        }
    },

    computed: {
        content () {
            return this.value || ''
        },
        maxHeight () {
            return this.height || '500px'
        }
    },

    mounted () {
        this.codemirror = Codemirror.fromTextArea(this.$refs.editor, {
            mode: 'markdown',
            readOnly: false,
            lineNumbers: this.linenum,
            lineWrapping: this.linewrap
        })
        this.codemirror.setSize('100%', this.maxHeight)
        this.codemirror.on('change', _.debounce(this.change, 300))
    },

    components: { Marked }
}
</script>

<template>
<md-layout>
    <md-layout>
        <textarea ref="editor" v-model="value"></textarea>
    </md-layout>
    <md-layout :style="{'max-height': maxHeight}">
        <Marked padding="5px" :scroll="scroll" :content="content"/>
    </md-layout>
</md-layout>
</template>

<style scoped>
.md-layout > .md-layout:nth-child(1) {
    overflow: hidden;
    border-right: 1px solid #e0e0e0;
}
.md-layout > .md-layout:nth-child(2) {
    overflow: auto;
}
</style>
