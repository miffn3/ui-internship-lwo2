/**
 * populateTable - Creates <table> and fills it up with provided data.
 *
 * @param {Array<Object>} students - provided data to fill up the table.
 */
export function populateTable(students) {
  // eslint-disable-next-line no-undef
  const table = document.createElement('table');
  const properties = Object.keys(students[0]);
  const row1 = table.insertRow();
  for (let i = 0; i < properties.length; i++) {
    const newCell = row1.insertCell();
    newCell.innerHTML = properties[i];
  }
  for (let i = 0; i < students.length; i++) {
    const newRow = table.insertRow();
    for (let j = 0; j < properties.length - 1; j++) {
      const newCell = newRow.insertCell();
      newCell.innerHTML = students[i][properties[j]];
    }
    const newCell = newRow.insertCell();
    if (students[i][properties[properties.length - 1]]) {
      newCell.innerHTML = 'yes';
    } else {
      newCell.innerHTML = 'no';
    }
  }
  // eslint-disable-next-line no-undef
  document.body.appendChild(table);
}
