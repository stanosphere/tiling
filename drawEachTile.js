const fs = require('fs')
const { createCanvas } = require('canvas')
const fillBackground = require('./primitives/fillBackground')
const drawTile = require('./tsuro/drawTile')
const drawPortLabels = require('./tsuro/drawPortLabels')
const { allTilesUpToRotation } = require('./tsuro/enumerate')
const { wikipedia } = require('./tsuro/constants')
const { goldOnBrown } = require('./tsuro/palettes')

const size = 300
const showLabels = process.argv.includes('--labels')
const outDir = showLabels
  ? `${__dirname}/pictures/tiles/labelled`
  : `${__dirname}/pictures/tiles`

// labelled tiles need a margin for the numbers to sit in
const margin = showLabels ? size * 0.12 : 0
const tileWidth = size - 2 * margin

fs.mkdirSync(outDir, { recursive: true })

allTilesUpToRotation.forEach((tile) => {
  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext('2d')
  fillBackground(canvas, ctx)(goldOnBrown.table)
  drawTile(wikipedia, goldOnBrown)(tile)(margin, margin, tileWidth)(ctx)
  if (showLabels) {
    drawPortLabels(wikipedia, goldOnBrown)(margin, margin, tileWidth)(ctx)
  }
  const path = `${outDir}/${tile.join('-')}.png`
  fs.writeFileSync(path, canvas.toBuffer('image/png'))
  console.log(`saved png at ${path}`)
})
