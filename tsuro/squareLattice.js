const squareLatice = (tile, tileWidth, n) => ctx => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      tile()(i * tileWidth, j * tileWidth, tileWidth)(ctx)
    }
  }
}

module.exports = squareLatice
