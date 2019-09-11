export function removeFalsyValues(arr) {
  const result = arr.filter((word) => Boolean(word));
  return result;
}
