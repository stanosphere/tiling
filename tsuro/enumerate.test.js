const { test } = require('node:test')
const assert = require('node:assert/strict')

const {
  allTiles,
  allTilesUpToRotation,
} = require('./enumerate')

const allPorts = new Set([1, 2, 3, 4, 5, 6, 7, 8])

// getPortSet :: Tile -> Set Number
const getPortSet = (tile) =>
  new Set(
    tile.flatMap((pair) => pair.split('').map(Number))
  )

// checkPerfectMatchings :: [Tile] -> ()
const checkPerfectMatchings = (tiles) => {
  for (const tile of tiles)
    assert.deepEqual(getPortSet(tile), allPorts)
}

test('there are 105 tiles', () => {
  assert.equal(allTiles.length, 105)
})

test('there are 35 tiles up to rotation', () => {
  assert.equal(allTilesUpToRotation.length, 35)
})

test('every tile in allTiles uses every port 1-8', () => {
  checkPerfectMatchings(allTiles)
})

test('every tile in allTilesUpToRotation uses every port 1-8', () => {
  checkPerfectMatchings(allTilesUpToRotation)
})
