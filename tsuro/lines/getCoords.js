const alpha = require('./alpha')

// ports are numbered anticlockwise from the left point on
// the bottom edge, matching Wikipedia's Tsuro tile table
// getCoords :: Number -> {[Number]}
const getCoords = (width) => (index) =>
  ({
    1: [width * (1 - alpha), width],
    2: [width * alpha, width],
    3: [width, width * alpha],
    4: [width, width * (1 - alpha)],
    5: [width * alpha, 0],
    6: [width * (1 - alpha), 0],
    7: [0, width * (1 - alpha)],
    8: [0, width * alpha],
  })[index]

module.exports = getCoords
