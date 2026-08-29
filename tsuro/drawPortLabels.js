const getCoords = require('./lines/getCoords')

const ports = [1, 2, 3, 4, 5, 6, 7, 8]

// writes the port numbers just outside a tile's edges —
// above the top ports, below the bottom ports, and so on.
// the caller must leave a margin around the tile for them
const drawPortLabels = (constants, palette) => (x, y, width) => (ctx) => {
  const coords = getCoords(constants)(width)
  const offset = width * 0.08

  ctx.fillStyle = palette.line
  ctx.font = `bold ${Math.round(width * 0.08)}px sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  ports.forEach((port) => {
    const [portX, portY] = coords(port)
    const outX = portX === 0 ? -1 : portX === width ? 1 : 0
    const outY = portY === 0 ? -1 : portY === width ? 1 : 0

    ctx.fillText(port, x + portX + outX * offset, y + portY + outY * offset)
  })
}

module.exports = drawPortLabels
