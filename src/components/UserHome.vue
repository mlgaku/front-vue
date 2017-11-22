<script>
import Card from './Card'
import Avatar from './Avatar'
import TopicList from './TopicList'
import ReplyList from './ReplyList'

export default {
    props: {
        // 用户信息
        info: Object
    },

    components: { Card, Avatar, TopicList, ReplyList }
}
</script>

<template>
<div class="root">
    <!-- 用户信息 -->
    <md-card v-if="info.user">
        <md-card-header>
            <md-card-media>
                <Avatar :user="info.user"/>
            </md-card-media>

            <md-card-header-text>
                <div class="md-title">{{ info.user.name }}</div>
                <div class="md-subhead">
                    <p>{{ info.user.tagline }}</p>
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
            <a class="chip" target="_blank" v-if="info.user.website" :href="info.user.website">
                <md-icon>home</md-icon>
                <span>{{ info.user.website }}</span>
            </a>
            <a class="chip" target="_blank" v-if="info.user.github" :href="info.user.github">
                <i class="github"></i>
                <span>{{ info.user.github }}</span>
            </a>
            <a class="chip" target="_blank" v-if="info.user.twitter" :href="info.user.twitter">
                <i class="twitter"></i>
                <span>{{ info.user.twitter }}</span>
            </a>
            <a class="chip" target="_blank" v-if="info.user.telegram" :href="info.user.telegram">
                <i class="telegram"></i>
                <span>{{ info.user.telegram }}</span>
            </a>
            <div class="intro">{{ info.user.intro }}</div>
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

<style lang="scss" scoped>
@import '../assets/icon.scss';

.root {
    width: 100%;
    & > * + * {
        margin-top: 20px;
    }
}

a.chip {
    display: inline-flex;
    background: #f1f1f1;
    align-items: center;
    border-radius: 20px;
    padding: 5px 10px 5px 5px;
    color: rgba(0, 0, 0, .87) !important;

    & > i {
        width: 24px;
        height: 24px;
        background-size: cover;

        &.github {
            @include icon-github;
        }
        &.twitter {
            @include icon-twitter;
        }
        &.telegram {
            @include icon-telegram;
        }
    }

    & > span {
        margin-left: 5px;
    }

    &:hover {
        background: #dedede;
        text-decoration: none;
    }

    & + a.chip {
        margin-left: 5px;
    }
}

.intro {
    margin-top: 10px;
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
