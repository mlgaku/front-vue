import { NODE_ADD } from '../types'

const state = {
}

const getters = {
}

const actions = {
    [NODE_ADD] ({ commit }) {
        commit(NODE_ADD, {id: 10})
    }
}

const mutations = {
    [NODE_ADD] (state, data) {
        console.log(state, data)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
