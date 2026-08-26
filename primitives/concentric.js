const circle = require('./circle')
const moveTo = require('./moveTo')

const concentric =
  (ctx) =>
  ({ r, n, separation, x, y }) => {
    for (let i = 0; i < n; i++) {
      moveTo(ctx)(x + r + i * separation, y)
      circle(ctx)(r + i * separation, x, y)
    }
  }

module.exports = concentric
