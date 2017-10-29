import { SITE_STATE } from '../types'

const state = {
    // 站点信息
    state: {
        // 头像链接
        avatar_url: ''
    }
}

const getters = {
    avatarURL: state => name => {
        return state.state.avatar_url.replace('{name}', name)
    }
}

const actions = {
    [SITE_STATE] ({ commit }) {
        commit(SITE_STATE, {})
    }
}

const mutations = {
    [SITE_STATE] (state, body) {
        if (body.status === true) {
            state.state = body.data
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
