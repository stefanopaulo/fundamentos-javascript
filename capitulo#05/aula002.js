const textMenu = `
Olá, seja bem vindo ao sistema de media

Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o menu de Guerreiras
Digite 0 para sair
`
const option = 1

switch (option) {
    case 1:
        console.log('Herois');
        break;
    case 2:
        console.log('Guerreiras');
        break;
    case 0:
        console.log('Saindo...');
        break;
    default:
        console.log('Opção inválida');
}
