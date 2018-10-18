const fillBackground = (canvas, ctx) => colour => {
  ctx.fillStyle = colour
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

module.exports = fillBackground