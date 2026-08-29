const straight = require('../../lines/straight')
const { classic } = require('../../constants')

const squareTile = (x, y, width) => (ctx) => {
  ctx.beginPath()
  ;['16', '25', '38', '47'].forEach(straight(classic)(x, y, width)(ctx))
  ctx.stroke()
}

module.exports = squareTile
