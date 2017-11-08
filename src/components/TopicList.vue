<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        // 主题列表
        list: Array,
        // 不显示头像
        noavt: Boolean
    },

    computed: {
        ...mapGetters([
            'date',
            'nodeTitle',
            'avatarURL'
        ])
    }
}
</script>

<template>
<md-whiteframe md-elevation="2">
    <md-list class="custom-list md-triple-line">
        <md-list-item v-for="x in list" :key="x.id">
            <md-avatar v-if="!noavt">
                <img :src="avatarURL(x.user)">
            </md-avatar>

            <div class="md-list-text-container">
                <router-link :to="`/topic/${x.id}`">{{ x.title }}</router-link>
                <p>{{ x.user.name ? `${x.user.name} •` : '' }} {{ nodeTitle(x.node) }} • {{ date(x.date) }} {{ x.last_reply ? `• 最后回复来自 ${x.last_reply}` : '' }}</p>
            </div>

            <md-button class="md-icon-button">{{ x.replies }}</md-button>

            <md-divider class="md-inset" :class="{noavt: noavt}"></md-divider>
        </md-list-item>
    </md-list>
</md-whiteframe>
</template>

<style scoped>
.noavt {
    margin-left: 0;
}
.md-whiteframe {
    width: 100%;
}
.md-icon-button {
    padding: 0;
    height: 20px;
    color: white;
    font-size: 12px;
    min-width: auto;
    min-height: auto;
    background: #a7a7a7;
    border-radius: 100px;
    line-height: normal;
}
.md-icon-button:hover {
    background: #928f8f !important;
}
.md-list-text-container p {
    margin-top: 10px;
}
.md-list-text-container > a {
    color: rgba(0, 0, 0, .87) !important;
}
</style>
