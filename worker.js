import Puzzle from "./src/index.ts";

onmessage = async function(e) {
  console.log('Worker: Message received from main script');
  let puzzleBuffer = Buffer.from(e.data, "base64");
  let puzzle = new Uint8Array(puzzleBuffer);
  let start = +Date.now();
  console.log("start:", start);
  let solution = await Puzzle.solve(puzzle);
  console.log('Worker result:',solution);
  postMessage(solution);
  console.log("end:", +new Date() - start);
}