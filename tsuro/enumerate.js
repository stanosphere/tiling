// flow :: [a -> b, b ->c, ...x -> y] -> a -> y
const flow = fs => x => fs.reduce((res, f) => f(res), x)

// getUniqueArrays :: [[Number]] -> [[Number]]
const getUniqueArrays = arr =>
  [...new Set(arr.map(JSON.stringify))].map(JSON.parse)

// toSortedPairs [Number] -> [[Number]]
const toSortedPairs = arr => {
  const res = []
  for (let i = 0; i < arr.length / 2; i++)
    res.push(arr.slice(i * 2, (i + 1) * 2).sort())
  return res.sort((a, b) => a[0] - b[0])
}

// permutator :: ([Number] -> [Number]) -> [Number] -> [[Number]]
const getPermutations = f => inputArr => {
  const result = []

  const construct = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(f(m))
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice(0)
        const next = curr.splice(i, 1)
        construct(curr.slice(), m.concat(next))
      }
    }
  }
  construct(inputArr)

  return result
}

// rotate :: [[Number]] -> [[Number]]
const rotate = arr =>
  arr
    .map(sub =>
      sub.map(x => (x + 2 > 8 ? x - 6 : x + 2)).sort()
    )
    .sort((a, b) => a[0] - b[0])

const getAllRotations = arr => {
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
  a.filter(v => b.indexOf(v) !== -1)

// intersection :: ([String] [String]) -> Boolean
const doesIntersect = (a, b) =>
  intersection(a, b).length !== 0

// removeRotations :: [[Number]] -> [[Number]]
const removeRotations = arr => {
  const res = []
  const lookup = []
  arr.forEach(config => {
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

console.log(
  flow([
    getPermutations(toSortedPairs),
    getUniqueArrays,
    removeRotations,
  ])([1, 2, 3, 4, 5, 6, 7, 8]).filter(
    x => getAllRotations(x).length === 1
  )
)
