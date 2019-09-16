export function findLetter(str) {
  let lastIndex = str.charCodeAt(0);
  for (let i = 1; i < str.length; i++) {
    const currentIndex = str.charCodeAt(i);
    if (currentIndex - lastIndex !== 1) {
      return String.fromCharCode(currentIndex - 1);
    }
    lastIndex = currentIndex;
  }
  return undefined;
}
