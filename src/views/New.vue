<script>
import Card from '@/components/Card'
import Editor from '@/components/Editor'
import Toolbar from '@/components/Toolbar'

import { mapState } from 'vuex'
import { MSG, TOPIC_NEW } from '@/store/types'

export default {
    data: () => ({
        // 主题信息
        topicInfo: {}
    }),

    watch: {
        newStatus (val) {
            if (val !== '') {
                this.$store.dispatch(MSG, '发表主题成功')
                this.$router.push({ path: `/topic/${val}` })
            }
        }
    },

    methods: {
        submit () {
            this.$store.dispatch(TOPIC_NEW, this.topicInfo)
        }
    },

    computed: mapState({
        nodeList: s => s.node.list,
        newStatus: s => s.topic.new
    }),

    components: { Card, Editor, Toolbar }
}
</script>

<template>
<div>
    <!-- 头部 -->
    <Toolbar/>

    <md-layout md-align="center">
        <md-layout md-flex="65">
            <Card title="发表主题" nopad>
                <form novalidate @submit.stop.prevent="submit()">
                    <!-- 标题 -->
                    <textarea class="title" v-model="topicInfo.title" placeholder="请输入主题标题，如果标题能够表达完整内容，则正文可以为空"></textarea>

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
                            <md-button type="submit" class="md-raised md-primary">发表</md-button>
                        </md-layout>
                    </md-layout>
                </form>
            </Card>
        </md-layout>
    </md-layout>
</div>
</template>

<style scoped>
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
</style>
