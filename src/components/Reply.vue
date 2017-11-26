<script>
import Card from './Card'
import Editor from './Editor'

import { mapState } from 'vuex'
import { MSG, REPLY_NEW } from '@/store/types'

export default {
    data: () => ({
        // 回复内容
        content: ''
    }),

    props: {
        // 主题ID
        tid: String
    },

    watch: {
        replyStatus (val) {
            if (val) {
                this.content = ''
                this.$store.dispatch(MSG, '回复成功')
            }
        }
    },

    methods: {
        submit () {
            if (this.content.length < 5 || this.content.length > 300) {
                this.$store.dispatch(MSG, '回复内容长度需要在 5-300 字以内')
                return
            }

            this.$store.dispatch(REPLY_NEW, {
                topic: this.tid,
                content: this.content
            })
        }
    },

    computed: {
        ...mapState({
            replyStatus: s => s.reply.new
        })
    },

    components: { Card, Editor }
}
</script>

<template>
<Card title="回复一下" nopad>
    <form novalidate @submit.stop.prevent="submit()">
        <Editor class="editor" v-model.trim="content" linewrap height="150px"/>
        <div class="bottom">
            <span>请尽量让自己的回复能够对别人有帮助</span>
            <md-button type="submit" class="md-raised md-primary">回复</md-button>
        </div>
    </form>
</Card>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
.bottom {
    display: flex;
    padding: 5px 10px;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #e0e0e0;
}
.bottom span {
    color: gray;
}
.bottom button {
    margin-left: 0;
    margin-right: 0;
}
.md-whiteframe {
    width: 100%;
    background: white;
}
</style>
