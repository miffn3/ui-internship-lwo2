const count = function(acc, cur) {
  if (cur === '1') {
    return ++acc;
  }
  return acc;
};

const sorting = function(a, b) {
  const aNum = Array.from(a.toString(2)).reduce(count);
  const bNum = Array.from(b.toString(2)).reduce(count);
  if (aNum < bNum) {
    return -1;
  }
  if (aNum > bNum) {
    return 1;
  }
  return a - b;
};

export function sortByBits(arr) {
  return arr.sort(sorting);
}
