import { Convert, Protocol } from '@/utils'
import { MSG, CLEAR, SUB_ADD, SUB_REMOVE } from './types'

export default {
    // 提示
    [MSG] ({ rootState }, product) {
        rootState.msg = product
    },
    [CLEAR] ({ rootState }) {
        rootState.msg = ''
    },

    // 订阅
    [SUB_ADD] ({ commit }, product) {
        commit(
            SUB_ADD,
            Protocol(Convert(product.type || product), product.body || null)
        )
    },
    [SUB_REMOVE] ({ commit }, product) {
        commit(
            SUB_REMOVE,
            Protocol(Convert(product.type || product), product.body || null)
        )
    }
}
