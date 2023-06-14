// Task 1
// Массивы в JS считаются неправильными потому что по канону, например в JAVA,
// массивам при инициализации кроме значений задается еще и длина которая изменяется динамически в JS, что считается неправильным.
// Также массивы в JS совмещают в себе функции сразу нескольких структур данных(стек и очередь), что тоже считается неправильным.

// Task 2
function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };
const obj2 = { item: "some value2" };
const obj3 = { item: "some value3" };

logger.call(obj);
logger.apply(obj2);
logger.apply(obj3);

// Task 3
