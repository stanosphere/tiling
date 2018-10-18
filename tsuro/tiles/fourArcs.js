const squareTile = (x, y, width) => ctx => {
  const r = width / 3
  // draw
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arc(x, y, r, 0, Math.PI / 2)
  ctx.moveTo(x + width, y + r)
  ctx.arc(x + width, y, r, Math.PI / 2, Math.PI)
  ctx.moveTo(x + width - r, y + width)
  ctx.arc(
    x + width,
    y + width,
    r,
    Math.PI,
    (3 * Math.PI) / 2
  )
  ctx.moveTo(x, y + width - r)
  ctx.arc(x, width + y, r, (3 * Math.PI) / 2, 2 * Math.PI)
  ctx.stroke()
}

module.exports = squareTile
