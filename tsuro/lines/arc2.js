const golden = require("./golden")

// case of large arcs at corners
const arc2 = (x, y, width) => ctx => pair => {
  const r = width / golden
  if (pair === '27') {
    // top left
    ctx.moveTo(x + r, y)
    ctx.arc(x, y, r, 0, Math.PI / 2)
  } else if (pair === '14') {
    // top right
    ctx.moveTo(x + width, y + r)
    ctx.arc(x + width, y, r, Math.PI / 2, Math.PI)
  } else if (pair === '36') {
    // botom rigth
    ctx.moveTo(x + width - r, y + width)
    ctx.arc(
      x + width,
      y + width,
      r,
      Math.PI,
      (3 * Math.PI) / 2
    )
  } else if (pair === '58') {
    // bottom left
    ctx.moveTo(x, y + width - r)
    ctx.arc(x, width + y, r, (3 * Math.PI) / 2, 2 * Math.PI)
  }
}

module.exports = arc2
