// these greek letter constants control how the drawing looks
// alpha is the most import since it determines where the ports lie along the tile
// beta and gamma control aspects of the bezier curves

// the original constants that I used back in 2018
// it seems at the time the other values for alpha that I considered were 1 / sqrt(2) and 3 / 4
const classic = {
  alpha: 2 / (1 + Math.sqrt(5)),
  beta: 1 / 2,
  gamma: 1 / 3,
}

// I mean at least this roughly looks like what they use
const wikipedia = {
  alpha: 2 / 3,
  beta: 1 / 2,
  gamma: 1 / 3,
}

module.exports = { classic, wikipedia }
