const convert = str => {
    let [mod, ...act] = str.toLowerCase().split('_')
    if (act.length < 1) {
        act = ''
    } else {
        act = act.shift() + act.map(x => x.charAt(0).toUpperCase() + x.slice(1))
    }

    return { mod, act }
}

export default convert
