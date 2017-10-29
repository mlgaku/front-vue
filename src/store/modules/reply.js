import { Beat, Draw } from '@/utils'
import { REPLY_NEW, REPLY_LIST } from '../types'

const state = {
    // 回复成功
    new: 0,
    // 回复列表
    list: []
}

const getters = {
    replyList: (state, getters) => state.list.map(x => ({
        ...x,
        user: {
            ...x.user,
            avatar: x.user.avatar ? getters.avatarURL(x.user.name) : Draw(x.user.name)
        }
    }))
}

const actions = {
    [REPLY_NEW] ({ commit }, info) {
        commit(REPLY_NEW, info)
    }
}

const mutations = {
    [REPLY_NEW] (state, body) {
        if (body.status === true) {
            state.new = Beat(true)
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
