export function reverseStringInRange(str, range) {
  const from = range[0];
  const to = range[1] + 1;
  const reversePart = Array.from(str.slice(from, to));
  return str.slice(0, from) + reversePart.reverse().join('') + str.slice(to);
}
