const { createCanvas } = require('canvas')
const fillBackground = require('./primitives/fillBackground')
const squareLattice = require('./tsuro/squareLattice')
const drawTile = require('./tsuro/drawTile')
const { allTiles } = require('./tsuro/enumerate')

// getRandomEntry :: [a] -> a
const getRandomEntry = (arr) => arr[Math.floor(arr.length * Math.random())]

const drawGrid = (canvasWidth, gridSideLength, constants, palette) => {
  const canvas = createCanvas(canvasWidth, canvasWidth)
  const ctx = canvas.getContext('2d')

  fillBackground(canvas, ctx)(palette.background)

  const f = () => drawTile(constants, palette)(getRandomEntry(allTiles))

  squareLattice(f, canvasWidth / gridSideLength, gridSideLength)(ctx)
  return canvas
}

module.exports = { drawGrid }
