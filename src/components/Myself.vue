<script>
import Avatar from './Avatar'

import { mapState } from 'vuex'
import { SUB_ADD, SUB_REMOVE, USER_INFO } from '@/store/types'

export default {
    computed: mapState({
        userInfo: s => s.user.info
    }),

    beforeMount () {
        this.$store.dispatch(SUB_ADD, USER_INFO)
    },

    destroyed () {
        this.$store.dispatch(SUB_REMOVE, USER_INFO)
    },

    components: { Avatar }
}
</script>

<template>
<md-menu md-size="4" md-direction="bottom left" md-align-trigger ref="menu">
    <md-button class="md-icon-button" md-menu-trigger>
        <Avatar :user="userInfo"/>
    </md-button>

    <md-menu-content>
        <div class="card">
            <md-avatar>
                <Avatar :user="userInfo"/>
            </md-avatar>
            <div class="card-info">
                <span>{{ userInfo.name }}</span>
                <span>{{ userInfo.email }}</span>
            </div>
        </div>
        <router-link to="/balance">
            <md-menu-item>余额</md-menu-item>
        </router-link>
        <router-link to="/setting">
            <md-menu-item>设置</md-menu-item>
        </router-link>
        <md-menu-item>退出</md-menu-item>
    </md-menu-content>
</md-menu>
</template>

<style scoped>
.card {
    display: flex;
    padding: 8px 16px;
    align-items: center;
    background: #f1f1f1;
    margin-top: -8px;
    margin-bottom: 8px;
}
.md-button {
    padding: 3px;
    box-sizing: content-box;
}
.md-button img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.md-avatar {
    width: 40px;
    height: 40px;
    min-width: auto;
    min-height: auto;
    border-radius: 50%;
    margin-right: 16px;
}
.card-info {
    flex: 1;
    display: flex;
    flex-flow: column;
}
.card-info span:nth-child(1) {
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
}
.card-info span:nth-child(2) {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.87);
}
.md-menu-content a,
.md-menu-content a:hover {
    text-decoration: none;
    color: inherit !important;
}
</style>
