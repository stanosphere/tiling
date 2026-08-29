const squareLattice = (tile, tileWidth, n, gap) => (ctx) => {
  ctx.beginPath()
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      tile()(
        gap + i * (tileWidth + gap),
        gap + j * (tileWidth + gap),
        tileWidth
      )(ctx)
    }
  }
  ctx.stroke()
}

module.exports = squareLattice
