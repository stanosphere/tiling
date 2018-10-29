const straight = require('./straight')
const arc1 = require('./arc1')
const arc2 = require('./arc2')
const arc3 = require('./arc3')
const cubicBézier = require('./cubicBézier')
const quadraticBézier = require('./quadraticBézier')

const {
  pairsToTypes,
  ARC_1,
  ARC_2,
  ARC_3,
  STRAIGHT,
  CUBIC_BEZ,
  QUAD_BEZ,
} = require('./pointsToLineType')

drawLine = (x, y, width) => ctx => pair => {
  const lineType = pairsToTypes(pair)
  let drawer

  if (lineType === ARC_1) drawer = arc1
  else if (lineType === ARC_2) drawer = arc2
  else if (lineType === ARC_3) drawer = arc3
  else if (lineType === STRAIGHT) drawer = straight
  else if (lineType === QUAD_BEZ) drawer = quadraticBézier
  else if (lineType === CUBIC_BEZ) drawer = cubicBézier

  drawer(x, y, width)(ctx)(pair)
}

module.exports = drawLine
