// Evento Inversão e Concatenação
const botaoAdicionarFruta = document.querySelector("#adicionar-fruta");
const botaoRemoverPrimeiroItem = document.querySelector("#remover-item");
const botaoInverterOrdem = document.querySelector("#inverter-ordem");
const mostrarListaFrutas = document.querySelector("#mostrar-frutas");
const itemFruta = document.querySelector("#fruta");
const listaFrutas = [];

botaoAdicionarFruta.addEventListener("click", () => {
  const valorFruta = itemFruta.value;
  if (valorFruta.trim() === "") {
    alert(
      "Por Favor! Digite o nome de uma fruta do seu agrado pada poder adicionar"
    );
  } else {
    listaFrutas.push(valorFruta);
    mostrarListaFrutas.innerHTML = `Lista de frutas: ${listaFrutas.join(", ")}`;
    itemFruta.value = "";
    itemFruta.focus();
  }
});

botaoRemoverPrimeiroItem.addEventListener("click", () => {
  if (listaFrutas.length > 0) {
    mostrarListaFrutas.innerHTML = `Lista de frutas antes: ${listaFrutas.join(
      ", "
    )} <br>`;

    listaFrutas.shift();
    mostrarListaFrutas.innerHTML += `Lista de frutas após remoção: ${listaFrutas.join(
      ", "
    )}`;
  } else {
    alert(
      "Não à nenhum item na lista. Adicione ao menos uma fruta e clique novamente para remover o (O primeiro item)"
    );
  }
});

botaoInverterOrdem.addEventListener("click", () => {
  if (listaFrutas.length === 0) {
    alert(
      "Não tem nenhuma fruta na lista, digite algumas frutas a lista e depois inverta ela"
    );
  } else {
    mostrarListaFrutas.innerHTML = `Lista de frutas: ${listaFrutas.join(
      ", "
    )} <br>`;
    listaFrutas.reverse();
    mostrarListaFrutas.innerHTML += `Lista de frutas invertida: ${listaFrutas.join(
      ", "
    )}`;
  }
});

//Evento Encontrando o Índice correspondente

