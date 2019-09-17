export function uniqueInOrder(str) {
  return Array.from(str)
      .filter((el, index, letters) => el !== letters[index - 1]);
}
