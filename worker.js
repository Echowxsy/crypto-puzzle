import Puzzle from "./src/index.ts";

onmessage = async function(e) {
  let puzzleBuffer = Buffer.from(e.data, "base64");
  let puzzle = new Uint8Array(puzzleBuffer);
  let start = +Date.now();
  let solution = await Puzzle.solve(puzzle);
  postMessage(solution);
}