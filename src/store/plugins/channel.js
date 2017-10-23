import { Socket } from '@/utils'

const channel = socket => {
    return store => {
        socket.on('message', e => {
            store.commit('receiveData', e.data)
        })
        store.subscribe(mutation => {
            if (mutation.type === 'UPDATE_DATA') {
                socket.emit('send', mutation.payload)
            }
        })
    }
}

export default channel(Socket('ws://127.0.0.1:8080'))
