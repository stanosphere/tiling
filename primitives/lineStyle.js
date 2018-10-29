const setLineStyle = ctx => (colour, lineWidth) => {
  ctx.strokeStyle = colour
  ctx.lineWidth = lineWidth
}

module.exports = setLineStyle
