const circle = ctx => (r, x, y) => {
  ctx.arc(x, y, r, 0, 2 * Math.PI)
}

module.exports = circle