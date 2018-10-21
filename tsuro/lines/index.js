const straight = require('./straight')
const {
  pairsToTypes,
  ARC_1,
  ARC_2,
  ARC_3,
  STRAIGHT,
  CUBIC_BEZ,
  QUAD_BEZ,
} = require('./pointsToLineType')

getLineDrawer = pair => {
  const lineType = pairsToTypes(pair)
  let drawer

  if (lineType === ARC_1) drawer = arc1
  else if (lineType === ARC_2) drawer = arc2
  else if (lineType === ARC_3) drawer = arc3
  else if (lineType === STRAIGHT) drawer = straight
  else if (lineType === QUAD_BEZ) drawer = quadBez
  else if (lineType === CUBIC_BEZ) drawer = cubeBez

  return drawer(pair)
}

module.exports = getLineDrawer
