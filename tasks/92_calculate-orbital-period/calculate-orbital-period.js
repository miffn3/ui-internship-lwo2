/**
 * orbitalPeriod - Calculates orbital period of celestial body.
 *
 * @example
 * //return [{name : "iss", orbitalPeriod: 5557}]
 * orbitalPeriod([{name : "iss", avgAlt: 413.6});
 * @param {Array<Object>} celestialBodies - sequence of celestial bodies
 * which contains their names and average altitude.
 * @return {Array<Object>} celestial bodies with their names and orbital period.
 */
export function orbitalPeriod(celestialBodies) {
  const result = [];
  for (let i = 0; i < celestialBodies.length; i++) {
    const celestialBody = {};
    celestialBody.name = celestialBodies[i].name;
    const radius = celestialBodies[i].avgAlt + EARTH_RADIUS;
    const orbitalPer = Math.sqrt(Math.pow(radius, 3) * precalculatedConst / GM);
    celestialBody.orbitalPeriod = Math.round(orbitalPer);
    result.push(celestialBody);
  }
  return result;
}

const GM = 398600.4418;
const EARTH_RADIUS = 6367.4447;
const precalculatedConst = 4 * Math.pow(Math.PI, 2);
