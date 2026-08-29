const arc1 = require('../../lines/arc1')
const { classic } = require('../../constants')

const squareTile = (x, y, width) => (ctx) => {
  ctx.beginPath()
  ;['18', '23', '45', '67'].forEach(arc1(classic)(x, y, width)(ctx))
  ctx.stroke()
}

module.exports = squareTile
