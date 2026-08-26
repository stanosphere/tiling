const { toPNG } = require('./toPNG')
const { drawGrid } = require('./draw')

for (let i = 1; i < 101; i++) {
  toPNG(drawGrid(900, 6), `random_${i}`)
}
