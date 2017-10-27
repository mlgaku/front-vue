<script>
import Marked from './Marked'
import { mapState } from 'vuex'
import { SUB_ADD, SUB_REMOVE, REPLY_LIST } from '@/store/types'

export default {
    beforeMount () {
        this.$store.dispatch(SUB_ADD, {
            type: REPLY_LIST,
            body: { topic: this.tid }
        })
    },

    destroyed () {
        this.$store.dispatch(SUB_REMOVE, REPLY_LIST)
    },

    props: {
        // 主题ID
        tid: String
    },

    computed: mapState({
        replyList: s => s.reply.list
    }),

    components: { Marked }
}
</script>

<template>
<md-whiteframe md-elevation="2">
    <md-list class="custom-list md-triple-line">
        <md-list-item v-for="x in replyList" :key="x.id">
            <md-avatar>
                <img src="https://placeimg.com/40/40/people/1" alt="People">
            </md-avatar>

            <div class="md-list-text-container">
                <router-link :to="`/user/${x.user.name}`">{{ x.user.name }}</router-link>
                <Marked :content="x.content"/>
            </div>

            <md-button class="md-icon-button">{{ x.replies }}</md-button>

            <md-divider class="md-inset"></md-divider>
        </md-list-item>
    </md-list>
</md-whiteframe>
</template>

<style scoped>
.md-whiteframe {
    width: 100%;
}
</style>
