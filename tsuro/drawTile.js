const drawLine = require('./lines/index')
const setLineStyle = require('../primitives/lineStyle')
const lineWidth = 10

const drawTile = portList => (x, y, width) => ctx =>
  portList.forEach(pair => {
    ctx.beginPath()
    setLineStyle(ctx)('white', lineWidth + 10)
    drawLine(x, y, width)(ctx)(pair)
    ctx.stroke()
    ctx.beginPath()
    setLineStyle(ctx)('black', lineWidth)
    drawLine(x, y, width)(ctx)(pair)
    ctx.stroke()
  })

module.exports = drawTile
