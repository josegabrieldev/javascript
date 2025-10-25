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
const nomes = [
  "Miguel",
  "Helena",
  "Arthur",
  "Alice",
  "Gael",
  "Laura",
  "Heitor",
  "Maria Alice",
  "Theo",
  "Valentina",
  "Davi",
  "Heloísa",
  "Gabriel",
  "Maria Clara",
  "Bernardo",
  "Sophia",
  "Samuel",
  "Manuela",
  "Pedro",
  "Isabella",
  "Benício",
  "Júlia",
  "Isaac",
  "Luna",
  "Lorenzo",
  "Cecília",
  "Anthony",
  "Giovanna",
  "Benjamin",
  "Isadora",
  "Guilherme",
  "Eloá",
  "João",
  "Liz",
  "Matheus",
  "Mariana",
  "Nicolas",
  "Aurora",
  "Lucas",
  "Lívia",
  "Enzo",
  "Esther",
  "Henrique",
  "Clara",
  "Daniel",
  "Antonella",
  "Eduardo",
  "Sarah",
  "Cauã",
  "Lorena",
  "Leonardo",
  "Beatriz",
  "Vicente",
  "Alícia",
  "Bento",
  "Maitê",
  "Lucca",
  "Catarina",
  "Noah",
  "Rafaela",
  "Otávio",
  "Ana Liz",
  "Calebe",
  "Laís",
  "Felipe",
  "Rebeca",
  "João Miguel",
  "Maria Luísa",
  "Ryan",
  "Yasmin",
  "Caio",
  "Olívia",
  "Augusto",
  "Agatha",
  "João Pedro",
  "Maria Júlia",
  "Bryan",
  "Stella",
  "Pietro",
  "Ana Clara",
  "Isaías",
  "Pietra",
  "Luiz Miguel",
  "Melissa",
  "Vinícius",
  "Ana Laura",
  "Emanuel",
  "Bianca",
  "Rael",
  "Isabelly",
  "Yuri",
  "Maya",
  "Anthony Gabriel",
  "Letícia",
  "Michelle",
  "Jade",
  "Davi Lucca",
  "Milena",
  "Emanuelly",
  "Valéria",
  "André",
  "Camila",
  "Carlos",
  "Fernanda",
  "Rafael",
  "Patrícia",
  "Diego",
  "Juliana",
  "Rodrigo",
  "Aline",
  "Marcelo",
  "Tatiane",
  "Bruno",
  "Vanessa",
  "Renato",
  "Carla",
  "Fábio",
  "Simone",
  "Alex",
  "Cristiane",
  "Roberto",
  "Adriana",
  "Luciano",
  "Daniela",
  "Eduarda",
  "Sérgio",
  "Paula",
  "Maurício",
  "Verônica",
  "Jorge",
  "Natália",
  "Paulo",
  "Andreia",
  "Vitor",
  "Elaine",
  "Thiago",
  "Sandra",
  "Igor",
  "Michele",
  "Leandro",
  "Rute",
  "Alexandre",
  "Débora",
  "Francisco",
  "Tainá",
  "Edson",
  "Bruna",
  "Ivan",
  "Lorraine",
  "Rogério",
  "Tatiana",
  "Cristiano",
  "Luana",
  "Wallace",
  "Jéssica",
  "Murilo",
  "Tamires",
  "Caetano",
  "Nathalia",
  "Joaquim",
  "Talita",
  "Renan",
  "Sabrina",
  "Alan",
  "Gisele",
  "Jonas",
  "Kelly",
  "Danilo",
  "Priscila",
  "Ronaldo",
  "Luan",
  "Fabiana",
  "José",
  "Mônica",
  "Antônio",
  "Rayssa",
  "Marcos",
  "Thais",
  "Joana",
  "Isaque",
  "Silvia",
  "Mateus",
  "Lorena",
  "Otto",
  "Marina",
  "Ruan",
  "Tereza",
  "Cristina",
  "Elisa",
  "João Vitor",
  "Nicole",
  "Matheus Henrique",
  "Luiz Felipe",
  "Ana Beatriz",
  "Enzo Gabriel",
  "Maria Eduarda",
  "Lucas Gabriel",
  "Maria Fernanda",
  "Pedro Henrique",
  "Maria Vitória",
  "João Guilherme",
  "Maria Cecília",
  "Henrique Miguel",
  "Maria Helena",
  "Luiz Gustavo",
  "Maria Antônia",
  "João Lucas",
  "Maria Isabel",
  "João Gabriel",
  "Maria Rita",
];
const resultado = document.getElementById("resultado");
const inputNome = document.getElementById("nome-busca");

