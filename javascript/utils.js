// FIRST UTILS LOG
const { log } = console;

log('Hello world!');
// ****************

// querySelector

const select = (selector, scope = document) => {
  return scope.querySelector(selector);
};

// example const title = select("h1");
// ****************

// addEventListener
const listen = (target, event, callback, ...options) => {
  return target.addEventListener(event, callback, ...options);
};

// listen(buttonElem, "click", () => console.log("Clicked!"));
// ****************

// random
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

random(5, 10);
// ****************

// times
const times = (func, n) => {
  Array.from(Array(n)).forEach(() => {
    func();
  });
};

times(() => {
  //randomFunction();
}, 3); // runs 3 times
// ****************

// slugify
const slugify = (string, separator = '-') => {
  return string
    .toString() // Cast to string (optional)
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, separator) // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\_/g, separator) // Replace _ with -
    .replace(/\-\-+/g, separator) // Replace multiple - with single -
    .replace(/\-$/g, ''); // Remove trailing -
};

slugify('Hello, World!');
slugify('Hello, Universe!', '_');
// ****************

// validateEmail
const validateEmail = (email) => {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
};

validateEmail('youremail@org.com'); // true
validateEmail('youremail@com'); // false

// capitalize
const capitalize = (str) => {
  const arr = str.trim().toLowerCase().split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(' ');
};
// ****************

// sanitizeHTML
const sanitizeHTML = (str) => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

sanitizeHTML('<h1>Hello, World!</h1>');
// Expected output: "&lt;h1&gt;Hello, World!&lt;/h1&gt;"
// ****************

// localStorage
const storage = {
  get: (key, defaultValue = null) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
};

// storage.set('motto', 'Eat, Sleep, Code, Repeat');
// storage.get('motto');
// ****************
