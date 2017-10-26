import _ from 'lodash'
import { Beat } from '@/utils'
import { NODE_ADD, NODE_LIST, NODE_CHECK } from '../types'

const state = {
    // 添加成功
    add: 0,
    // 节点列表
    list: [],
    // 检查节点名
    check: 0
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
    }
}

const actions = {
    [NODE_ADD] ({ commit }, info) {
        commit(NODE_ADD, info)
    },
    [NODE_CHECK]: _.debounce(({ commit }, name) => {
        commit(NODE_CHECK, { name })
    }, 500)
}

const mutations = {
    [NODE_ADD] (state, body) {
        if (body.status === true) {
            state.add = Beat(true)
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
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
