const drawLine = require('./lines/index')
const setLineStyle = require('../primitives/lineStyle')
const lineWidth = 5

const drawTile = (constants) => (portList) => (x, y, width) => (ctx) =>
  portList.forEach((pair) => {
    ctx.beginPath()
    setLineStyle(ctx)('white', lineWidth * 2)
    drawLine(constants)(x, y, width)(ctx)(pair)
    ctx.stroke()
    ctx.beginPath()
    setLineStyle(ctx)('black', lineWidth)
    drawLine(constants)(x, y, width)(ctx)(pair)
    ctx.stroke()
  })

module.exports = drawTile
