const count = function(acc, cur) {
  if (cur === '1') {
    return acc + Number(cur);
  }
  return acc;
};

const sorting = function(a, b) {
  const aNum = Array.from(a.toString(2)).reduce(count);
  const bNum = Array.from(b.toString(2)).reduce(count);
  if (aNum === bNum) {
    return a - b;
  }
  if (aNum < bNum) {
    return -1;
  }
  if (aNum > bNum) {
    return 1;
  }
};

export function sortByBits(arr) {
  return arr.sort(sorting);
}
