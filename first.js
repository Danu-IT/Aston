const cloneDeep = require("lodash.clonedeep");
// Task 1

const counter_1_1 = {};
const counter_1_2 = Object.create({});
const counter_1_3 = new Object();
const counter_1_4 = Object.assign({}, {});

class Counter {}
const counter_1_5 = new Counter();

console.log(
  "Task 1 - ",
  counter_1_1,
  counter_1_2,
  counter_1_3,
  counter_1_4,
  counter_1_5
);

// Task 2

const counter_2_1 = { ...counter_1_1 };
const counter_2_2 = Object.assign(counter_1_1, {});
const counter_2_3 = structuredClone(counter_1_3);
const counter_2_4 = Object.create(counter_1_4);
const counter_2_5 = JSON.parse(JSON.stringify(counter_1_4));
const counter_2_6 = cloneDeep(counter_1_4);

console.log(
  "Task 2 - ",
  counter_2_1,
  counter_2_2,
  counter_2_3,
  counter_2_4,
  counter_2_5,
  counter_2_6
);

// Task 3

const makeCounter_3_1 = () => {};
function makeCounter_3_2() {}
const makeCounter_3_3 = function () {};
const makeCounter_3_4 = function makeCounter_3_4() {};

// Task 4

const obj1 = { here: { is: "on", other: "2" }, object: "Y" };

const obj2 = { here: { is: "on", other: "2" }, object: "Y" };

const deepEqual = (obj1, obj2) => {
  if ((typeof obj1 !== "object" || typeof obj2 !== "object") && a !== b) {
    return false;
  }

  const arrayKeysOne = Object.keys(obj1);
  const arrayKeysTwo = Object.keys(obj2);

  const arrayValuesOne = Object.values(obj1);
  const arrayValuesTwo = Object.values(obj2);

  for (let i = 0; i < arrayKeysOne.length; i++) {
    if (arrayKeysOne[i] !== arrayKeysTwo[i]) return false;
    if (
      typeof arrayValuesTwo[i] === "object" &&
      typeof arrayValuesOne[i] === "object"
    ) {
      const returnValue = deepEqual(arrayValuesOne[i], arrayValuesTwo[i]);
      return returnValue ? true : false;
    } else if (
      typeof arrayValuesTwo[i] !== "object" &&
      typeof arrayValuesOne[i] !== "object"
    ) {
      if (arrayValuesTwo[i] !== arrayValuesOne[i]) {
        return false;
      }
    }
  }

  return true;
};

// Task 5

const reverseStr = (str) => str.split("").reverse().join("");
