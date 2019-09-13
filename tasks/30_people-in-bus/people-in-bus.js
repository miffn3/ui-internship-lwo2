export function peopleInBus(stops) {
  let peopleCount = 0;
  for (let i = 0; i < stops.length; i++) {
    peopleCount += stops[i][0] - stops[i][1];
  }
  return peopleCount;
}
