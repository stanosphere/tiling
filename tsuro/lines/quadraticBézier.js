const getCoords = require('./getCoords')

const gamma = 1 / 3

// 13, 24, 57, 68, 17, 28, 35, 46

// this was useful:
// http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html

const cubicBézier = (x, y, width) => ctx => pair => {
  const [[x0, y0], [x1, y1]] = pair
    .split('')
    .map(getCoords(width))
  let cp1, cp2
  if (pair === '13' || pair === '24') {
    cp1 = {
      x: x + x0,
      y: y + y0 + gamma * width,
    }
    cp2 = {
      x: x + x1 - gamma * width,
      y: y + y1,
    }
  } else if (pair === '57' || pair === '68') {
    cp1 = {
      x: x + x0,
      y: y + y0 - gamma * width,
    }
    cp2 = {
      x: x + x1 + gamma * width,
      y: y + y1,
    }
  } else if (pair === '17' || pair === '28') {
    cp1 = {
      x: x + x0,
      y: y + y0 + gamma * width,
    }
    cp2 = {
      x: x + x1 + gamma * width,
      y: y + y1,
    }
  } else if (pair === '35' || pair === '46') {
    cp1 = {
      x: x + x0 - gamma * width,
      y: y + y0,
    }
    cp2 = {
      x: x + x1,
      y: y + y1 - gamma * width,
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
