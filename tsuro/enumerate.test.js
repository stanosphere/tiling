const { test } = require('node:test')
const assert = require('node:assert/strict')

const {
  allPairings,
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

test('allPairings pairs 2 ports the only possible way', () => {
  assert.deepEqual(allPairings([1, 2]), [[[1, 2]]])
})

test('allPairings finds the 3 pairings of 4 ports', () => {
  assert.deepEqual(
    new Set(allPairings([1, 2, 3, 4])),
    new Set([
      [
        [1, 2],
        [3, 4],
      ],
      [
        [1, 3],
        [2, 4],
      ],
      [
        [1, 4],
        [2, 3],
      ],
    ])
  )
})

test('allPairings finds the 15 pairings of 6 ports', () => {
  assert.deepEqual(
    new Set(allPairings([1, 2, 3, 4, 5, 6])),
    new Set([
      [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      [
        [1, 2],
        [3, 5],
        [4, 6],
      ],
      [
        [1, 2],
        [3, 6],
        [4, 5],
      ],
      [
        [1, 3],
        [2, 4],
        [5, 6],
      ],
      [
        [1, 3],
        [2, 5],
        [4, 6],
      ],
      [
        [1, 3],
        [2, 6],
        [4, 5],
      ],
      [
        [1, 4],
        [2, 3],
        [5, 6],
      ],
      [
        [1, 4],
        [2, 5],
        [3, 6],
      ],
      [
        [1, 4],
        [2, 6],
        [3, 5],
      ],
      [
        [1, 5],
        [2, 3],
        [4, 6],
      ],
      [
        [1, 5],
        [2, 4],
        [3, 6],
      ],
      [
        [1, 5],
        [2, 6],
        [3, 4],
      ],
      [
        [1, 6],
        [2, 3],
        [4, 5],
      ],
      [
        [1, 6],
        [2, 4],
        [3, 5],
      ],
      [
        [1, 6],
        [2, 5],
        [3, 4],
      ],
    ])
  )
})

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
