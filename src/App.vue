<script>
import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import { Validator } from './utils'

import Toolbar from '@/components/Toolbar'
import Snackbar from './components/Snackbar'
import Shortcut from '@/components/Shortcut'
import { SUB_ADD, SUB_REMOVE, SITE_STATE, NODE_LIST } from './store/types'

Vue.use(Validator)
Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
    primary: 'blue',
    accent: 'red',
    warn: 'red'
})

export default {
    beforeMount () {
        // 站点信息
        this.$store.dispatch(SITE_STATE)

        // 全局订阅
        this.$store.dispatch(SUB_ADD, NODE_LIST)
    },

    destroyed () {
        // 取消全局订阅
        this.$store.dispatch(SUB_REMOVE, NODE_LIST)
    },

    components: { Toolbar, Snackbar, Shortcut }
}
</script>

<template>
<div id="app">
    <!-- 导航条 -->
    <Toolbar/>
    <!-- 内容 -->
    <router-view/>
    <!-- 全局提示 -->
    <Snackbar :msg="$store.state.msg" @clear="$store.dispatch('CLEAR')"/>
    <!-- 全局按钮 -->
    <Shortcut/>
</div>
</template>

<style>
html {
    height: auto;
    min-height: 100%;
}
#app {
    background: #f1f1f1;
}

@font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(assets/icons.woff2) format('woff2');
}
.material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
}
</style>
