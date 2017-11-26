import { TOPIC_NEW, TOPIC_EDIT, TOPIC_LIST, TOPIC_INFO, TOPIC_SUBTLE } from '../types'

const state = {
    // 主题列表
    list: [],
    // 主题信息
    info: {},
    // 编辑成功
    edit: false,
    // 附加成功
    subtle: false,
    // 发表成功后的主题ID
    new: ''
}

const getters = {
    topicList: state => state.list
}

const actions = {
    [TOPIC_NEW] ({ state, commit }, info) {
        state.new = ''
        commit(TOPIC_NEW, info)
    },
    [TOPIC_EDIT] ({ state, commit }, info) {
        state.edit = false
        commit(TOPIC_EDIT, info)
    },
    [TOPIC_INFO] ({ state, commit }, id) {
        state.info = {}
        commit(TOPIC_INFO, { id })
    },
    [TOPIC_SUBTLE] ({ state, commit }, info) {
        state.subtle = false
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
            state.edit = true
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
            state.subtle = true
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
