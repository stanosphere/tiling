const squareTile = (x, y, width) => ctx => {
  const r = width / 3
  // draw
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + r, y + width)
  ctx.moveTo(x + 2 * r, y)
  ctx.lineTo(x + 2 * r, y + width)
  ctx.moveTo(x, y + r)
  ctx.lineTo(x + width, y + r)
  ctx.moveTo(x, y + 2 * r)
  ctx.lineTo(x + width, y + 2 * r)
  ctx.stroke()
}

module.exports = squareTile
