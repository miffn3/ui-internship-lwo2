/**
 * Person - Class that contains information about person' full name.
 *
 * @param {String} fullName - first name and last name of person.
 */
export function Person(fullName) {
  const name = fullName.split(' ');
  let firstName = name[0];
  let lastName = name[1];
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFullName = function() {
    return firstName + ' ' + lastName;
  };
  this.setFirstName = function(firstNameNew) {
    firstName = firstNameNew;
  };
  this.setLastName = function(lastNameNew) {
    lastName = lastNameNew;
  };
  this.setFullName= function(fullName) {
    const name = fullName.split(' ');
    firstName = name[0];
    lastName = name[1];
  };
}
