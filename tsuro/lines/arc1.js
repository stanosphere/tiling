const alpha = require('./alpha')

// case of small arcs at corners
const arc1 = (x, y, width) => (ctx) => (pair) => {
  const r = width * (1 - alpha)
  if (pair === '18') {
    // bottom left
    ctx.moveTo(x, y + width - r)
    ctx.arc(x, width + y, r, (3 * Math.PI) / 2, 2 * Math.PI)
  } else if (pair === '23') {
    // bottom right
    ctx.moveTo(x + width - r, y + width)
    ctx.arc(
      x + width,
      y + width,
      r,
      Math.PI,
      (3 * Math.PI) / 2
    )
  } else if (pair === '45') {
    // top right
    ctx.moveTo(x + width, y + r)
    ctx.arc(x + width, y, r, Math.PI / 2, Math.PI)
  } else if (pair === '67') {
    // top left
    ctx.moveTo(x + r, y)
    ctx.arc(x, y, r, 0, Math.PI / 2)
  }
}

module.exports = arc1
