/** @constant
    @type {string}
    @default
*/
const helloMessage = `Hello there `;

/** @constant
    @type {string}
    @default
*/
const goodbyeMessage = 'Goodbye ';

/**
 * This is a simple JSDoc example; this function will return
 * a hello message with a full name.
 *
 * @param {string} name - The name
 * @param {string} lastName - The Last name
 * @returns {string}
 */
const helloName = (name, lastName) => `${helloMessage} ${name} ${lastName}`;

/**
 * This is a simple JSDoc example; this function will return
 * a goodbye message with a full name.
 *
 * @param {string} name - The name
 * @param {string} lastName - The Last name
 * @returns {string}
 */
const goodbyeName = (name, lastName) => `${goodbyeMessage} ${name} ${lastName}`;

/**
 * This function will print in the Chrome dev tools a message with awesome colors.
 *
 * @param {string} message - The awesome message
 * @param {string} message2 - The other awesome message
 */
const printMessageWithColors = (message, message2) => {
  console.log(
    `%c Oh my heavens! ${message} ${message2}`,
    'background: #222; color: #bada55'
  );
};

helloName('Jose Jesus', 'Ochoa Torres');
goodbyeName('Jose Jesus', 'Ochoa Torres');
