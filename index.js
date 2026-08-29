const { toPNG } = require('./toPNG')
const { drawGrid } = require('./draw')
const { classic } = require('./tsuro/constants')
const { goldOnBrown } = require('./tsuro/palettes')

for (let i = 1; i < 101; i++) {
  toPNG(drawGrid(900, 6, classic, goldOnBrown), `random_${i}`)
}
