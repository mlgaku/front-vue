<script>
import Card from '@/components/Card'
import Editor from '@/components/Editor'

import { Beat } from '@/utils'
import { mapState } from 'vuex'
import { MSG, TOPIC_EDIT, TOPIC_INFO } from '@/store/types'

export default {
    watch: {
        editStatus (val) {
            if (Beat(val)) {
                this.$store.dispatch(MSG, '编辑主题成功')
                this.$router.push({ path: `/topic/${this.topicId}` })
            }
        }
    },

    methods: {
        submit () {
            this.$store.dispatch(TOPIC_EDIT, this.topicInfo)
        }
    },

    computed: {
        topicId () {
            return this.$route.params.id
        },
        ...mapState({
            nodeList: s => s.node.list,
            topicInfo: s => s.topic.info,
            editStatus: s => s.topic.edit
        })
    },

    beforeMount () {
        this.$store.dispatch(TOPIC_INFO, this.topicId)
    },

    components: { Card, Editor }
}
</script>

<template>
<div>
    <md-layout md-align="center">
        <md-layout class="main" md-flex="65">
            <Card title="编辑主题" nopad>
                <form novalidate @submit.stop.prevent="submit()">
                    <!-- 标题 -->
                    <textarea class="title" v-model="topicInfo.title"></textarea>

                    <!-- 编辑器 -->
                    <Editor class="editor" v-model="topicInfo.content" linenum linewrap/>

                    <md-layout class="submit">
                        <!-- 节点列表 -->
                        <md-layout>
                            <md-input-container>
                                <label for="node">选择节点</label>
                                <md-select id="node" v-model="topicInfo.node">
                                    <md-option v-for="x in nodeList" :key="x.id" :value="x.id">{{ x.title }}</md-option>
                                </md-select>
                            </md-input-container>
                        </md-layout>

                        <md-layout>
                            <md-button type="submit" class="md-raised md-primary">保存</md-button>
                        </md-layout>
                    </md-layout>
                </form>
            </Card>
        </md-layout>
    </md-layout>
</div>
</template>

<style scoped>
.main {
    padding-top: 20px;
    padding-bottom: 20px;
}
.title {
    width: 100%;
    display: block;
    border: none;
    outline: none;
    resize: vertical;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
    line-height: 40px;
    overflow-y: hidden;
    border-bottom: 1px solid #e0e0e0;
}
.editor {
    border-bottom: 1px solid #e0e0e0;
}
.submit {
    align-items: center;
    margin: 10px 15px 0 15px;
    justify-content: space-between;
}
.submit .md-layout {
    flex: none;
    min-width: auto;
}
.markdown-body {
    background: red;
}
</style>
