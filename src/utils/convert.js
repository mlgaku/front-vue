import _ from 'lodash'

const convert = str => {
    let [mod, ...act] = str.toLowerCase().split('_')
    if (act.length < 1) {
        act = ''
    } else {
        act = act.shift() + act.map(x => _.capitalize(x))
    }

    return { mod, act }
}

export default convert
