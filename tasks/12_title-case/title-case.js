export function titleCase(str) {
  const words = str.split(' ');
  const fixedWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase().split('');
    word[0] = word[0].toUpperCase();
    fixedWords.push(word.join(''));
  }
  return fixedWords.join(' ');
}
