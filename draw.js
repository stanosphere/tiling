const Canvas = require('canvas')
const concentric = require('./primitives/concentric')
const fillBackground = require('./primitives/fillBackgound')
const setLineStyle = require('./primitives/lineStyle')
const arcTile = require('./tsuro/tiles/fourArcs')
const lineTile = require('./tsuro/tiles/fourLines')
const squarelattice = require('./tsuro/squareLattice')

const draw = () => {
  const canvasWidth = 900
  const N = 30

  const canvas = new Canvas(canvasWidth, canvasWidth)
  const ctx = canvas.getContext('2d')

  fillBackground(canvas, ctx)('white')
  setLineStyle(ctx)('black', 2)

  const f = () => (Math.random() > 0.3 ? arcTile : lineTile)

  squarelattice(f, canvasWidth / N, N)(ctx)
  return canvas
}

module.exports = { basic: draw }
