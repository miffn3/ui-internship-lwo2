const sortCountries = (a, b) => {
  if (a[1] === b[0]) {
    return -1;
  }
  if (a[0] === b[1]) {
    return 1;
  }
  return 0;
};

export function followTheSpy(routes) {
  return routes.sort(sortCountries).reduce((acc, cur, index) => {
    if (index === 0) {
      return acc.concat(cur[0] + ', ' + cur[1] + ', ');
    }
    if (index === routes.length - 1) {
      return acc.concat(cur[1]);
    }
    return acc.concat(cur[1] + ', ');
  }, '');
}
