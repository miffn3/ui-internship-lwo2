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
  const countries = routes.sort(sortCountries);
  return countries.reduce((acc, cur, index) => {
    if (index === 0) {
      return acc + cur[0] + ', ' + cur[1] + ', ';
    }
    if (index === routes.length - 1) {
      return acc+ cur[1];
    }
    return acc+ cur[1] + ', ';
  }, '');
}
