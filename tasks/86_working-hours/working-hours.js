/**
 * formatWorkingHours - Formats provided schedule to readable working hours.
 *
 * @example
 * //return ['SAT: 10:00 - 23:00']
 * formatWorkingHours([{ "day": "sat", "from": "10:00", "to": "23:00" }]);
 * @param {Array<Object>} workingDates - provided array with working dates.
 * @return {Array<String>} formatted working hours.
 */
export function formatWorkingHours(workingDates) {
  const readableDates = [];
  const ordedDates = workingDates.sort(sorting);
  for (let i = 1; i < ordedDates.length; i++) {
    if (ordedDates[i].from === ordedDates[i - 1].from
      && ordedDates[i].to === ordedDates[i - 1].to) {
      ordedDates[i - 1].day = ordedDates[i - 1].day
          + ',' + ordedDates[i].day;
      ordedDates.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < ordedDates.length; i++) {
    const days = ordedDates[i].day.toUpperCase().replace(/,\w*,|,/g, ' - ' );
    const hours = ordedDates[i].from + ' - ' + ordedDates[i].to;
    const readableDate = days + ': ' + hours;
    readableDates.push(readableDate);
  }
  return readableDates;
}

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
/**
 * sorting - Compares two provided dates and returns
 * -1, 0, 1 depended on weekday order.
 *
 * @example
 * //return 1
 * sorting({ "day": "sat" }, { "day": "mon" });
 * @param {Object} date1 -
 * @param {Object} date2 -
 * @return {Number}
 */
function sorting(date1, date2) {
  const weekDay1 = date1.day;
  const weekDay2 = date2.day;
  if (weekDays.indexOf(weekDay1) < weekDays.indexOf(weekDay2)) {
    return -1;
  }
  if (weekDays.indexOf(weekDay1) > weekDays.indexOf(weekDay2)) {
    return 1;
  }
  return 0;
}
