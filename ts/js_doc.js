// JavaScript JSDoc
/** @type {string} */
const name = 'John Doe';

/** @type {number} */
const age = 25;

/** @type {number} */
const average = 3.14;

/** @type {boolean} */
const isActive = true;

/** @type {number | null} */
let nullable = null;
nullable = 5;

/** @type {string | undefined} */
let unassigned;
unassigned = 'John Doe';

// Using JSDoc
/** @type {number[]} */
const numbers = [1, 2, 3, 4];

// Using JSDoc
/** @type {[number, number]} */
const coordinates = [40.7128, -74.006];

// Using JSDoc
/** @type {{ name: string; age: number }} */
const user = { name: 'John Doe', age: 25 };

/** @type {User} */
const user_ = { name: 'John Doe', age: 25 };

// Using @property tag
/**
 * @typedef {Object} User
 * @property {string} name The user's full name.
 * @property {number} age The user's age in days. We use days
 *  instead of years to avoid dealing with leap years.
 */
/** @type {User} */
const user_2 = { name: 'John Doe', age: 25 };
// Using inline type definition
/** @typedef {{ name: string; age: number }} User */
const user_3 = { name: 'John Doe', age: 25 };

// Using @property tag
/**
 * @typedef {Object} User
 * @property {string} name The user's full name.
 * @property {number} [age] The user's age.
 */

// enums
/** @enum {string} */
const Color = {
  Red: 'red',
  Green: 'green',
  Blue: 'blue',
  Age: 42, // Error: Type 'number' is not assignable to type 'string'
};

/** @type {Color} */
const color = Color.Red;

// unions
/** @typedef {string | number} StringOrNumber */
/** @type {StringOrNumber} */
let value = 'Hello'; // Can be a string
value = 42; // Or a number

// Using JSDoc
/** @typedef {number} Age */
/** @typedef {string} Name */
/** @typedef {{ name: Name; age: Age }} User */

/** @type {User} */
const user_4 = { name: 'John Doe', age: 25 };

// In JSDoc
/** @typedef {'red' | 'blue' | 'green'} Color_ */
/** @type {Color} */
const color3 = 'red'; // Allowed
color3 = 'yellow'; // Error: Type '"yellow"' is not assignable to type 'Color'

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @example
 * ### Example usage
 * You can use this **function** _like_ ~this~:
 * ``js
 * add(1, 2) // 3
 * ``
 */
function add(a, b) {
  return a + b;
}

/**
 * @summary Adds two numbers together.
 * @description This function adds two numbers together and returns the result.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
