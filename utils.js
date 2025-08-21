/**
 * Formats a phone number to (XXX) XXX-XXXX.
 * Removes all non-digit characters before formatting.
 * @param {string} phone
 * @returns {string}
 */
function formatPhoneNumber(phone) {
    const digits = phone.replace(/\D/g, '');
    if (digits.length !== 10) return phone;
    return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
}

/**
 * Checks if the given value is a non-empty string and a valid email.
 * @param {string} email
 * @returns {boolean}
 */
function validateEmail(email) {
    return typeof email === 'string' && email.trim() !== '' && isValidEmail(email);
}