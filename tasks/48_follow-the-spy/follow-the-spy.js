export function followTheSpy(routes) {
  const countries = routes.slice();
  let currentPair = countries[0];
  let indexOfCurrentPair = 0;
  for (let i = 1; i < countries.length; i++) {
    if (currentPair[1] === countries[i][0]) {
      const tmp = countries[indexOfCurrentPair + 1];
      countries[indexOfCurrentPair + 1] = countries[i];
      countries[i] = tmp;
      indexOfCurrentPair++;
    }
  }
  return countries.reduce((acc, cur, index) => {
    if (index === 0) {
      return acc + cur[0] + ', ' + cur[1] + ', ';
    }
    if (index === routes.length - 1) {
      return acc + cur[1];
    }
    return acc + cur[1] + ', ';
  }, '');
}
