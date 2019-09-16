export function translatePigLatin(str) {
  const vowels = ['a', 'e', 'o', 'i', 'u'];
  let count = 0;
  if (vowels.indexOf(str[0]) !== -1) {
    return str + 'way';
  }
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      return str.substring(i) + str.substring(0, count) + 'ay';
    }
    count++;
  }
}
