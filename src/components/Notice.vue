<script>
import 'csshake'
import { Beat } from '@/utils'
import { mapState } from 'vuex'
import { MSG, SUB_ADD, SUB_REMOVE, NOTICE_LIST, NOTICE_REMOVE } from '@/store/types'

export default {
    watch: {
        removeStatus (val) {
            if (Beat(val)) {
                this.$store.dispatch(MSG, '删除通知成功')
            }
        }
    },

    methods: {
        remove (id) {
            this.$store.dispatch(NOTICE_REMOVE, id)
        }
    },

    computed: mapState({
        noticeList: s => s.notice.list,
        removeStatus: s => s.notice.remove
    }),

    beforeMount () {
        this.$store.dispatch(SUB_ADD, NOTICE_LIST)
    },

    destroyed () {
        this.$store.dispatch(SUB_REMOVE, NOTICE_LIST)
    }
}
</script>

<template>
<md-menu md-size="7" md-direction="bottom left" md-align-trigger ref="menu">
    <md-button
        class="md-icon-button" md-menu-trigger
        :class="{'shake-constant shake-rotate': noticeList && noticeList.length > 0}">
        <md-icon>notifications</md-icon>
    </md-button>

    <md-menu-content class="notice">
        <div class="card">通知</div>
        <div class="nomsg" v-if="!noticeList || noticeList.length < 1">
            当前还没有未读的通知
        </div>
        <md-menu-item v-for="x in noticeList" :key="x.id">
            <div class="text" v-if="x.type == 1">
                {{ x.user }} 回复了你的主题 <router-link :to="`/topic/${x.topic_id}`">{{ x.topic_title }}</router-link>
            </div>
            <div class="text" v-if="x.type == 2">
                {{ x.user }} 在主题 <router-link :to="`/topic/${x.topic_id}`">{{ x.topic_title }}</router-link> 中 At 了你
            </div>
            <div class="text" v-if="x.type == 3">
                {{ x.user }} 修改了你的主题 <router-link :to="`/topic/${x.topic_id}`">{{ x.topic_title }}</router-link>
            </div>
            <div class="text" v-if="x.type == 4">
                {{ x.user }} 移动了你的主题 <router-link :to="`/topic/${x.topic_id}`">{{ x.topic_title }}</router-link>
            </div>
            <div class="text" v-if="x.type == 5">
                {{ x.user }} 修改并移动了你的主题 <router-link :to="`/topic/${x.topic_id}`">{{ x.topic_title }}</router-link>
            </div>
            <md-button class="md-icon-button" @click="remove(x.id)">
                <md-icon>delete</md-icon>
            </md-button>
        </md-menu-item>
    </md-menu-content>
</md-menu>
</template>

<style>
.notice .md-menu-item > button.md-button { display: none; }
.notice .md-menu-item .md-list-item-container { cursor: default; }
</style>

<style scoped>
.card {
    padding: 16px;
    font-size: 16px;
    font-weight: 400;
    background: #f1f1f1;
    margin-top: -8px;
    margin-bottom: 8px;
}
.nomsg {
    padding: 16px;
}
.md-menu {
    display: flex;
    align-items: center;
}
.md-menu-item div.text {
    font-size: 13px;
    line-height: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    white-space: normal;
    word-wrap: break-word;
}
</style>
