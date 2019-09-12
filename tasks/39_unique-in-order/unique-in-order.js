export function uniqueInOrder(str) {
  const letters = Array.from(str);
  return letters.filter((el, index, letters) => el !== letters[index - 1]);
}