document.querySelector("#botao-pesquisar").addEventListener("click", () => {
  const nomeBusca = inputNome.value;
  const indiceEncontrado = nomes.indexOf(nomeBusca);

  if (indiceEncontrado >= 0) {
    resultado.innerHTML = `O nome ${nomeBusca} foi encontrado com sucesso no índice: ${indiceEncontrado}!`;
  } else {
    resultado.innerHTML = `O nome ${nomeBusca} não foi encontrado!`;
  }
});

// Evento de Verificação de Existência
const inputItem = document.querySelector("#item-lista");
const inputBusca = document.querySelector("#item-busca");

const botaoAdicionarItem = document.getElementById("adicionar-item");
const botaoProcurarItem = document.getElementById("procurar-item");
const botaoMostrarLista = document.getElementById("mostrar-lista");
const botaoLimparLista = document.getElementById("limpar-lista");

const mostrarLista = document.querySelector("#res-lista");
const listaCompras = [];

botaoAdicionarItem.addEventListener("click", () => {
  const itemLista = inputItem.value;

  if (itemLista.trim() === "") {
    alert("Digite um item de lista valido para suas compras!");
  } else {
    listaCompras.push(itemLista);
    inputItem.value = "";
    inputItem.focus();
  }
});

botaoProcurarItem.addEventListener("click", () => {
  if (listaCompras.length == 0) {
    alert(
      "Antes de procurar um item na sua lista, adicione um ou mais itens a ela"
    );
  } else {
    const buscaItem = inputBusca.value.toLowerCase().trim();
    const listaMinuscula = listaCompras.map((item) => item.toLowerCase());
    const pesquisandoItem = listaMinuscula.includes(buscaItem);

    const mensagemResultado = pesquisandoItem
      ? `O item ${buscaItem} já consta na lista`
      : `O item ${buscaItem} não consta na lista`;
    mostrarLista.textContent = mensagemResultado;
  }
});

botaoMostrarLista.addEventListener("click", () => {
  if (listaCompras.length == 0) {
    mostrarLista.textContent =
      "A lista está vazia. Adicione no minímo um item!";
  } else {
    mostrarLista.innerHTML = `Minha lista de compras: <br> ${listaCompras.join(
      ", "
    )}`;
  }
});

botaoLimparLista.addEventListener("click", () => {
  if (listaCompras.length == 0) {
    mostrarLista.textContent =
      "Não há nada na lista para ser limpa. Por favor adicione algo antes de limpar!";
  } else {
    listaCompras.length = 0;
    mostrarLista.textContent = "A lista foi limpa!";
  }
});

// Evento Conversão de String e Formatação
const inputCSV = document.querySelector("#input-csv");
const botaoProcessar = document.querySelector("#botao-processar");
const resultadoString = document.querySelector("#resultado-string");

botaoProcessar.addEventListener("click", () => {
  if (inputCSV.value.trim() === "") {
    alert("Digite itens na lista para poder processar e formatar");
  } else {
    const textoUsuario = inputCSV.value;
    const listaUsuario = textoUsuario.split(",");
    const listaLimpa = listaUsuario.map((item) => item.trim().toLowerCase());
    const stringFinal = listaLimpa.join("-");

    resultadoString.innerHTML = stringFinal;
  }
});
