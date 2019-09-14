const arr = [];

export function runningAverage(num) {
  return (num) => {
    arr.push(num);
    return arr.reduce((acc, cur) => acc + cur) / arr.length;
  };
}
