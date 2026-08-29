const {
  concat,
  flatMap,
  flow,
  head,
  identity,
  isEmpty,
  join,
  map,
  min,
  sortBy,
  split,
  uniqBy,
  without,
} = require('lodash/fp')

const iterate = require('../iterate')

// allPairings :: [Number] -> [[[Number]]]
const allPairings = (ports) => {
  if (isEmpty(ports)) return [[]]

  const [lowestPort, ...pairingChoices] = ports

  const pairWith = (pairedPort) => {
    const pair = [lowestPort, pairedPort]

    return flow([without([pairedPort]), allPairings, map(concat([pair]))])(
      pairingChoices
    )
  }

  return flatMap(pairWith, pairingChoices)
}

// e.g. [[1, 2], [3, 4]] -> ['12', '34']
// toPairStrings :: [[Number]] -> [String]
const toPairStrings = map(join(''))

// e.g. ['12', '34'] -> [[1, 2], [3, 4]]
// fromPairStrings :: [String] -> [[Number]]
const fromPairStrings = map(flow([split(''), map(Number)]))

// e.g. [[1, 2], [3, 4]] -> '12-34'
// toName :: [[Number]] -> String
const toName = flow([toPairStrings, join('-')])

// rotatePort :: Number -> Number
const rotatePort = (x) => (x + 2 > 8 ? x - 6 : x + 2)

// normalise :: [[Number]] -> [[Number]]
const normalise = flow([map(sortBy(identity)), sortBy(head)])

// rotate :: [[Number]] -> [[Number]]
const rotate = flow([map(map(rotatePort)), normalise])

// getAllRotations :: [[Number]] -> [[[Number]]]
const getAllRotations = flow([normalise, iterate(rotate, 4)])

// allRotationsOf :: [String] -> [[String]]
const allRotationsOf = flow([
  fromPairStrings,
  getAllRotations,
  map(toPairStrings),
])

// this considers all possible rotations of a tile and we simply choose
// whatever is lexicographically first as the canonical name
// canonicalName :: [[Number]] -> String
const canonicalName = flow([getAllRotations, map(toName), min])

// removeRotations :: [[[Number]]] -> [[[Number]]]
const removeRotations = uniqBy(canonicalName)

const allTiles = flow([allPairings, map(toPairStrings)])([
  1, 2, 3, 4, 5, 6, 7, 8,
])

const allTilesUpToRotation = flow([
  allPairings,
  removeRotations,
  map(toPairStrings),
])([1, 2, 3, 4, 5, 6, 7, 8])

module.exports = {
  allPairings,
  allRotationsOf,
  allTiles,
  allTilesUpToRotation,
}
