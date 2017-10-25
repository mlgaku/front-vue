import { Socket, Convert, Protocol } from '@/utils'

const channel = socket => {
    return store => {
        socket.on('message', e => {
            const { type, data } = Protocol(e.data)

            // 操作失败显示提示
            if (data.status === false) {
                store.state.msg = data.msg
                return
            }

            store.commit(type, {
                ...data,
                __INTAL__: true
            })
        })

        store.subscribe(m => {
            if (m.payload === undefined || m.payload.__INTAL__ === true) {
                return
            }

            const { mod, act } = Convert(m.type)
            if (act !== '') {
                socket.emit('send', Protocol({ mod, act }, m.payload))
            }
        })
    }
}

export default channel(Socket('ws://127.0.0.1:8080'))
