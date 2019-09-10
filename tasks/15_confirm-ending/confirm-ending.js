export function confirmEnding(str, target) {
  const start = str.length - target.length;
  return str.substring(start) === target;
}
