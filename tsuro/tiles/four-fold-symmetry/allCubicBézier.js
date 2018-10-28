const cubicBézier = require('../../lines/cubicBézier')

const squareTile = (x, y, width) => ctx => {
  ctx.beginPath()
  ;['15', '26', '37', '48'].forEach(
    cubicBézier(x, y, width)(ctx)
  )
  ctx.stroke()
}

module.exports = squareTile
