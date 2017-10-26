import _ from 'lodash'
import { USER_REG, USER_LOGIN, USER_CHECK, USER_CHECK_EMAIL } from '../types'

const state = {
    // 注册
    reg: false,
    // 登录
    login: {},
    // 检查
    check: {
        name: true,
        email: true
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
            state.reg = true
        }
    },
    [USER_LOGIN] (state, body) {
        if (body.status === true) {
            state.login = body.data
        }
    },
    [USER_CHECK] (state, body) {
        state.check.name = body.data
    },
    [USER_CHECK_EMAIL] (state, body) {
        state.check.email = body.data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
