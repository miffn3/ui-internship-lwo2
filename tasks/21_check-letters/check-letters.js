export function checkLetters(arr) {
  const firstWord = arr[0].toLowerCase().split('');
  const secondWord = arr[1].toLowerCase().split('');
  for (let i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i]) === -1) {
      return false;
    }
  }
  return true;
}
