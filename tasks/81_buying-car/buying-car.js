/**
 * nbMonths - Calculates how many monthes needed to save money
 * for new car based on old car's price, new car's price,
 * savings per month and cars' price's loss percent
 *
 * @example
 * //return 6, 766
 * nbMonths(2000, 8000, 1000, 1.5);
 * @param {Number} startPriceOld - start price for old car.
 * @param {Number} startPriceNew - start price for new car.
 * @param {Number} savingsPerMonth - monthly savings.
 * @param {Number} percentLossByMonth - percent of loss of cars' prices.
 * for every 2 month.
 * @return {Array<Number>} pair of monthes needed to save
 * money and how much money will left over.
 */
export function nbMonths(
    startPriceOld,
    startPriceNew,
    savingsPerMonth,
    percentLossByMonth) {
  let savings = 0;
  let priceOld = startPriceOld;
  let priceNew = startPriceNew;
  let month = 0;
  let percentLoss = percentLossByMonth;
  while (savings + priceOld < priceNew) {
    month++;
    let monthlyDecrease = (100 - percentLoss) / 100;
    savings += savingsPerMonth;
    priceOld = Math.round(priceOld * monthlyDecrease);
    priceNew = Math.round(priceNew * monthlyDecrease);
    if (month % 2 === 1) {
      percentLoss += 0.5;
    }
  }
  return [month, savings + priceOld - priceNew];
}
