<script>
import Marked from './Marked'
import { mapGetters } from 'vuex'

export default {
    props: {
        // 主题信息
        info: Object
    },

    computed: mapGetters([
        'date',
        'nodeTitle'
    ]),

    components: { Marked }
}
</script>

<template>
<div v-if="info.id === undefined">
    加载中...
</div>

<md-card v-else>
    <md-card-header :style="{borderBottom: info.content ? '1px solid rgba(0, 0, 0, 0.12)' : ''}">
        <md-card-header-text>
            <div class="md-title">{{ info.title }}</div>
            <div class="md-subhead">
                {{ info.user.name }} • {{ nodeTitle(info.node) }} • {{ date(info.date) }} • {{ info.views }} 次查看 • {{ info.replies }} 条回复
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

                <md-menu-item>
                    <span>补充内容</span>
                    <md-icon>playlist_add</md-icon>
                </md-menu-item>
            </md-menu-content>
        </md-menu>
    </md-card-header>

    <md-card-content v-if="info.content">
        <Marked :content="info.content"/>
    </md-card-content>
</md-card>
</template>

<style scoped>
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
