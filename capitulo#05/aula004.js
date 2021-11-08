const textPar = 'par'
const textImpar = 'impar'
for (let index = 0; index <= 10; index++) {
    const res = index % 2 === 0 ? textPar : textImpar
    console.log(`O número ${index} é: `, res);
}

const todoList = [
    {
        id: parseInt(Math.random() * 10),
        name: 'Flash',
        power: 'Fast'
    },
    {
        id: parseInt(Math.random() * 10),
        name: 'Batman',
        power: 'Money'
    }
]

for (const item of todoList) {
    console.log(item);
}

for (let item in todoList) {
    console.log(todoList[item]);
}
