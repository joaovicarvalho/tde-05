// calculadora.js

module.exports = {
    somar: (a, b) => a + b,
    subtrair: (a, b) => a - b,
    dividir: (a, b) => a / b,
    multiplicar: (a, b) => a * b
};



const calculadora = require('./calculadora');

console.log(calculadora.somar(5, 3));        // Saída esperada: 8
console.log(calculadora.subtrair(10, 4));    // Saída esperada: 6
console.log(calculadora.dividir(20, 4));     // Saída esperada: 5
console.log(calculadora.multiplicar(7, 3));  // Saída esperada: 21




const faker = require('@faker-js/faker');

function gerarDadosPessoa() {
    const nome = faker.name.findName();
    const email = faker.internet.email();
    const dataNascimento = faker.date.past().toLocaleDateString();

    return { nome, email, dataNascimento };
}

module.exports = gerarDadosPessoa;

   

const gerarDadosPessoa = require('./dadosPessoa');

const pessoaFalsa = gerarDadosPessoa();
console.log('Dados da pessoa falsa:');
console.log(pessoaFalsa);
