import { TOPIC_NEW, TOPIC_LIST, TOPIC_INFO } from '../types'

const state = {
    // 主题列表
    list: [],
    // 主题信息
    info: {},
    // 发表成功后的主题ID
    new: ''
}

const getters = {
}

const actions = {
    [TOPIC_NEW] ({ commit }, info) {
        commit(TOPIC_NEW, info)
    },
    [TOPIC_INFO] ({ commit }, id) {
        commit(TOPIC_INFO, { id })
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
    },
    [TOPIC_INFO] (state, body) {
        if (body.status === true) {
            state.info = body.data
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
