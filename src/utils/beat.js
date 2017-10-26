import _ from 'lodash'

const beat = val => {
    if (_.isBoolean(val)) {
        return _.random(val ? Number.MAX_VALUE : -Number.MAX_VALUE)
    } else {
        return val > 0
    }
}

export default beat
