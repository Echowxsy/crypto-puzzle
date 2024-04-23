import Puzzle from '../dist/index.js';

const puzzle = await Puzzle.generate({
  /* OPTIONAL OPTIONS */
  primeBits: 100, // Number of bits of entropy that the two internally generated primes will have
  primeRounds: 6, // Number of Miller-Rabin primality checks that the prime numbers will have to pass
  opsPerSecond: 3_300_000, // Rough number of operations per second that the attacker/receiver can perform, 3.3M is around what a MBP M1 Max can do
  /* REQUIRED OPTIONS */
  duration: 1_000, // Rough minimum number of milliseconds that this puzzle will be unsolvable for
  message: 'msg', // Message to encrypt inside the puzzle
});
console.log(Buffer.from(puzzle).toString('base64'));
