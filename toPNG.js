const fs = require('fs')

const toPNG = (canvas, name) => {
  const dir = `${__dirname}/pictures`
  const path = `${dir}/${name}.png`
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path, canvas.toBuffer('image/png'))
  console.log(`saved png at ${path}`)
}

module.exports = { toPNG }
