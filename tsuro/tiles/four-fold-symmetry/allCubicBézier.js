const cubicBézier = require('../../lines/quadraticBézier')

const squareTile = (x, y, width) => ctx => {
  ctx.beginPath()
  ;['17', '28', '35', '46'].forEach(
    cubicBézier(x, y, width)(ctx)
  )
  ctx.stroke()
}

module.exports = squareTile

// ['13', '24', '57', '68']
// ['17', '28', '35', '46']