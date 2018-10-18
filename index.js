const { toPNG } = require('./toPNG')
const drawings = require('./draw')

for (let i = 0; i < 20; i++) {
  toPNG(drawings.basic(), `circles_${i}`)
}
