const { last } = require('lodash/fp')

// remarkably lodash doesn't really have anything analogous to scala's `Iterator.iterate`
// this is basically `Iterator.iterate` combined with `take`
// iterate :: (a -> a, Number) -> a -> [a]
const iterate = (f, n) => (x) => {
  const res = [x]
  while (res.length < n) res.push(f(last(res)))
  return res
}

module.exports = iterate
