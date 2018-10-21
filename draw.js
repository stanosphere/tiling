const Canvas = require('canvas')
const fillBackground = require('./primitives/fillBackgound')
const setLineStyle = require('./primitives/lineStyle')
const smallArcTile = require('./tsuro/tiles/four-fold-symmetry/smallCornerArcs')
const largeArcTile = require('./tsuro/tiles/four-fold-symmetry/largeCornerArcs')
const lineTile = require('./tsuro/tiles/four-fold-symmetry/fourLines')
const squarelattice = require('./tsuro/squareLattice')

const drawFunctions = [smallArcTile, largeArcTile, lineTile]

// getRandomEntry :: [a] -> a
const getRandomEntry = arr =>
  arr[Math.floor(arr.length * Math.random())]

const draw = () => {
  const canvasWidth = 900
  const N = 20

  const canvas = new Canvas(canvasWidth, canvasWidth)
  const ctx = canvas.getContext('2d')

  fillBackground(canvas, ctx)('white')
  setLineStyle(ctx)('black', 2)

  const f = () => getRandomEntry(drawFunctions)

  squarelattice(f, canvasWidth / N, N)(ctx)
  return canvas
}

module.exports = { basic: draw }
