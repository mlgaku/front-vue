import { Beat } from '@/utils'
import { TOPIC_NEW, TOPIC_EDIT, TOPIC_LIST, TOPIC_INFO, TOPIC_SUBTLE } from '../types'

const state = {
    // 主题列表
    list: [],
    // 主题信息
    info: {},
    // 编辑成功
    edit: 0,
    // 附加成功
    subtle: 0,
    // 发表成功后的主题ID
    new: ''
}

const getters = {
    topicList: state => state.list
}

const actions = {
    [TOPIC_NEW] ({ commit }, info) {
        commit(TOPIC_NEW, info)
    },
    [TOPIC_EDIT] ({ commit }, info) {
        commit(TOPIC_EDIT, info)
    },
    [TOPIC_INFO] ({ commit }, id) {
        commit(TOPIC_INFO, { id })
    },
    [TOPIC_SUBTLE] ({ commit }, info) {
        commit(TOPIC_SUBTLE, info)
    }
}

const mutations = {
    [TOPIC_NEW] (state, body) {
        if (body.status === true) {
            state.new = body.data
        }
    },
    [TOPIC_EDIT] (state, body) {
        if (body.status === true) {
            state.edit = Beat(true)
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
    },
    [TOPIC_SUBTLE] (state, body) {
        if (body.status === true) {
            state.subtle = Beat(true)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
