import { SITE_STATE } from '../types'
import { Draw, Timeago } from '@/utils'

const state = {
    // 站点信息
    state: {
        // 头像链接
        avatar_url: ''
    }
}

const getters = {
    date: state => date => Timeago(date),

    avatarURL: state => user =>
        user.avatar ? state.state.avatar_url.replace('{name}', user.name) : Draw(user.name)
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
