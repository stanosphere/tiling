const circle = require('./circle')
const moveTo = require('./moveTo')

const concentric = ctx => ({ r, n, seperation, x, y }) => {
  for (let i = 0; i < n; i++) {
    moveTo(ctx)(x + r + i * seperation, y)
    circle(ctx)(r + i * seperation, x, y)
  }
}

module.exports = concentric
