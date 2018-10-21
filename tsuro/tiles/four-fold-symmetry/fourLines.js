const straight = require('../../lines/straight')

const squareTile = (x, y, width) => ctx => {
  ctx.beginPath()
  ;['16', '25', '38', '47'].forEach(
    straight(x, y, width)(ctx)
  )
  ctx.stroke()
}

module.exports = squareTile
