const arc2 = require('../../lines/arc2')

const squareTile = (x, y, width) => ctx => {
  ctx.beginPath()
  ;['14', '27', '36', '58'].forEach(arc2(x, y, width)(ctx))
  ctx.stroke()
}

module.exports = squareTile
