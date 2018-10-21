// 28 combinations in the case of tsuro
const ARC_1 = 1
const ARC_2 = 2
const ARC_3 = 3
const STRAIGHT = 4
const CUBIC_BEZ = 5
const QUAD_BEZ = 6

// getAllPairs :: [Number] -> [String]
const getAllPairs = arr => {
  const res = []
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      res.push([arr[i], arr[j]].sort().join(''))
    }
  }
  return res
}

// pairsToTypes :: [String] -> Number
const pairsToTypes = pair => {
  if (['18', '23', '45', '67'].includes(pair)) return ARC_1
  if (['14', '27', '36', '58'].includes(pair)) return ARC_2
  if (['12', '34', '56', '78'].includes(pair)) return ARC_3
  if (['16', '25', '38', '47'].includes(pair))
    return STRAIGHT
  if (['15', '26', '37', '48'].includes(pair))
    return CUBIC_BEZ
  return QUAD_BEZ
}

module.exports = {
  pairsToTypes,
  ARC_1,
  ARC_2,
  ARC_3,
  STRAIGHT,
  CUBIC_BEZ,
  QUAD_BEZ,
}
