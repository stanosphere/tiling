const getCoords = require('./getCoords')

const straight =  (x, y, width) => ctx => pair =>{
  const [[x0, y0], [x1, y1]] = pair
    .split('')
    .map(getCoords(width))
  ctx.moveTo(x + x0, y + y0)
  ctx.lineTo(x + x1, y + y1)
}

module.exports = straight
