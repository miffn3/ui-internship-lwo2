/**
 * validate_bet - Validates bet for provided game type,
 * if it valid then formats bet and returns it.
 *
 * @example
 * //return '1,2,3,4,5'
 * validate_bet(5, 90], "1 2 3 4 5");
 * @param {Array<Number>} gameType - type of game
 * (for example 3 of 5 would be [3, 5])
 * @param {String} bet - user's text message.
 * @return {String} if bet is valid then returns formatted bet
 * else returns 'None'.
 */
// eslint-disable-next-line camelcase
export function validate_bet(gameType, bet) {
  if (bet.match(/[^\d+|,|\s]/g)) {
    return 'None';
  }
  const chosenNumbers = bet.match(/\d+/g);
  const size = gameType[0];
  if (chosenNumbers.length !== size) {
    return 'None';
  }
  const limit = gameType[1];
  for (let i = 0; i < chosenNumbers.length; i++) {
    if (chosenNumbers[i] < 1 || chosenNumbers[i] > limit) {
      return 'None';
    }
  }
  return chosenNumbers.sort((a, b) => a - b);
}
