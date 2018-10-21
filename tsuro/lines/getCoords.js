// points :: Number -> {[Number]}
const getCoords = width => index =>
  ({
    '1': [width / 3, 0],
    '2': [(2 * width) / 3, 0],
    '3': [width, width / 3],
    '4': [width, (2 * width) / 3],
    '5': [(2 * width) / 3, width],
    '6': [width / 3, width],
    '7': [0, (2 * width) / 3],
    '8': [0, width / 3],
  }[index])

module.exports = getCoords
