/**
 * telephoneCheck - Checks that provided phone number
 * is correct US phone number.
 *
 * @example
 * //return true
 * telephoneCheck(1 555-555-5555);
 * @param {String} telephoneNumber - phone number to check.
 * @return {Boolean}
 */
export function telephoneCheck(telephoneNumber) {
  const regexUSPhoneNumber =
    /^[15]?[\s-]?(\([0-9]{3}\)|[0-9]{3})([-\s]?)([0-9]{3})([-\s]?)([0-9]{4})$/;
  return Boolean(telephoneNumber.match(regexUSPhoneNumber));
}
