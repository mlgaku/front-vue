import { TOPIC_NEW, TOPIC_LIST } from '../types'

const state = {
    // 主题列表
    list: [],
    // 发表成功后的主题ID
    new: ''
}

const getters = {
}

const actions = {
    [TOPIC_NEW] ({ commit }, info) {
        commit(TOPIC_NEW, info)
    }
}

const mutations = {
    [TOPIC_NEW] (state, body) {
        if (body.status === true) {
            state.new = body.data
        }
    },
    [TOPIC_LIST] (state, body) {
        if (body.status === true) {
            state.list = body.data
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
