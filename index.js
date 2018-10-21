const { toPNG } = require('./toPNG')
const drawings = require('./draw')

for (let i = 1; i < 21; i++) {
  toPNG(drawings.basic(), `random_${i}`)
}
