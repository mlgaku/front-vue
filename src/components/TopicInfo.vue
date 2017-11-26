<script>
import Marked from './Marked'
import InputBox from './InputBox'

import { mapState, mapGetters } from 'vuex'
import { MSG, TOPIC_SUBTLE } from '@/store/types'

export default {
    data: () => ({
        subtleInfo: {
            // 主题ID
            topic: '',
            // 附加内容
            content: ''
        }
    }),

    props: {
        // 主题信息
        info: Object
    },

    watch: {
        subtleStatus (val) {
            if (val) {
                this.subtleInfo.topic = ''
                this.subtleInfo.content = ''
                this.$store.dispatch(MSG, '补充内容成功')
            }
        }
    },

    methods: {
        subtle () {
            this.$store.dispatch(TOPIC_SUBTLE, this.subtleInfo)
        }
    },

    computed: {
        ...mapState({
            subtleStatus: s => s.topic.subtle
        }),
        ...mapGetters([
            'date',
            'nodeTitle'
        ])
    },

    components: { Marked, InputBox }
}
</script>

<template>
<div class="root">
    <md-card>
        <div v-if="info.id === undefined">
            加载中...
        </div>

        <md-card-header v-else :style="{borderBottom: info.content ? '1px solid rgba(0, 0, 0, 0.12)' : ''}">
            <md-card-header-text>
                <div class="md-title">{{ info.title }}</div>
                <div class="md-subhead">
                    <!-- 用户名 -->
                    {{ info.user.name }} •
                    <!-- 节点名 -->
                    {{ nodeTitle(info.node) }} •
                    <!-- 发表日期 -->
                    <span :title="info.date">{{ date(info.date) }}</span> •
                    <!-- 查看&回复次数 -->
                    {{ info.views }} 次查看 • {{ info.replies }} 条回复
                </div>
            </md-card-header-text>

            <md-menu md-size="4" md-direction="bottom left">
                <md-button class="md-icon-button" md-menu-trigger>
                    <md-icon>more_vert</md-icon>
                </md-button>

                <md-menu-content>
                    <router-link :to="`/edit/${info.id}`">
                        <md-menu-item>
                            <span>编辑</span>
                            <md-icon>edit</md-icon>
                        </md-menu-item>
                    </router-link>

                    <md-menu-item @click="subtleInfo.topic = info.id">
                        <span>补充内容</span>
                        <md-icon>playlist_add</md-icon>
                    </md-menu-item>
                </md-menu-content>
            </md-menu>
        </md-card-header>

        <md-card-content v-if="info.content">
            <Marked :content="info.content"/>
        </md-card-content>

        <div class="subtle" v-for="(x, i) in info.subtle">
            <div class="fade">
                <!-- 标号 -->
                第 {{ i + 1 }} 条补充 •
                <!-- 附言日期 -->
                <span :title="x.date">{{ date(x.date) }}</span>
            </div>
            <Marked :content="x.content"/>
        </div>
    </md-card>
    <!-- 补充内容 -->
    <InputBox :show="subtleInfo.topic !== ''" title="补充" @close="subtleInfo.topic = ''" @submit="subtle()">
        <form novalidate @submit.stop.prevent>
            <md-input-container>
                <label>内容</label>
                <md-textarea maxlength="300" v-model="subtleInfo.content"></md-textarea>
            </md-input-container>
        </form>
    </InputBox>
</div>
</template>

<style scoped>
.root {
    width: 100%;
}
.fade {
    color: gray;
}
.subtle {
    padding: 16px;
    border-top: 1px solid #e0e0e0;
}
.md-card {
    width: 100%;
}
.md-card-content {
    margin-top: 16px;
}
.md-menu-content a {
    color: inherit !important;
    text-decoration: none !important;
}
</style>
