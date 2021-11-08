const Mathematics = require('./mathematics')
// console.log(Mathematics.sum(10, 20));

const readline = require('readline');
const { stdin, stdout } = require('process');
const terminal = readline.createInterface({
    input: stdin,
    output: stdouts
})

terminal.question('Insira o primeiro valor: \n', value1 => {
    terminal.question('Insira o segundo valor: \n', value2 => {
        terminal.question('Insira a operação: \n', op => {
            const res = Mathematics[op](Number(value1), Number(value2))
            console.log(`A operação ${op} entre ${value1} e ${value2} é: ${res}`)
            terminal.close()
        })
    })
})
