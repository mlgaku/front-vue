import _ from 'lodash'
import { Beat, Draw } from '@/utils'
import {
    USER_REG, USER_LOGIN, USER_INFO,
    USER_CHECK, USER_CHECK_EMAIL,
    USER_AVATAR, USER_SET_AVATAR, USER_REMOVE_AVATAR
} from '../types'

const state = {
    // 注册成功
    reg: 0,
    // 登录成功
    login: 0,
    // 用户信息
    info: {},

    // 信息检查
    check: {
        name: 0,
        email: 0
    },

    // 上传头像
    avatar: {
        // 文件名
        file: '',
        // 上传token
        token: '',
        // 设置成功
        set: 0,
        // 移除成功
        remove: 0
    }
}

const getters = {
    userInfo: (state, getters) => ({
        ...state.info,
        ...{ avatar: state.info.avatar ? getters.avatarURL(state.info.name) : Draw(state.info.name) }
    })
}

const actions = {
    [USER_REG] ({ commit }, info) {
        commit(USER_REG, info)
    },
    [USER_LOGIN] ({ commit }, info) {
        commit(USER_LOGIN, info)
    },
    [USER_INFO] ({ commit }) {
        commit(USER_INFO, {})
    },

    [USER_CHECK]: _.debounce(({ commit }, name) => {
        commit(USER_CHECK, { name })
    }, 500),
    [USER_CHECK_EMAIL]: _.debounce(({ commit }, email) => {
        commit(USER_CHECK_EMAIL, { email })
    }, 500),

    [USER_AVATAR] ({ commit }) {
        commit(USER_AVATAR, {})
    },
    [USER_SET_AVATAR] ({ commit }) {
        commit(USER_SET_AVATAR, {})
    },
    [USER_REMOVE_AVATAR] ({ commit }) {
        commit(USER_REMOVE_AVATAR, {})
    }
}

const mutations = {
    [USER_REG] (state, body) {
        if (body.status === true) {
            state.reg = Beat(true)
        }
    },
    [USER_LOGIN] (state, body) {
        if (body.status === true) {
            state.login = Beat(true)
        }
    },
    [USER_INFO] (state, body) {
        if (body.status === true) {
            state.info = body.data
        }
    },

    [USER_CHECK] (state, body) {
        if (body.status === true) {
            state.check.name = Beat(body.data)
        }
    },
    [USER_CHECK_EMAIL] (state, body) {
        if (body.status === true) {
            state.check.email = Beat(body.data)
        }
    },

    [USER_AVATAR] (state, body) {
        if (body.status === true) {
            state.avatar.file = body.data.file
            state.avatar.token = body.data.token
        }
    },
    [USER_SET_AVATAR] (state, body) {
        if (body.status === true) {
            state.avatar.set = Beat(true)
        }
    },
    [USER_REMOVE_AVATAR] (state, body) {
        if (body.status === true) {
            state.avatar.remove = Beat(true)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
