// eslint-disable-next-line no-extend-native
String.prototype.camelCase = function() {
  return this.split(' ').reduce((acc, cur) => {
    const word = cur.toLowerCase().split('');
    word[0] = word[0].toUpperCase();
    return acc.concat(word.join(''));
  }, '');
};
