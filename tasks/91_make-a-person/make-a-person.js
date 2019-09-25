/**
 * Person - Class that contains information about person' full name.
 *
 * @param {String} fullName - first name and last name of person.
 */
export function Person(fullName) {
  let splittedName = fullName.split(' ');

  this.getFirstName = function() {
    return splittedName[0];
  };

  this.getLastName = function() {
    return splittedName[1];
  };

  this.getFullName = function() {
    return splittedName[0] + ' ' + splittedName[1];
  };

  this.setFirstName = function(firstNameNew) {
    splittedName[0] = firstNameNew;
  };

  this.setLastName = function(lastNameNew) {
    splittedName[1] = lastNameNew;
  };

  this.setFullName = function(fullName) {
    let name = fullName.split(' ');
    splittedName[0] = name[0];
    splittedName[1] = name[1];
  };
}
