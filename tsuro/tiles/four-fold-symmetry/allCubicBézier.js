const drawLine = require('../../lines/index')

const squareTile = (x, y, width) => ctx => {
  ;['17', '28', '35', '46'].forEach(
    drawLine(x, y, width)(ctx)
  )
}

module.exports = squareTile

// ['13', '24', '57', '68']
// ['17', '28', '35', '46']
