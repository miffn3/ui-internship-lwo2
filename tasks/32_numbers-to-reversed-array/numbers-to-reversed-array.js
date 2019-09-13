export function numberToReversedArray(number) {
  return Array.from(number.toString()).reverse().map(Number);
}
