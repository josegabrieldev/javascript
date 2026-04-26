let num1 = 22;
let num2 = 43;

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;
console.log(`Números referentes foram ${num1} e ${num2}: a soma foi ${soma}, subtração igual a ${subtracao}, a multiplicação deu ${multiplicacao} e a divisão deu resultado de ${divisao}.`);

// Dividir um número por zero (0) e mostrar Infinity
let numeroA = 22;
let numeroB = 0;

const divisaoPorZero = numeroA / numeroB;
console.log(divisaoPorZero);

// Tenta converter uma palavra para número e mostra NaN duas maneiras
let palavra = "Gabriel";
let numero = 2003;
const restaldoInvalido = palavra * numero;
console.log(restaldoInvalido);
console.log(Number(palavra));