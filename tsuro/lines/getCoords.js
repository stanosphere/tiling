const golden = require('./golden')

// getCoords :: Number -> {[Number]}
const getCoords = width => index =>
  ({
    '1': [width * (1 - 1 / golden), 0],
    '2': [width / golden, 0],
    '3': [width, width * (1 - 1 / golden)],
    '4': [width, width / golden],
    '5': [width / golden, width],
    '6': [width * (1 - 1 / golden), width],
    '7': [0, width / golden],
    '8': [0, width * (1 - 1 / golden)],
  }[index])

module.exports = getCoords
