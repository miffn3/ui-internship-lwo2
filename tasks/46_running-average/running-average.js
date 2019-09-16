export function runningAverage(num) {
  const arr = [];
  return (num) => {
    arr.push(num);
    return arr.reduce((acc, cur) => acc + cur) / arr.length;
  };
}
