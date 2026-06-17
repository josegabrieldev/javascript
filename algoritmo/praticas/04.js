// Você tem uma lista de números. Retorne o maior número da lista.

/*
    1 - Lista de números
    2 - Função reutilizavel pra verificar a lista
    3 - variavel pra guarda o maior número
    4 - loop pra percorrer a lista de números
    4 - comparar número da lista com maior número atual
    5 - adicionar na variavel de maior número
    6 - mostrar qual o maior número
    7 - retornar o maior número
*/

const listaNumeros = [62, 46, 11, 23, 19, 89, 125, 71, 98];
const listaNumerosNegativos = [-5, -12, -3, -8, -1];
const listaIdades = [15, 45, 52, 23, 20, 18, 10, 75];
const listaAnos = [1982, 2003, 1985, 2005, 2013];
const listaNumerosQuebrados = [1.4, 6.7, 8.5, 9.3, 1.2, 3.8, 9.4];

function maiorNumeroDaLista(numeros) {
  let maiorNumero = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }
  }

  console.log(`O maior número da lista foi ${maiorNumero}`)
  return maiorNumero;
}

maiorNumeroDaLista(listaAnos);
maiorNumeroDaLista(listaIdades);
maiorNumeroDaLista(listaNumerosNegativos);
maiorNumeroDaLista(listaNumerosQuebrados);
maiorNumeroDaLista(listaNumeros);