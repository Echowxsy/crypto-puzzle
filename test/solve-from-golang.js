import Puzzle from '../dist/index.js';

let puzzleString = "AAAAGOn22seatmiGFKiZlmUKJP3Zc6JTtPS/nwAAABhms4mSAcHVcYHmavdcEs1HwVuO8l2bYQgAAAADMlqgAAAAIDBmrPzRB+pwbzSWODcCUeR6oxGatxPWGQjfVKYCU9YWATMVyfL9cUQhiC6TIJ3z7VJnWia2/FwcuqyLmkVrt+TpAAAAAWkmj03szeboaWTNzpozOgp1E+UudOJ8WchzHD5gzZmHR9dL4OMr8hRt"
let puzzleBuffer  = Buffer.from(puzzleString, 'base64')
let puzzle = new Uint8Array(puzzleBuffer);
let start = +Date.now();
console.log('start:',start);
let solution = await Puzzle.solve(puzzle);
console.log(solution);
console.log("end:",+new Date() - start);
