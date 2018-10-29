const Canvas = require('canvas')
const fillBackground = require('./primitives/fillBackgound')
const setLineStyle = require('./primitives/lineStyle')
const squarelattice = require('./tsuro/squareLattice')
const drawTile = require('./tsuro/drawTile')
const allTiles = require('./tsuro/enumerate')

// getRandomEntry :: [a] -> a
const getRandomEntry = arr =>
  arr[Math.floor(arr.length * Math.random())]

const draw = () => {
  const canvasWidth = 900
  const N = 4

  const canvas = new Canvas(canvasWidth, canvasWidth)
  const ctx = canvas.getContext('2d')

  fillBackground(canvas, ctx)('blue')

  const f = () => drawTile(getRandomEntry(allTiles))

  squarelattice(f, canvasWidth / N, N)(ctx)
  return canvas
}

module.exports = { basic: draw }
