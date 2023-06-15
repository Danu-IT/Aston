// Task 1
// Сортировка пузырьком, Сортировка выбором, Сортировка вставками, Сортировка слиянием, Быстрая сортировка, Блочная сортировка

// Task 2

function logInfo() {
  console.log(this.name);
}

function Person(name) {
  this.name = name;
  this.logInfo = logInfo;
}

let person = {};
person = Object.create({});
person = Object.assign({}, {});
person = new Object({ name: "John", logInfo: logInfo });
person = new Person("john");

const person2 = {};

person2.__proto__ = person;
// console.log(Object.getPrototypeOf(person2));

// Task 3

class PersonThree {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

class PersonFour extends PersonThree {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const friend = new PersonFour("Олег", 13);
// БОНУС
const newLocal = (arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]);
total = 3;

const firstSum = (arr, total) => {
  const info = { countFind: 0, elements: "Not Found" };
  arr.forEach((el, i, arr) => {
    item = total - el;
    if (info.countFind === 0 && arr.includes(item) && el !== item) {
      info.elements = [el, item];
      info.countFind = 1;
    }
  });
  return info.elements;
};

// По идее это сложность которую нужно избегать n^2, так как includes в себе испоьзует цикл
