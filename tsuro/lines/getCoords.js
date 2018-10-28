const alpha = require('./alpha')

// getCoords :: Number -> {[Number]}
const getCoords = width => index =>
  ({
    '1': [width * (1 - alpha), 0],
    '2': [width * alpha, 0],
    '3': [width, width * (1 - alpha)],
    '4': [width, width * alpha],
    '5': [width * alpha, width],
    '6': [width * (1 - alpha), width],
    '7': [0, width * alpha],
    '8': [0, width * (1 - alpha)],
  }[index])

module.exports = getCoords
