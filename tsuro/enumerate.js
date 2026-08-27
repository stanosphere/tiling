// flow :: [a -> b, b ->c, ...x -> y] -> a -> y
const flow = (fs) => (x) => fs.reduce((res, f) => f(res), x)

// getUniqueArrays :: [[Number]] -> [[Number]]
const getUniqueArrays = (arr) =>
  [...new Set(arr.map(JSON.stringify))].map(JSON.parse)

// allPairings :: [Number] -> [[[Number]]]
const allPairings = (ports) => {
  if (ports.length === 0) return [[]]

  const [lowestPort, ...pairingChoices] = ports

  return pairingChoices.flatMap((pairedPort) => {
    const unpairedPorts = pairingChoices.filter(
      (p) => p !== pairedPort
    )

    return allPairings(unpairedPorts).map(
      (matchedPorts) => [
        [lowestPort, pairedPort],
        ...matchedPorts,
      ]
    )
  })
}

// rotate :: [[Number]] -> [[Number]]
const rotate = (arr) =>
  arr
    .map((sub) =>
      sub.map((x) => (x + 2 > 8 ? x - 6 : x + 2)).sort()
    )
    .sort((a, b) => a[0] - b[0])

const getAllRotations = (arr) => {
  const res = [arr]
  let curr = arr
  for (let i = 0; i < 3; i++) {
    curr = rotate(curr)
    res.push(curr)
  }
  return getUniqueArrays(res)
}

// intersection :: ([String] [String]) -> [String]
const intersection = (a, b) =>
  a.filter((v) => b.indexOf(v) !== -1)

// intersection :: ([String] [String]) -> Boolean
const doesIntersect = (a, b) =>
  intersection(a, b).length !== 0

// removeRotations :: [[Number]] -> [[Number]]
const removeRotations = (arr) => {
  const res = []
  const lookup = []
  arr.forEach((config) => {
    if (
      !doesIntersect(
        getAllRotations(config).map(JSON.stringify),
        lookup
      )
    ) {
      res.push(config)
      lookup.push(JSON.stringify(config))
    }
  })
  return res
}

// toNames :: [[[Number]]] -> [[String]]
const toNames = (tiles) =>
  tiles.map((pairs) => pairs.map((pair) => pair.join('')))

const allTiles = flow([allPairings, toNames])([
  1, 2, 3, 4, 5, 6, 7, 8,
])

const allTilesUpToRotation = flow([
  allPairings,
  removeRotations,
  toNames,
])([1, 2, 3, 4, 5, 6, 7, 8])

module.exports = {
  allPairings,
  allTiles,
  allTilesUpToRotation,
}
