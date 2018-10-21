const arc1 = require('../../lines/arc1')

const squareTile = (x, y, width) => ctx => {
  ctx.beginPath()
  ;['18', '23', '45', '67'].forEach(arc1(x, y, width)(ctx))
  ctx.stroke()
}

module.exports = squareTile
