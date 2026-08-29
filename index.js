const { toPNG } = require('./toPNG')
const { drawGrid } = require('./draw')
const { classic } = require('./tsuro/constants')

for (let i = 1; i < 101; i++) {
  toPNG(drawGrid(900, 6, classic), `random_${i}`)
}
