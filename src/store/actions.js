import { MSG, CLEAR } from './types'

export default {
    [MSG] ({ rootState }, product) {
        rootState.msg = product
    },
    [CLEAR] ({ rootState }) {
        rootState.msg = ''
    }
}
