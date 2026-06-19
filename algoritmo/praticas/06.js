//  Pega o exercício de soma dos números (03.js) e reescreva ele do zero, mas usando o método reduce em vez do loop manual.

/*
    1 - Lista de números
    2 - Variavel pra guarda a soma
    3 - Reduce pra percorrer a lista de números recebendo callback e um valor inicial
    4 - Cada vez que reduce percorrer um item da lista ele soma accumulator (valor acumulado ate o momento) + currentValue (valor analisado na volta especifica)
    5 - Mostrar o resultado da soma na tela
*/

const numerosLista = [15, 89, 23, 45, 76, 143, 4, 9, 1]
const valorInicial = 0;
const somaDosNumeros = numerosLista.reduce((accumulator, currentValue) => accumulator + currentValue, valorInicial);
console.log(somaDosNumeros);