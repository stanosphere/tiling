const Canvas = require('canvas')
const concentric = require('./primitives/concentric')
const fillBackground = require('./primitives/fillBackgound')
const setLineStyle = require("./primitives/lineStyle")

const canvas = new Canvas(400, 400)
const ctx = canvas.getContext('2d')

fillBackground(canvas, ctx)('white')
setLineStyle(ctx)("black", 10)

ctx.beginPath()
concentric(ctx)({ r: 20, n: 5, x: 200, y: 200, seperation: 20 })
ctx.stroke()

module.exports = { basic: canvas }
