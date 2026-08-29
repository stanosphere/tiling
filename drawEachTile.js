const fs = require('fs')
const { createCanvas } = require('canvas')
const drawTile = require('./tsuro/drawTile')
const { allTilesUpToRotation } = require('./tsuro/enumerate')
const { wikipedia } = require('./tsuro/constants')
const { goldOnBrown } = require('./tsuro/palettes')

const size = 300
const outDir = `${__dirname}/pictures/tiles`

fs.mkdirSync(outDir, { recursive: true })

allTilesUpToRotation.forEach((tile) => {
  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext('2d')
  drawTile(wikipedia, goldOnBrown)(tile)(0, 0, size)(ctx)
  const path = `${outDir}/${tile.join('-')}.png`
  fs.writeFileSync(path, canvas.toBuffer('image/png'))
  console.log(`saved png at ${path}`)
})
