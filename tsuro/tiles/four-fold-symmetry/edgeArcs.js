const arc3 = require('../../lines/arc3')

const squareTile = (x, y, width) => ctx => {
  ctx.beginPath()
  ;['12', '34', '56', '78'].forEach(arc3(x, y, width)(ctx))
  ctx.stroke()
}

module.exports = squareTile
