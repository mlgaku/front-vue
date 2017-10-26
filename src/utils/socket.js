const socket = addr => {
    const ws = new WebSocket(addr)

    return {
        on: (ev, fn) => {
            ws[`on${ev}`] = fn
        },
        emit: (ev, ...arg) => ws[ev](...arg),
        state: () => ws.readyState
    }
}

export default socket
