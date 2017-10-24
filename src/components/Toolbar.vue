<script>
import logo from '@/assets/logo.png'

export default {
    data: () => ({
        logo
    })
}
</script>

<template>
<md-whiteframe md-elevation="2">
    <md-toolbar>
        <md-layout md-align="center" md-gutter="16">
            <md-layout md-flex="65">
                <img :src="logo">

                <div class="menu">
                    <router-link to="/">
                        <md-button class="md-dense">首页</md-button>
                    </router-link>
                    <router-link to="/node">
                        <md-button class="md-dense">节点</md-button>
                    </router-link>
                    <router-link to="/rank">
                        <md-button class="md-dense">排行榜</md-button>
                    </router-link>
                </div>

                <md-button class="md-icon-button">
                    <md-icon>favorite</md-icon>
                </md-button>
            </md-layout>
        </md-layout>
    </md-toolbar>
</md-whiteframe>
</template>

<style scoped>
.menu {
    flex: 1;
    margin-left: 50px;
}
.menu a {
    color: inherit !important;
}
.md-layout {
    align-items: center;
}
.md-button {
    min-width: auto;
}
.router-link-exact-active button {
    background-color: rgba(255, 255, 255, 0.1);
}
</style>
