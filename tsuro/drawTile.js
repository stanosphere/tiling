const drawLine = require('./lines/index')
const setLineStyle = require('../primitives/lineStyle')
const lineWidth = 5

const drawTile =
  (constants, palette) => (portList) => (x, y, width) => (ctx) => {
    ctx.fillStyle = palette.background
    ctx.fillRect(x, y, width, width)
    portList.forEach((pair) => {
      ctx.beginPath()
      setLineStyle(ctx)(palette.halo, lineWidth * 2)
      drawLine(constants)(x, y, width)(ctx)(pair)
      ctx.stroke()
      ctx.beginPath()
      setLineStyle(ctx)(palette.line, lineWidth)
      drawLine(constants)(x, y, width)(ctx)(pair)
      ctx.stroke()
    })
  }

module.exports = drawTile
