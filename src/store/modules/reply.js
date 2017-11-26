import { REPLY_NEW, REPLY_EDIT, REPLY_LIST } from '../types'

const state = {
    // 回复成功
    new: false,
    // 编辑成功
    edit: false,
    // 回复列表
    list: []
}

const getters = {
    replyList: state => state.list
}

const actions = {
    [REPLY_NEW] ({ state, commit }, info) {
        state.new = false
        commit(REPLY_NEW, info)
    },
    [REPLY_EDIT] ({ state, commit }, info) {
        state.edit = false
        commit(REPLY_EDIT, info)
    }
}

const mutations = {
    [REPLY_NEW] (state, body) {
        if (body.status === true) {
            state.new = true
        }
    },
    [REPLY_EDIT] (state, body) {
        if (body.status === true) {
            state.edit = true
        }
    },
    [REPLY_LIST] (state, body) {
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
