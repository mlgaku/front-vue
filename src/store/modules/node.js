import _ from 'lodash'
import { Beat } from '@/utils'
import { NODE_ADD, NODE_EDIT, NODE_LIST, NODE_CHECK, NODE_REMOVE } from '../types'

const state = {
    // 添加成功
    add: 0,
    // 编辑成功
    edit: 0,
    // 节点列表
    list: [],
    // 检查节点名
    check: 0,
    // 删除节点
    remove: 0
}

const getters = {
    nodeList: state => {
        const list = _.cloneDeep(state.list)

        let tmp = {}
        for (let x of list) {
            if (!x.parent) {
                tmp[x.id] = x
                continue
            }

            if (tmp[x.parent].child === undefined) {
                tmp[x.parent].child = []
            }
            tmp[x.parent].child.push(x)
        }

        return Object.values(tmp)
    },

    nodeInfo: state => arr => {
        return _.find(state.list, arr) || {}
    },

    nodeTitle: state => id => {
        const node = _.find(state.list, { id })
        return node === undefined ? '加载中' : node.title
    }
}

const actions = {
    [NODE_ADD] ({ commit }, info) {
        commit(NODE_ADD, info)
    },
    [NODE_EDIT] ({ commit }, info) {
        commit(NODE_EDIT, info)
    },
    [NODE_CHECK]: _.debounce(({ commit }, name) => {
        commit(NODE_CHECK, { name })
    }, 500),
    [NODE_REMOVE] ({ commit }, id) {
        commit(NODE_REMOVE, { id })
    }
}

const mutations = {
    [NODE_ADD] (state, body) {
        if (body.status === true) {
            state.add = Beat(true)
        }
    },
    [NODE_EDIT] (state, body) {
        if (body.status === true) {
            state.edit = Beat(true)
        }
    },
    [NODE_LIST] (state, body) {
        if (body.status === true) {
            state.list = body.data
        }
    },
    [NODE_CHECK] (state, body) {
        if (body.status === true) {
            state.check = Beat(body.data)
        }
    },
    [NODE_REMOVE] (state, body) {
        if (body.status === true) {
            state.remove = Beat(true)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
