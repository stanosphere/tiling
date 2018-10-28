const getCoords = require('./getCoords')

const beta = 1 / 2

// this was useful:
// http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html

const cubicBézier = (x, y, width) => ctx => pair => {
  const [[x0, y0], [x1, y1]] = pair
    .split('')
    .map(getCoords(width))
  let cp1, cp2
  if (pair === '15' || pair === '26') {
    // top to bottom
    cp1 = {
      x: x + x0,
      y: y + y0 + beta * width,
    }
    cp2 = {
      x: x + x1,
      y: y + y1 - beta * width,
    }
  } else if (pair === '37' || pair === '48') {
    cp1 = {
      x: x + x0 - beta * width,
      y: y + y0,
    }
    cp2 = {
      x: x + x1 + beta * width,
      y: y + y1,
    }
  }
  ctx.moveTo(x + x0, y + y0)
  ctx.bezierCurveTo(
    cp1.x,
    cp1.y,
    cp2.x,
    cp2.y,
    x + x1,
    y + y1
  )
}

module.exports = cubicBézier
