<script>
import Marked from './Marked'
import { mapGetters } from 'vuex'

export default {
    props: {
        // 回复列表
        list: Array,
        // 不显示头像
        noavt: Boolean
    },

    computed: mapGetters([
        'date',
        'avatarURL'
    ]),

    components: { Marked }
}
</script>

<template>
<md-whiteframe md-elevation="2">
    <md-list class="custom-list md-triple-line">
        <md-list-item v-for="x in list" :key="x.id" class="reply-list">
            <md-avatar v-if="!noavt">
                <img :src="avatarURL(x.user)">
            </md-avatar>

            <div class="md-list-text-container">
                <div class="author">
                    <router-link v-if="x.user.name" :to="`/user/${x.user.name}`">{{ x.user.name }}</router-link>
                    <span>{{ date(x.date) }}</span>
                </div>
                <div class="content">
                    <Marked :content="x.content"/>
                </div>
            </div>

            <md-divider class="md-inset" :class="{noavt: noavt}"></md-divider>
        </md-list-item>
    </md-list>
</md-whiteframe>
</template>

<style scoped>
.noavt {
    margin-left: 0;
}
.author > a {
    margin-right: 10px;
}
.author > span {
    color: gray;
    font-size: 13px;
}
.content {
    margin-top: 3px;
    white-space: normal;
}
.md-whiteframe {
    width: 100%;
}
</style>

<style>
.reply-list.md-list-item > div.md-list-item-container {
    padding-top: 20px;
    padding-bottom: 20px;
    min-height: auto !important;
}
</style>
