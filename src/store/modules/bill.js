import { BILL_LIST } from '../types'

const state = {
    // 账单列表
    list: []
}

const getters = {
}

const actions = {
    [BILL_LIST] ({ commit }) {
        commit(BILL_LIST, {})
    }
}

const mutations = {
    [BILL_LIST] (state, body) {
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
