import { USER_REG, USER_LOGIN, USER_CHECK, USER_CHECK_EMAIL } from '../types'

const state = {
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
    [USER_CHECK] ({ commit }, name) {
        commit(USER_CHECK, { name })
    },
    [USER_CHECK_EMAIL] ({ commit }, email) {
        commit(USER_CHECK_EMAIL, { email })
    }
}

const mutations = {
    [USER_REG] (state, body) {
        // console.log(state)
    },
    [USER_LOGIN] (state, body) {
        // console.log(state)
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
