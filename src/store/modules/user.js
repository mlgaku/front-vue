import _ from 'lodash'
import { Beat } from '@/utils'
import { USER_REG, USER_LOGIN, USER_CHECK, USER_CHECK_EMAIL } from '../types'

const state = {
    // 注册成功
    reg: 0,
    // 登录信息
    login: {},
    // 信息检查
    check: {
        name: 0,
        email: 0
    }
}

const getters = {
}

const actions = {
    [USER_REG] ({ commit }, info) {
        commit(USER_REG, info)
    },
    [USER_LOGIN] ({ commit }, info) {
        commit(USER_LOGIN, info)
    },
    [USER_CHECK]: _.debounce(({ commit }, name) => {
        commit(USER_CHECK, { name })
    }, 500),
    [USER_CHECK_EMAIL]: _.debounce(({ commit }, email) => {
        commit(USER_CHECK_EMAIL, { email })
    }, 500)
}

const mutations = {
    [USER_REG] (state, body) {
        if (body.status === true) {
            state.reg = Beat(true)
        }
    },
    [USER_LOGIN] (state, body) {
        if (body.status === true) {
            state.login = body.data
        }
    },
    [USER_CHECK] (state, body) {
        if (body.status === true) {
            state.check.name = Beat(body.data)
        }
    },
    [USER_CHECK_EMAIL] (state, body) {
        if (body.status === true) {
            state.check.email = Beat(body.data)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
