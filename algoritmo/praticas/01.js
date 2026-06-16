// Você tem uma lista de números. Precisa retornar apenas os números pares dessa lista.
/*
  1 - Uma lista de números
  2 - Um loop que percorre cada número
  3 - Uma verificação com % pra saber se é par
  4 - Uma lista nova pra guardar os pares
  5 - Retornar essa lista
*/

const numeros = [82, 23, 44, 19, 40, 38, 12, 22];
const numerosPares = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    numerosPares.push(numeros[i]);
  }
};
console.log(numerosPares);
return numerosPares;