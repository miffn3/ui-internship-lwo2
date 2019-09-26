export function randomFraction() {
  let curFraction = Number(Math.random().toFixed(1));
  while (lastFraction === curFraction && curFraction !== 0) {
    curFraction = Number(Math.random().toFixed(1));
  }
  lastFraction = curFraction;
  return curFraction;
}

let lastFraction;
