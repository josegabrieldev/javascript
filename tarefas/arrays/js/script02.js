// Evento Mapeamento de Preços
const botaoAumentarPreco = document.getElementById("botao-aumentar");
const listaPrecosAumentados = document.getElementById(
  "lista-precos-aumentados"
);
const produtos = [
  { id: 101, nome: "Notebook Pro", preco: 5200, categoria: "Eletrônicos" },
  { id: 102, nome: "Mouse Óptico", preco: 85, categoria: "Acessórios" },
  { id: 103, nome: "Teclado Mecânico", preco: 450, categoria: "Acessórios" },
  { id: 104, nome: "Monitor 27' UHD", preco: 1800, categoria: "Eletrônicos" },
  { id: 105, nome: "Mouse Pad XL", preco: 60, categoria: "Acessórios" },
  { id: 106, nome: "HD Externo 1TB", preco: 350, categoria: "Armazenamento" },
  { id: 107, nome: "Smartphone X", preco: 3200, categoria: "Eletrônicos" },
  { id: 108, nome: "Fone Bluetooth", preco: 250, categoria: "Acessórios" },
  { id: 109, nome: "Webcam Full HD", preco: 180, categoria: "Acessórios" },
  { id: 110, nome: "Impressora Laser", preco: 900, categoria: "Periféricos" },
];

botaoAumentarPreco.addEventListener("click", () => {
  const novosPrecos = produtos.map((produto) => {
    const novopreco = produto.preco * 1.1;
    return { nome: produto.nome, preco: novopreco.toFixed(2) };
  });
  const listaFormatada = novosPrecos.map((produtoAumentado) => {
    return `✅ ${produtoAumentado.nome}: R$ ${produtoAumentado.preco}`;
  });

  const nomePrecoFinal = listaFormatada.join("<br>");
  listaPrecosAumentados.innerHTML = `Lista dos Produtos com Aumento de 10% <br> ${nomePrecoFinal}`;
});

// Evento Filtrando Produtos Caros
const botaoFiltrarCaros = document.querySelector("#filtrar-caros");
const listaProdutosFiltrados = document.querySelector(
  "#lista-produtos-filtrados"
);

botaoFiltrarCaros.addEventListener("click", () => {
  const produtosCaros = produtos.filter((produto) => {
    return produto.preco > 400;
  });

  const listaProdutosCaros = produtosCaros.map((itemCaro) => {
    return `✅ ${itemCaro.nome}: R$ ${itemCaro.preco}`;
  });

  const listaFinalItensCaros = listaProdutosCaros.join("<br>");
  listaProdutosFiltrados.innerHTML = `Lista dos Produtos mais Caros acima de R$: 400,00! <br> ${listaFinalItensCaros}`;
});

// Evento Busca de Objeto Único
const inputBuscaProduto = document.querySelector("#input-busca-produto");
const botaoBuscarProduto = document.querySelector("#botao-buscar-produto");
const resultadoBuscaProduto = document.querySelector(
  "#resultado-busca-produto"
);
const mostrarNomesProdutos = document.getElementById("base-produtos");
const listaNomesProdutos = document.getElementById("lista-produtos");

botaoBuscarProduto.addEventListener("click", () => {
  const buscaProduto = inputBuscaProduto.value.toLowerCase().trim();
  const produtoEncontrado = produtos.find((produto) => {
    return produto.nome.toLowerCase() === buscaProduto;
  });

  if (produtoEncontrado) {
    const detalhes = `✅ Encontrado! Nome: ${
      produtoEncontrado.nome
    } Preço R$: ${produtoEncontrado.preco.toFixed(2)} Categoria: ${
      produtoEncontrado.categoria
    } Id: ${produtoEncontrado.id}`;
    resultadoBuscaProduto.innerHTML = detalhes;
  } else {
    const mensagemErro = `🚫 Falha na busca.
        O produto com o nome '${buscaProduto}' não foi encontrado na nossa base.`;
    resultadoBuscaProduto.innerHTML = mensagemErro;
  }

  inputBuscaProduto.value = "";
  inputBuscaProduto.focus();
});

mostrarNomesProdutos.addEventListener("click", () => {
  const nomesProdutos = produtos.map((produto) => produto.nome);
  const listaNomes = nomesProdutos.join("<br> - ");
  listaNomesProdutos.innerHTML = `Lista de Nomes dos Produtos: <br> - ${listaNomes}`;
});
