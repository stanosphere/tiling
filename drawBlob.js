const { sampleSize, uniqBy } = require('lodash/fp')
const { createCanvas } = require('canvas')
const { toPNG } = require('./toPNG')
const fillBackground = require('./primitives/fillBackground')
const drawTile = require('./tsuro/drawTile')
const { allRotationsOf, allTilesUpToRotation } = require('./tsuro/enumerate')
const { classic } = require('./tsuro/constants')
const { goldOnBrown } = require('./tsuro/palettes')

const canvasWidth = 900
const gridSideLength = 6
const gap = 12
const tileCount = 25
const tileWidth = (canvasWidth - (gridSideLength + 1) * gap) / gridSideLength

// getRandomEntry :: [a] -> a
const getRandomEntry = (arr) => arr[Math.floor(arr.length * Math.random())]

// randomRotationOf :: [String] -> [String]
const randomRotationOf = (tile) => getRandomEntry(allRotationsOf(tile))

const cellKey = ([col, row]) => `${col},${row}`

const neighbours = ([col, row]) => [
  [col - 1, row],
  [col + 1, row],
  [col, row - 1],
  [col, row + 1],
]

const inGrid = ([col, row]) =>
  col >= 0 && col < gridSideLength && row >= 0 && row < gridSideLength

// grow a contiguous blob of tiles
// we start anywhere and then make sure we place tiles next to existing tiles
// this actually isn't how the game works but that's fine!
const randomBlob = (size) => {
  const start = [
    Math.floor(Math.random() * gridSideLength),
    Math.floor(Math.random() * gridSideLength),
  ]
  const placed = [start]
  const placedKeys = new Set([cellKey(start)])

  while (placed.length < size) {
    const frontier = uniqBy(
      cellKey,
      placed
        .flatMap(neighbours)
        .filter(inGrid)
        .filter((cell) => !placedKeys.has(cellKey(cell)))
    )
    const next = getRandomEntry(frontier)
    placed.push(next)
    placedKeys.add(cellKey(next))
  }

  return placed
}

const canvas = createCanvas(canvasWidth, canvasWidth)
const ctx = canvas.getContext('2d')
fillBackground(canvas, ctx)(goldOnBrown.table)

// each basic tile appears at most once so we choose a random sample right at the start
const chosenTiles = sampleSize(tileCount, allTilesUpToRotation)

randomBlob(tileCount).forEach(([col, row], i) => {
  drawTile(classic, goldOnBrown)(randomRotationOf(chosenTiles[i]))(
    gap + col * (tileWidth + gap),
    gap + row * (tileWidth + gap),
    tileWidth
  )(ctx)
})

toPNG(canvas, 'blob')
