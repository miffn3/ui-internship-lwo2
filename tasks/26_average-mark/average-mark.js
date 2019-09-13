export function getAverage(marks) {
  const sum = marks.reduce((accum, current) => accum + current);
  return Math.round(sum / marks.length);
}
