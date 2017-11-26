import { NOTICE_LIST, NOTICE_REMOVE } from '../types'

const state = {
    // 通知列表
    list: [],
    // 移除成功
    remove: false
}

const getters = {
}

const actions = {
    [NOTICE_REMOVE] ({ state, commit }, id) {
        state.remove = false
        commit(NOTICE_REMOVE, { id })
    }
}

const mutations = {
    [NOTICE_LIST] (state, body) {
        if (body.status === true) {
            state.list = body.data
        }
    },
    [NOTICE_REMOVE] (state, body) {
        if (body.status === true) {
            state.remove = true
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
