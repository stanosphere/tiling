const getCoords = require('./getCoords')

// this was useful:
// http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html

const cubicBézier = (constants) => (x, y, width) => (ctx) => (pair) => {
  const { beta } = constants
  const [[x0, y0], [x1, y1]] = pair.split('').map(getCoords(constants)(width))
  let cp1, cp2
  if (pair === '15' || pair === '26') {
    // bottom to top
    cp1 = {
      x: x + x0,
      y: y + y0 - beta * width,
    }
    cp2 = {
      x: x + x1,
      y: y + y1 + beta * width,
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
  ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, x + x1, y + y1)
}

module.exports = cubicBézier
