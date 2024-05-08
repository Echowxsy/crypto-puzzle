import Puzzle from '../dist/index.js';

let puzzleString = "AAAAGB30WZGl+8JE2QFG4jehme8AMALfblkOWwAAABgEyltJmXGZSetsVSU9y8sy2Y9z14oiVTgAAAAD+8UgAAAAIJ/bjrofpQcQ7Wp6fu2gQTX2voHFZF5DYc1hzWMNkCXfAWKLmpfXVrOr5Zfc3mIwoR3VDekqHIdpq5suYqvgjPkvAAAAAYDQo1eVsku9mf2cP8Hle7fr7LbrKRxhkbR9FAUqfzqU0E/fMV7Mj4Pa2pCpLDbYQcxi4teQ/CMhKUtI5wfr+n37YWu5rkIjIi+CxI6+ErWJLCr/Ylz3Xkwd6FZd1nXBGShQhqxxR4V9pE98YRajMpYdxOfZIowOqIJW"
let puzzleBuffer  = Buffer.from(puzzleString, 'base64')
let puzzle = new Uint8Array(puzzleBuffer);
let start = +Date.now();
console.log('start:',start);
let solution = await Puzzle.solve(puzzle);
console.log(solution);
console.log("end:",+new Date() - start);
