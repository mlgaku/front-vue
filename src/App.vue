<script>
import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'

Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
    primary: 'blue',
    accent: 'red',
    warn: 'red'
})

Validator.localize('zh', zh)
Vue.use(VeeValidate)

export default {}
</script>

<template>
<div id="app">
    <router-view/>
</div>
</template>

<style>
html, body {
    height: 100%;
}
#app {
    height: 100%;
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