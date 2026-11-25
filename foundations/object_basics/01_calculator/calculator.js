const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((num, items) => num + items, 0);
};

const multiply = function (arr) {
  return arr.reduce((num, items) => num * items);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  let items = 1;
  for (let i = x; i > 0; i--) {
    items *= i;
  }
  return items;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
