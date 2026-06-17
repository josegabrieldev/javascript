// Você tem uma lista de palavras. Retorne apenas as palavras que têm mais de 5 letras.

/*
    1 - Lista de Palavras
    2 - Criar uma lista vazia
    3 - Uma função pra resolver esse problema
    4 - Loop que percorre cada palavra
    5 - Usar length pra verificar se a palavra tem mais de 5 letras
    6 - Guarda as palavras com mais de 5 letras na lista vazia
    7 - Mostrar essa lista na tela
    8 - Retornar essa lista
*/

const frutas = ["Manga", "Banana", "Uva", "Melancia", "Cajarana", "Maçã"];
const jogos = [
  "Ben10",
  "Transformers",
  "Free Fire",
  "Tibia",
  "Clash Of Clans",
  "Fifa",
];
const usuarios = [
  "josegabrieldev",
  "biel3",
  "dev22",
  "devjose",
  "jose1",
  "gabrieldev",
];

function filtrarPorTamanho(palavra) {
  const palavrasFiltradas = [];
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i].length > 5) {
      palavrasFiltradas.push(palavra[i]);
    }
  }
  console.log(palavrasFiltradas);
  return palavrasFiltradas;
}

filtrarPorTamanho(usuarios); // frutas, jogos ou usuarios.
filtrarPorTamanho(jogos);
filtrarPorTamanho(frutas);