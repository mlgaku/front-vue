const protocol = (info, data = null) => {
    if (info instanceof Object) { // 打包
        const { mod, act } = info
        return JSON.stringify({
            mod, act, body: JSON.stringify(data)
        })
    } else {                     // 解包
        const { mod, act, body } = JSON.parse(info)
        return {
            type: `${mod}_${act}`.toUpperCase(),
            data: JSON.parse(body)
        }
    }
}

export default protocol
