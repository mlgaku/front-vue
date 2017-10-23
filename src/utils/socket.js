let ws = null

const socket = addr => {
    ws = new WebSocket(addr)

    return {
        on: (ev, fn) => {
            ws[`on${ev}`] = fn
        },
        emit: (ev, ...arg) => {
            return ws[ev](...arg)
        }
    }
}

export default socket
