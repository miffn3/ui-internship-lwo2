/**
 * closestEvent - Search name of closest event to provided date.
 *
 * @example
 * //return event2
 * closestEvent([{ date: '2005-08-23', name: 'event1' },
 * { date: '2004-12-26', name: 'event2' }], new Date(1970, 0, 1));
 * @param {Array<Object>} events - array that contains objects which
 * represents events with their names and dates.
 * @param {Date} date - date to find closest event to it.
 * @return {String} name of closest event to provided date.
 */
export function closestEvent(events, date) {
  const eventsDates = [];
  for (let i = 0; i < events.length; i++) {
    const eventDate = new Date(events[i].date);
    eventsDates.push(eventDate);
  }
  const dateDifferences = [];
  for (let i = 0; i < eventsDates.length; i++) {
    const difference = Math.abs(date - eventsDates[i]);
    dateDifferences.push(difference);
  }
  const minDifference = Math.min(...dateDifferences);
  const indexOfClosestDate = dateDifferences.indexOf(minDifference);
  return events[indexOfClosestDate].name;
}
