import { USER_REG, USER_LOGIN } from '../types'

const state = {
}

const getters = {
}

const actions = {
    [USER_REG] ({ commit }, info) {
        commit(USER_REG, info)
    },
    [USER_LOGIN] ({ commit }, info) {
        commit(USER_LOGIN, info)
    }
}

const mutations = {
    [USER_REG] (state, data) {
        console.log(state)
    },
    [USER_LOGIN] (state, data) {
        console.log(state)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
