// Evento Cálculo de Estoque
const inputNome = document.getElementById("input-nome");
const inputPreco = document.getElementById("input-preco");
const inputQuantidade = document.getElementById("input-quantidade");
const btnAdicionarProduto = document.querySelector("#adicionar-produto");

const btnMostrarEstoque = document.querySelector("#mostrar-estoque");
const estoqueProdutos = document.getElementById("estoque-produtos");

const btnCalcularEstoque = document.querySelector("#btn-calcular-estoque");
const resultadoEstoque = document.getElementById("resultado-estoque");

const estoque = [];

btnAdicionarProduto.addEventListener("click", () => {
  const nome = inputNome.value.trim();
  const preco = parseFloat(inputPreco.value.trim().replace(",", "."));
  const quantidade = parseInt(inputQuantidade.value.trim());

  if (
    nome === "" ||
    isNaN(preco) ||
    preco <= 0 ||
    isNaN(quantidade) ||
    quantidade < 0
  ) {
    alert("Insira dados válidos para os campos de nome, preço e quantidade");
    return;
  }

  const novoProduto = {
    nome: nome,
    preco: preco,
    quantidade: quantidade,
  };

  estoque.push(novoProduto);

  inputNome.value = "";
  inputPreco.value = "";
  inputQuantidade.value = "";

  inputNome.focus();
});

btnMostrarEstoque.addEventListener("click", () => {
  if (estoque.length === 0) {
    estoqueProdutos.innerHTML =
      "O estoque de produtos esta vazio no momento, adicione alguns produtos e prossiga";
    return;
  }

  const estoqueNomeQuant = estoque.map((produto) => {
    return `${produto.nome} ${produto.quantidade}`;
  });

  const estoqueFormatado = estoqueNomeQuant.join("<br>");
  estoqueProdutos.innerHTML = `Nome / Quantidade <br> ${estoqueFormatado}`;
});

btnCalcularEstoque.addEventListener("click", () => {
  if (estoque.length === 0) {
    resultadoEstoque.innerHTML =
      "O estoque de produtos esta vazio no momento, adicione alguns produtos e prossiga";
    return;
  }
  const valorTotalEstoque = estoque.reduce((acumulador, produtoAtual) => {
    const valorProduto = produtoAtual.preco * produtoAtual.quantidade;
    return acumulador + valorProduto;
  }, 0);

  const valorFormatado = valorTotalEstoque.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  resultadoEstoque.innerHTML = `💰 O Valor Total do Estoque é: <strong>${valorFormatado}</strong>`;
});

// Evento Pipeline de Operações
const numeros = [];

const inputNumero = document.querySelector("#input-numero");
const adicionarNumero = document.querySelector("#adicionar-numero");
const listaNumeros = document.querySelector("#lista-numeros");

const btnProcessarPipeline = document.querySelector("#btn-processar-pipeline");
const resultadoPipeline = document.querySelector("#resultado-pipeline");

adicionarNumero.addEventListener("click", () => {
  const numero = parseFloat(inputNumero.value.trim().replace(",", "."));
  if (isNaN(numero) || numero < 0) {
    listaNumeros.innerHTML =
      "Nenhum valor válido encontrado, adicione número válido para continuar";
    return;
  }

  numeros.push(numero);
  listaNumeros.innerHTML = `Lista de Números <br> [ ${numeros.join(", ")} ]`;

  inputNumero.value = "";
  inputNumero.focus();
});

btnProcessarPipeline.addEventListener("click", () => {
  if (numeros.length === 0) {
    resultadoPipeline.innerHTML =
      "A lista de Números esta vazia, adicione alguns valores e prossiga";
    return;
  }

  /*
  METODO CORRETO E PROFISSIONAL FAZER TUDO EM UMA LINHA
  const somaTotal = numeros.filter(numPar => numPar % 2 === 0).map(pares => pares *2).reduce((acumulador, dobradoAtual) => acumulador + dobradoAtual, 0);
  */

  // Melhor para estudo e entendimento mostrando passo a passo
  const numerosPares = numeros.filter((numPar) => numPar % 2 === 0);
  const paresDobrados = numerosPares.map((pares) => pares * 2);
  const somaTotal = paresDobrados.reduce(
    (acumulador, dobradoAtual) => acumulador + dobradoAtual,
    0
  );

  resultadoPipeline.innerHTML = `Lista de Números Pares <br> [${numerosPares.join(
    ", "
  )}] <br>
  Lista de Números Pares Dobrados <br> [${paresDobrados.join(", ")}] <br>
  Soma Total dos Números ${somaTotal} !`;
});
