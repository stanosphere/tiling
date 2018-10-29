# Tsuro Tiles

I was playing a board game called Tsuro the other day and i liked the patterns. so I thought I'd see what a randomly generated pattern looks like. https://boardgamegeek.com/boardgame/16992/tsuro. This is the first real thing I've put on github so be gentle! Eventually i want to make it into some sort of app probably.

## Examples

See the examples folder for some hopefully pretty pictures!

## Notes

- It can be shown that there are 35 Tsuro tiles. (see `tiling/tsuro/enumerate.js`)
- If one considers rotating these tiles then there are 105 unique tiles.
    - In fact in general, I believe that for a tile with `2 * n` ports the number of tiles is ((2 * n)!) / ((2 ** n) * (n!))
    - please forgive my lack of formatting!
- I imagine some mad set theory stuff can help us wih the enumeration https://www.whitman.edu/Documents/Academics/Mathematics/Huisinga.pdf
- But I'm not good enough at maths to understand this yet!

## To Do

This is just a place where I'm jotting down ideas of what this might become.

- Turn the whole thing into a webapp rather than just some random node script
    - This will allow me to work on some UI stuff.
    - It'll also help me with React/Redux.
- Different tile types (hexagonal, octagonal, more ports, whatever...)
- Vary parameters
    - alpha - the spacing parameter
    - beta - the curvature parameter
    - could create some animations
- If it is a webapp I could allow users to:
    - Vary the grid size and shape
    - colour things nicely
    - choose a degree of randomness
    - construct their own grids by dragging and dropping tiles
- Most of the above would be so I can do a bit more React stuff :) 
- Path detection
    - this could get quite mad
    - cycle detection
    - enumerate end to end paths and cycles
    - colour each path differently
    - this is probably the most difficult thing on the list
- Consider non random patterns
    - might get some very beautiful results
    - kind of like what you see in middle eastern art

