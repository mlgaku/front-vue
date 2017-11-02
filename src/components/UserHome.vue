<script>
import Card from './Card'
import TopicList from './TopicList'
import ReplyList from './ReplyList'

import { mapGetters } from 'vuex'

export default {
    props: {
        // 用户信息
        info: Object
    },

    computed: {
        ...mapGetters([
            'avatarURL'
        ])
    },

    components: { Card, TopicList, ReplyList }
}
</script>

<template>
<div class="root">
    <!-- 用户信息 -->
    <md-card v-if="info.user">
        <md-card-header>
            <md-card-media>
                <img :src="avatarURL(info.user)">
            </md-card-media>

            <md-card-header-text>
                <div class="md-title">{{ info.user.name }}</div>
                <div class="md-subhead">
                    <p>{{ info.user.intro }}</p>
                    <p>加入于 {{ info.user.reg_date }}</p>
                </div>
            </md-card-header-text>

            <md-menu md-size="4" md-direction="bottom left">
                <md-button class="md-icon-button" md-menu-trigger>
                    <md-icon>more_vert</md-icon>
                </md-button>

                <md-menu-content>
                    <md-menu-item>
                        <span>Call</span>
                        <md-icon>phone</md-icon>
                    </md-menu-item>

                    <md-menu-item>
                        <span>Send a message</span>
                        <md-icon>message</md-icon>
                    </md-menu-item>
                </md-menu-content>
            </md-menu>
        </md-card-header>

        <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
        </md-card-content>
    </md-card>
    <!-- 发表的主题 -->
    <Card title="发表的主题" nopad>
        <TopicList :list="info.topic" noavt/>
    </Card>
    <!-- 发表的回复 -->
    <Card title="发表的回复" nopad>
        <ReplyList :list="info.reply" noavt/>
    </Card>
</div>
</template>

<style scoped>
.root {
    width: 100%;
}
.root > * + * {
    margin-top: 20px;
}
.md-title {
    margin-top: 0 !important;
}
.md-subhead p {
    margin-top: 0;
    margin-bottom: 0;
}
.md-card-media {
    margin-right: 16px;
    margin-left: 0 !important;
}
.md-card-header-text {
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
}
.md-card-header-text > * {
    width: 100%;
}
</style>
