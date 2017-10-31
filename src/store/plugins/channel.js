import { MSG } from '@/store/types'
import { Socket, Convert, Constant, Protocol } from '@/utils'

const channel = function (socket) {
    // 待发消息队列
    const queue = new Set()

    return store => {
        // 成功建立
        socket.on('open', () => {
            for (let x of queue) {
                queue.delete(x)
                socket.emit('send', JSON.parse(x))
            }
        })

        // 收到消息
        socket.on('message', e => {
            const { type, data } = Protocol(e.data)

            // 操作失败显示提示
            if (data.status === false) {
                store.dispatch(MSG, data.msg)
                return
            }

            store.commit(type, {
                ...data,
                __INTAL__: true
            })
        })

        // 发出消息
        store.subscribe(m => {
            if (m.payload === undefined || m.payload.__INTAL__ === true) {
                return
            }

            const { mod, act } = Convert(m.type)
            if (act === '') {
                return
            }

            const data = Protocol({ mod, act }, m.payload)
            if (socket.state() === 1) {
                socket.emit('send', data)
            } else {
                queue.add(JSON.stringify(data))
            }
        })
    }
}

export default channel(Socket(Constant.DEVMOD ? 'ws://127.0.0.1:8080' : 'wss://api.maile.co/stream'))
