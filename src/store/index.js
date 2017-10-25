import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'
import plugins from './plugins'

import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 提示信息
        msg: ''
    },

    actions,
    getters,
    modules,
    plugins
})
