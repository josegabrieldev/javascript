// Você tem uma lista de números. Retorne a soma de todos os números da lista.

/*
    1 - Lista de números
    2 - Variavel pra guarda a soma dos números let porque o valor vai mudar
    3 - Loop pra percorrer a lista
    4 - soma o numero atual da lista com o numero da variavel soma
    5 - mostrar a soma de todos os números da lista
    6 - retorna a soma
*/

const listaNumeros = [1, 5, 6, 15, 20, 3, 5, 13, 82, 85, 12, 20, 22, 40, 44, 0];
let somaDosNumeros = 0;

for (let i = 0; i < listaNumeros.length; i++) {
    somaDosNumeros += listaNumeros[i]
}


console.log(somaDosNumeros);
return somaDosNumeros;