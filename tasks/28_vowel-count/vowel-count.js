export function getVowelCount(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'o', 'i', 'u'];
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
