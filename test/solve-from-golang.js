import Puzzle from '../dist/index.js';

let puzzleString = "AAAAGDbIoD8KpxZ4aySq859imu2gEGakkL7BNQAAABgmAIGdUWJqUAUuqRiZE3ij/can/cZKUggAAAAD+8UgAAAAIJh/A+VZbphcM5aTlRCD/ITqKfO6PoGU4TDqCyy7azuQAVwKR0GxR7V8bCk5U4nUXFX8wI62bEI4MVBkPXnqbX6oAAAAAUD+SlYjgZ36Z4xrkfb8YvzjdQIBr78EI7aEkzfczNQeu1dhlJb/m9GZQYKX"
let puzzleBuffer  = Buffer.from(puzzleString, 'base64')
let puzzle = new Uint8Array(puzzleBuffer);
let start = +Date.now();
console.log('start:',start);
let solution = await Puzzle.solve(puzzle);
console.log(solution);
console.log("end:",+new Date() - start);
