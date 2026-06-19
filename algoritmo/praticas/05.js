/*
Function declaration
function somar(a, b) {
    return a + b;
}

Function expression
const somar = function(a, b) {
    return a + b;
}

Arrow function
const somar = (a, b) => a + b;
*/

// Reescreva a função maiorNumeroDaLista das três formas. Sem mudar a lógica — só a sintaxe. 04.js

const listaAnos = [1982, 2003, 1985, 2005, 2013];
const listaIdades = [15, 45, 52, 23, 20, 18, 10, 75];
const listaNumerosQuebrados = [1.4, 6.7, 8.5, 9.3, 1.2, 3.8, 9.4];

// Function declaration
function maiorNumeroDaLista(lista){
    let maiorNumero = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maiorNumero) {
            maiorNumero = lista[i];
        }
    }

    console.log(`Function declaration: Resultado => ${maiorNumero}`)
    return maiorNumero;
};

// Function expression
const maiorNumeroDaLista2 = function(lista) {
    let maiorNumero = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maiorNumero) {
            maiorNumero = lista[i];
        }
    }

    console.log(`Function expression: Resultado => ${maiorNumero}`);
    return maiorNumero;
}

// Arrow function
const maiorNumeroDaLista3 = (lista) => {
    let maiorNumero = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maiorNumero) {
            maiorNumero = lista[i];
        }
    }

    console.log(`arrow function: Resultado => ${maiorNumero}`)
    return maiorNumero;
}

maiorNumeroDaLista(listaAnos);
maiorNumeroDaLista2(listaIdades);
maiorNumeroDaLista3(listaNumerosQuebrados);


const resultado = maiorNumeroDaLista(listaAnos);
console.log(resultado)

function dobrarNumero(numero) {
    const numeroDobrado = numero * 2;
    console.log(`Número ${numero} foi dobrado pra ${numeroDobrado}`);
    return numeroDobrado;
}

dobrarNumero(maiorNumeroDaLista(listaAnos));

const numeros = [72, 33, 12, 9, 7, 98, 127, 29, 23, 20, 14];

function filtrar(lista, criterio) {
    const res = []
    for (let i = 0; i < lista.length; i++) {
        if (criterio(lista[i])) {
            res.push(lista[i])
        }
    }
    return res;
}

function ePar(numero) {
    return numero % 2 === 0;
}

function eImpar(numero) {
    return numero % 2 === 1;
}

console.log(`Lista de números "Pares": ${filtrar(numeros, ePar)}`);
console.log(`Lista de números "Impar": ${filtrar(numeros, eImpar)}`);