import _ from 'lodash'
import { Sort } from '@/utils'
import { NODE_ADD, NODE_EDIT, NODE_LIST, NODE_CHECK, NODE_REMOVE } from '../types'

const state = {
    // 添加成功
    add: false,
    // 编辑成功
    edit: false,
    // 节点列表
    list: [],
    // 检查节点名
    check: null,
    // 删除节点
    remove: false
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

        return Sort(Object.values(tmp), 'sort')
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
    [NODE_ADD] ({ state, commit }, info) {
        state.add = false
        commit(NODE_ADD, info)
    },
    [NODE_EDIT] ({ state, commit }, info) {
        state.edit = false
        commit(NODE_EDIT, info)
    },
    [NODE_CHECK]: _.debounce(({ state, commit }, name) => {
        state.check = null
        commit(NODE_CHECK, { name })
    }, 500),
    [NODE_REMOVE] ({ state, commit }, id) {
        state.remove = false
        commit(NODE_REMOVE, { id })
    }
}

const mutations = {
    [NODE_ADD] (state, body) {
        if (body.status === true) {
            state.add = true
        }
    },
    [NODE_EDIT] (state, body) {
        if (body.status === true) {
            state.edit = true
        }
    },
    [NODE_LIST] (state, body) {
        if (body.status === true) {
            state.list = body.data
        }
    },
    [NODE_CHECK] (state, body) {
        if (body.status === true) {
            state.check = body.data
        }
    },
    [NODE_REMOVE] (state, body) {
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
