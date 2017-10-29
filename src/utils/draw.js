import _ from 'lodash'

const colors = [
    '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4',
    '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107',
    '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B'
]

const rand = s =>
    s.split('').reduce((a, b) => a + b.charCodeAt(), 0) % colors.length

export default (name, { width = 40, height = 40, fontSize = 20 } = {}) => {
    if (name === undefined) {
        return
    }

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = width
    canvas.height = height

    ctx.fillStyle = colors[rand(name)]
    ctx.fillRect(0, 0, width, height)
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    ctx.fillStyle = 'white'
    ctx.font = fontSize + 'px Roboto,Helvetica,Arial,sans-serif'

    ctx.fillText(_.upperFirst(name.slice(0, 2)), width / 2, height / 2)
    return canvas.toDataURL()
}
