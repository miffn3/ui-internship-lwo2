/**
 * bouncingBall - Counts how many times mother can see child's ball bouncing.
 *
 * @example
 * //return 3
 * bouncingBall(3.0, 0.66, 1.5);
 * @param {Number} heightOfFloor - height of the floor,
 * where child throwed ball.
 * @param {Number} bouncingCoefficient - ball bounce to this
 * part of last height.
 * @param {Number} heightOfWindowPlaced - height where mother's
 * window is placed.
 * @return {Number} how many times mother will see ball from window.
 */
export function bouncingBall(
    heightOfFloor,
    bouncingCoefficient,
    heightOfWindowPlaced) {
  if (bouncingCoefficient <= 0
    || bouncingCoefficient >= 1
    || heightOfFloor <= 0
    || heightOfWindowPlaced <= 0) {
    return -1;
  }
  const bounces = Math.log(heightOfWindowPlaced / heightOfFloor)
                  / Math.log(bouncingCoefficient);
  return Math.ceil(bounces) * 2 - 1;
}
