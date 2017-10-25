<script>
import InputBox from './InputBox'
import { mapState } from 'vuex'
import { Validator } from 'vee-validate'
import { USER_REG, USER_LOGIN, USER_CHECK, USER_CHECK_EMAIL } from '@/store/types'

import logo from '@/assets/logo.png'

export default {
    data: () => ({
        logo,
        // 显示模态框
        show: 0,
        // 注册信息
        regInfo: {},
        // 登录信息
        loginInfo: {}
    }),

    watch: {
        'check.name': {
            deep: true,
            handler: function (val) {
                val === undefined || this.checkName(val)
            }
        },
        'check.email': {
            deep: true,
            handler: function (val) {
                val === undefined || this.checkEmail(val)
            }
        }
    },

    created () {
        // 检查用户名
        Validator.extend('check_name', {
            validate: value => {
                this.$store.dispatch(USER_CHECK, value)
                return new Promise(resolve => {
                    this.checkName = valid => resolve({
                        valid, data: { message: '用户名已存在' }
                    })
                })
            },
            getMessage: (field, params, data) => (data && data.message) || undefined
        })
        // 检查邮箱地址
        Validator.extend('check_email', {
            validate: value => {
                this.$store.dispatch(USER_CHECK_EMAIL, value)
                return new Promise(resolve => {
                    this.checkEmail = valid => resolve({
                        valid, data: { message: '邮箱地址已存在' }
                    })
                })
            },
            getMessage: (field, params, data) => (data && data.message) || undefined
        })
    },

    methods: {
        reg () {
            this.validate(() => this.$store.dispatch(USER_REG, this.regInfo))
        },
        login () {
            this.validate(() => this.$store.dispatch(USER_LOGIN, this.loginInfo))
        },
        validate (fn) {
            this.$validator.validateAll().then(() => this.errors.any() || fn())
        }
    },

    computed: mapState({
        check: s => s.user.check
    }),

    components: { InputBox }
}
</script>

<template>
<div>
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

                    <md-button class="md-dense" @click="show = 1">注册</md-button>
                    <md-button class="md-dense" @click="show = 2">登录</md-button>
                </md-layout>
            </md-layout>
        </md-toolbar>
    </md-whiteframe>

    <!-- 注册模态框 -->
    <InputBox :show="show === 1" title="注册" @close="show = 0" @submit="reg()">
        <form novalidate @submit.stop.prevent>
            <md-input-container :class="{'md-input-invalid': errors.has('name')}">
                <label>用户名</label>
                <md-input
                    required
                    name="name"
                    v-model="regInfo.name"
                    v-validate="'required|min:4|max:15|check_name'"/>
                <span class="md-error" v-show="errors.has('name')">{{ errors.first('name') }}</span>
            </md-input-container>

            <md-input-container :class="{'md-input-invalid': errors.has('password')}" md-has-password>
                <label>密码</label>
                <md-input
                    required
                    name="password"
                    type="password"
                    v-model="regInfo.password"
                    v-validate="'required|min:8|max:20'"/>
                <span class="md-error" v-show="errors.has('password')">{{ errors.first('password') }}</span>
            </md-input-container>

            <md-input-container :class="{'md-input-invalid': errors.has('email')}">
                <label>邮箱地址</label>
                <md-input
                    required
                    name="email"
                    type="email"
                    v-model="regInfo.email"
                    v-validate="'required|email|min:8|max:30|check_email'"/>
                <span class="md-error" v-show="errors.has('email')">{{ errors.first('email') }}</span>
            </md-input-container>
        </form>
    </InputBox>

    <!-- 登录模态框 -->
    <InputBox :show="show === 2" title="登录" @close="show = 0" @submit="login()">
        <form novalidate @submit.stop.prevent>
            <md-input-container :class="{'md-input-invalid': errors.has('name')}">
                <label>用户名</label>
                <md-input
                    required
                    name="name"
                    v-model="loginInfo.name"
                    v-validate="'required|min:4|max:15'"/>
                <span class="md-error" v-show="errors.has('name')">{{ errors.first('name') }}</span>
            </md-input-container>

            <md-input-container :class="{'md-input-invalid': errors.has('password')}">
                <label>密码</label>
                <md-input
                    required
                    name="password"
                    type="password"
                    v-model="loginInfo.password"
                    v-validate="'required|min:8|max:20'"/>
                <span class="md-error" v-show="errors.has('password')">{{ errors.first('password') }}</span>
            </md-input-container>
        </form>
    </InputBox>
</div>
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
