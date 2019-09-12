export function rowWeights(arr) {
  if (arr.length === 1) {
    return [arr[0], 0];
  }
  const firstTeam = [];
  const secondTeam = [];
  const countWeight = (acc, cur) => acc + cur;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      firstTeam.push(arr[i]);
    } else {
      secondTeam.push(arr[i]);
    }
  }
  return [firstTeam.reduce(countWeight), secondTeam.reduce(countWeight)];
}
