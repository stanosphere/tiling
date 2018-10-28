const alpha = require('./alpha')

// case of arcs on edges
const arc3 = (x, y, width) => ctx => pair => {
  const r = width * alpha - width / 2
  if (pair === '12') {
    // top
    ctx.moveTo(x + width / 2 - r, y)
    ctx.arc(x + width / 2, y, r, Math.PI, 0, true)
  } else if (pair === '34') {
    // right
    ctx.moveTo(x + width, y + width / 2 - r)
    ctx.arc(
      x + width,
      y + width / 2,
      r,

      (3 * Math.PI) / 2,
      Math.PI / 2,
      true
    )
  } else if (pair === '56') {
    // botom
    ctx.moveTo(x + width / 2 - r, y + width)
    ctx.arc(
      x + width / 2,
      y + width,
      r,
      Math.PI,
      2 * Math.PI
    )
  } else if (pair === '78') {
    // left
    ctx.moveTo(x, y + width / 2 - r)
    ctx.arc(
      x,
      y + width / 2,
      r,
      (3 * Math.PI) / 2,
      Math.PI / 2
    )
  }
}

module.exports = arc3