const rankingNomesBrasil = [
  { posicao: 1, nome: "Miguel" },
  { posicao: 2, nome: "Helena" },
  { posicao: 3, nome: "Arthur" },
  { posicao: 4, nome: "Alice" },
  { posicao: 5, nome: "Gael" },
  { posicao: 6, nome: "Laura" },
  { posicao: 7, nome: "Heitor" },
  { posicao: 8, nome: "Maria Alice" },
  { posicao: 9, nome: "Theo" },
  { posicao: 10, nome: "Valentina" },
  { posicao: 11, nome: "Davi" },
  { posicao: 12, nome: "Heloísa" },
  { posicao: 13, nome: "Gabriel" },
  { posicao: 14, nome: "Maria Clara" },
  { posicao: 15, nome: "Bernardo" },
  { posicao: 16, nome: "Sophia" },
  { posicao: 17, nome: "Samuel" },
  { posicao: 18, nome: "Manuela" },
  { posicao: 19, nome: "Pedro" },
  { posicao: 20, nome: "Isabella" },
  { posicao: 21, nome: "Benício" },
  { posicao: 22, nome: "Júlia" },
  { posicao: 23, nome: "Isaac" },
  { posicao: 24, nome: "Luna" },
  { posicao: 25, nome: "Lorenzo" },
  { posicao: 26, nome: "Cecília" },
  { posicao: 27, nome: "Anthony" },
  { posicao: 28, nome: "Giovanna" },
  { posicao: 29, nome: "Benjamin" },
  { posicao: 30, nome: "Isadora" },
  { posicao: 31, nome: "Guilherme" },
  { posicao: 32, nome: "Eloá" },
  { posicao: 33, nome: "João" },
  { posicao: 34, nome: "Liz" },
  { posicao: 35, nome: "Matheus" },
  { posicao: 36, nome: "Mariana" },
  { posicao: 37, nome: "Nicolas" },
  { posicao: 38, nome: "Aurora" },
  { posicao: 39, nome: "Lucas" },
  { posicao: 40, nome: "Lívia" },
  { posicao: 41, nome: "Enzo" },
  { posicao: 42, nome: "Esther" },
  { posicao: 43, nome: "Henrique" },
  { posicao: 44, nome: "Clara" },
  { posicao: 45, nome: "Daniel" },
  { posicao: 46, nome: "Antonella" },
  { posicao: 47, nome: "Eduardo" },
  { posicao: 48, nome: "Sarah" },
  { posicao: 49, nome: "Cauã" },
  { posicao: 50, nome: "Lorena" },
  { posicao: 51, nome: "Leonardo" },
  { posicao: 52, nome: "Beatriz" },
  { posicao: 53, nome: "Vicente" },
  { posicao: 54, nome: "Alícia" },
  { posicao: 55, nome: "Bento" },
  { posicao: 56, nome: "Maitê" },
  { posicao: 57, nome: "Lucca" },
  { posicao: 58, nome: "Catarina" },
  { posicao: 59, nome: "Noah" },
  { posicao: 60, nome: "Rafaela" },
  { posicao: 61, nome: "Otávio" },
  { posicao: 62, nome: "Ana Liz" },
  { posicao: 63, nome: "Calebe" },
  { posicao: 64, nome: "Laís" },
  { posicao: 65, nome: "Felipe" },
  { posicao: 66, nome: "Rebeca" },
  { posicao: 67, nome: "João Miguel" },
  { posicao: 68, nome: "Maria Luísa" },
  { posicao: 69, nome: "Ryan" },
  { posicao: 70, nome: "Yasmin" },
  { posicao: 71, nome: "Caio" },
  { posicao: 72, nome: "Olívia" },
  { posicao: 73, nome: "Augusto" },
  { posicao: 74, nome: "Agatha" },
  { posicao: 75, nome: "João Pedro" },
  { posicao: 76, nome: "Maria Júlia" },
  { posicao: 77, nome: "Bryan" },
  { posicao: 78, nome: "Stella" },
  { posicao: 79, nome: "Pietro" },
  { posicao: 80, nome: "Ana Clara" },
  { posicao: 81, nome: "Isaías" },
  { posicao: 82, nome: "Pietra" },
  { posicao: 83, nome: "Luiz Miguel" },
  { posicao: 84, nome: "Melissa" },
  { posicao: 85, nome: "Vinícius" },
  { posicao: 86, nome: "Ana Laura" },
  { posicao: 87, nome: "Emanuel" },
  { posicao: 88, nome: "Bianca" },
  { posicao: 89, nome: "Rael" },
  { posicao: 90, nome: "Isabelly" },
  { posicao: 91, nome: "Yuri" },
  { posicao: 92, nome: "Maya" },
  { posicao: 93, nome: "Anthony Gabriel" },
  { posicao: 94, nome: "Letícia" },
  { posicao: 95, nome: "Michelle" },
  { posicao: 96, nome: "Jade" },
  { posicao: 97, nome: "Davi Lucca" },
  { posicao: 98, nome: "Milena" },
  { posicao: 99, nome: "Emanuelly" },
  { posicao: 100, nome: "Valéria" },
];

document.getElementById("btn-pesquisar").addEventListener("click", () => {
  const nomeInput = document.getElementById("nome-input");
  const nomeDigitado = nomeInput.value.trim();
  const resultado = document.getElementById("resultado");

  if (!nomeDigitado) {
    resultado.textContent = "Por favor, digite um nome!";
    return;
  }

  const nomeEncontrado = rankingNomesBrasil.find(
    (item) => item.nome.toLowerCase() === nomeDigitado.toLowerCase()
  );

  if (nomeEncontrado) {
    resultado.textContent = `🎉 O nome "${nomeEncontrado.nome}" está na posição "${nomeEncontrado.posicao}" do ranking!`;
  } else {
    resultado.innerHTML = `😕 O nome "${nomeDigitado}" não foi encontrado no ranking. <br>
    Se deseja incluir seu nome na lista fique a vontade para me mandar direct no instagram <br>
    <strong> Instagram @josegabrieldev </strong>`;
  }

  nomeInput.value = "";
  nomeInput.focus();
});
