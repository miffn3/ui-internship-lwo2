/**
 * monthsInterval -  Returns the names of the months that are present
 * between two provided dates (inclusive).
 *
 * @example
 * //return ['April', 'May', 'June', 'July', 'August']
 * monthsInterval(new Date(2017, 3, 1), new Date(2017, 7, 1));
 * @param {Date} firstDate - first date.
 * @param {Date} secondDate - second date.
 * @return {Array<String>} names of months that are present between dates.
 */
export function monthsInterval(firstDate, secondDate) {
  const result = [];
  const yearDifference = Math.abs(firstDate.getFullYear()
                                - secondDate.getFullYear());
  if (yearDifference === 0) {
    const startMonth = Math.min(firstDate.getMonth(), secondDate.getMonth());
    const endMonth = Math.max(firstDate.getMonth(), secondDate.getMonth());
    for (let i = startMonth; i <= endMonth; i++) {
      result.push(months[i]);
    }
  } else if (yearDifference > 1) {
    return months;
  } else {
    if (firstDate.getMonth() == secondDate.getMonth()) {
      return months;
    }
    let currentYear;
    let previousYear;
    if (firstDate.getFullYear() > secondDate.getFullYear()) {
      currentYear = firstDate;
      previousYear = secondDate;
    } else {
      currentYear = secondDate;
      previousYear = firstDate;
    }
    for (let i = 0; i <= currentYear.getMonth(); i++) {
      result.push(months[i]);
    }
    for (let i = previousYear.getMonth(); i < months.length; i++) {
      result.push(months[i]);
    }
  }
  return result;
}

const months = ['January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
