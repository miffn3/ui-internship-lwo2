export function rot13Encoder(str) {
  const encodeMessage = [];
  const regex = /[A-Z]/;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(regex)) {
      const offsetLetter = String.fromCharCode(str.charCodeAt(i) % 26 + 65);
      encodeMessage.push(offsetLetter);
    } else {
      encodeMessage.push(str[i]);
    }
  }
  return encodeMessage.join('');
}
