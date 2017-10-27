import { TOPIC_LIST } from '../types'

const state = {
    // 主题列表
    list: []
}

const getters = {
}

const actions = {
}

const mutations = {
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
