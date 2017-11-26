import _ from 'lodash'
import {
    USER_REG, USER_LOGIN, USER_HOME, USER_INFO,
    USER_CHECK, USER_CHECK_EMAIL,
    USER_AVATAR, USER_SET_AVATAR, USER_REMOVE_AVATAR,
    USER_EDIT_PROFILE, USER_CHANGE_PASSWORD
} from '../types'

const state = {
    // 注册成功
    reg: false,
    // 登录成功
    login: false,
    // 用户主页
    home: {},
    // 编辑成功
    edit: false,
    // 更改密码成功
    change: false,
    // 用户信息
    info: {},

    // 信息检查
    check: {
        name: null,
        email: null
    },

    // 上传头像
    avatar: {
        // 文件名
        file: '',
        // 上传token
        token: '',
        // 设置成功
        set: false,
        // 移除成功
        remove: false
    }
}

const getters = {
}

const actions = {
    [USER_REG] ({ state, commit }, info) {
        state.reg = false
        commit(USER_REG, info)
    },
    [USER_LOGIN] ({ state, commit }, info) {
        state.login = false
        commit(USER_LOGIN, info)
    },
    [USER_HOME] ({ state, commit }, name) {
        state.home = {}
        commit(USER_HOME, { name })
    },
    [USER_INFO] ({ state, commit }) {
        state.info = {}
        commit(USER_INFO, {})
    },

    [USER_CHECK]: _.debounce(({ state, commit }, name) => {
        state.check.name = null
        commit(USER_CHECK, { name })
    }, 500),
    [USER_CHECK_EMAIL]: _.debounce(({ state, commit }, email) => {
        state.check.email = null
        commit(USER_CHECK_EMAIL, { email })
    }, 500),

    [USER_AVATAR] ({ state, commit }) {
        state.avatar.file = ''
        state.avatar.token = ''
        commit(USER_AVATAR, {})
    },
    [USER_SET_AVATAR] ({ state, commit }) {
        state.avatar.set = false
        commit(USER_SET_AVATAR, {})
    },
    [USER_REMOVE_AVATAR] ({ state, commit }) {
        state.avatar.remove = false
        commit(USER_REMOVE_AVATAR, {})
    },

    [USER_EDIT_PROFILE] ({ state, commit }, info) {
        state.edit = false
        commit(USER_EDIT_PROFILE, info)
    },
    [USER_CHANGE_PASSWORD] ({ state, commit }, info) {
        state.change = false
        commit(USER_CHANGE_PASSWORD, info)
    }
}

const mutations = {
    [USER_REG] (state, body) {
        if (body.status === true) {
            state.reg = true
        }
    },
    [USER_LOGIN] (state, body) {
        if (body.status === true) {
            state.login = true
        }
    },
    [USER_HOME] (state, body) {
        if (body.status === true) {
            state.home = body.data
        }
    },
    [USER_INFO] (state, body) {
        if (body.status === true) {
            state.info = body.data
        }
    },

    [USER_CHECK] (state, body) {
        if (body.status === true) {
            state.check.name = body.data
        }
    },
    [USER_CHECK_EMAIL] (state, body) {
        if (body.status === true) {
            state.check.email = body.data
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
            state.avatar.set = true
        }
    },
    [USER_REMOVE_AVATAR] (state, body) {
        if (body.status === true) {
            state.avatar.remove = true
        }
    },

    [USER_EDIT_PROFILE] (state, body) {
        if (body.status === true) {
            state.edit = true
        }
    },
    [USER_CHANGE_PASSWORD] (state, body) {
        if (body.status === true) {
            state.change = true
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
