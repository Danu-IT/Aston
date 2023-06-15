// Task 1

// 1,3,6,4,2,5

// Task 2

// 1, 3, 2

// Task 3

// abc

// Task 4

// 1: 123, 2: 123, 3: 321

// Task 5

// 1432

// Task 6

const array = [10, 12, 15, 21];

array.forEach((el, i) => {
  if (el % 2 === 0) {
    setTimeout(() => console.log(el), (i + 1) * 3000);
  }
});

// Task 7
// если блок кода сделать модулем то можно делать ожидание без функций с ключевым словом async
