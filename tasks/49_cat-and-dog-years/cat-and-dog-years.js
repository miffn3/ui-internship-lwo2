const catYears = (humanYears) => {
  return 24 + (humanYears - 2) * 4;
};

const dogYears = (humanYears) => {
  return 24 + (humanYears - 2) * 5;
};

export function humanYearsCatYearsDogYears(humanYears) {
  switch (humanYears) {
    case (1):
      return [1, 15, 15];
    case (2):
      return [2, 24, 24];
    default:
      return [humanYears, catYears(humanYears), dogYears(humanYears)];
  }
}
