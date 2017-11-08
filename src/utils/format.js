const MINUTE = 1000 * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const MONTH = DAY * 30

export default time => {
    let now = new Date().getTime()
    let diff = now - time
    if (diff < 0) {
        return
    }

    let month = parseInt(diff / MONTH)
    if (month > 12) {
        return new Date(time).toLocaleString()
    }

    let day = parseInt((diff - month * MONTH) / DAY)
    let hour = parseInt((diff - month * MONTH - day * DAY) / HOUR)
    let min = parseInt((diff - month * MONTH - day * DAY - hour * HOUR) / MINUTE)

    let str = ''
    switch (true) {
    case month > 0:
        str += ' ' + month + ' 个月'
    case day > 0:
        str += ' ' + day + ' 天'
    case hour > 0:
        str += ' ' + hour + ' 小时'
    case min > 0:
        str += ' ' + min + ' 分钟'
    }

    return str === '' ? '刚刚' : `${str}前`
}
