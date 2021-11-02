const myList = []

let todoList = [
    'mandar email',
    'alimentar o dog',
    'limpar o quarto'
]

console.log(todoList[0]);
console.log(todoList[1]);
console.log(todoList[2]);
console.log(todoList[3]);

console.log(todoList.length);

// add element to end of list 
todoList.push('formatar computador');

console.log(todoList);

// remove the last element of list
todoList.pop()

console.log(todoList);

// remove the first element of list
todoList.shift();

console.log(todoList);

// remove element especific of list
todoList.splice(1, 1)

console.log(todoList);

const itens = [
    1, 'list', 0.5
]

console.log(typeof(itens));
console.log(Array.isArray(itens));

const numbers = [3, 2, 1, 0]
const numbers2 = [4, 5, 6, 7]
const numbers3 = numbers.concat(numbers2)

console.log(numbers3.sort());

console.log(numbers3.join('-'));

const index = numbers3.indexOf(3)

console.log(index);
