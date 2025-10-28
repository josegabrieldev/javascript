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

// Evento Multiplicação e Transformação
const numeros = [];
const inputNumberArray = document.querySelector("#array-numeros");
const botaoAdicionarNumeros = document.querySelector("#adicionar-numero");
const mostrarArrayOriginal = document.querySelector("#array-original");

const inputMultiplicador = document.querySelector("#multiplicador");
const botaoMultiplicarArray = document.querySelector("#multiplicar-array");
const mostrarArrayMultiplicado = document.querySelector("#array-multiplicado");

botaoAdicionarNumeros.addEventListener("click", () => {
  const numberValor = inputNumberArray.value.trim();

  if (numberValor === "") {
    mostrarArrayOriginal.innerHTML =
      "ERRO! Digite um valor valido para prosseguir";
  } else {
    numeros.push(numberValor);
  }

  inputNumberArray.value = "";
  inputNumberArray.focus();
});

botaoMultiplicarArray.addEventListener("click", () => {
  const multiplicador = inputMultiplicador.value.trim();

  if (multiplicador === "" || numeros === "") {
    mostrarArrayMultiplicado.innerHTML = `Multiplicador Vazio, Digite um Multiplicador Valido`;
  } else {
    const arrayMultiplicado = numeros.map((numero) => numero * multiplicador);
    const arrayMultiplicadoFormatado = arrayMultiplicado.join(", ");
    mostrarArrayMultiplicado.innerHTML = `Lista Original: <br> ${numeros.join(
      ", "
    )} <br> Lista de Números Multiplicados: ${arrayMultiplicadoFormatado}`;
  }

  inputMultiplicador.value = "";
  inputMultiplicador.focus();
});

// Evento Verificação de Voto
const usuarios = [];

const inputNome = document.querySelector("#input-nome");
const inputIdade = document.querySelector("#input-idade");
const botaoAdicionarEleitor = document.querySelector(
  "#botao-adicionar-usuario"
);

const resultadoVotacao = document.querySelector("#resultado-votacao");

const btnNaoVota = document.querySelector("#btn-nao-vota");
const btnVotoOpcional = document.querySelector("#btn-voto-opcional");
const btnVotoObrigatorio = document.querySelector("#btn-voto-obrigatorio");
const btnExibirCompleto = document.querySelector("#btn-exibir-completo");
const btnLimparUsuarios = document.querySelector("#btn-limpar-usuarios");

botaoAdicionarEleitor.addEventListener("click", () => {
  const nome = inputNome.value.trim();
  const idade = parseInt(inputIdade.value.trim());

  if (nome === "" || isNaN(idade) || idade <= 0) {
    alert("Por Favor, Insira um nome e uma idade válidos!");
    return;
  }

  const novoUsuario = { nome: nome, idade: idade };

  usuarios.push(novoUsuario);

  inputNome.value = "";
  inputIdade.value = "";
  inputNome.focus();

  resultadoVotacao.innerHTML = `✅ ${nome} (${idade} anos) adicionado! Total de eleitores: ${usuarios.length}`;
});

btnNaoVota.addEventListener("click", () => {
  const naoVotam = usuarios.filter((user) => user.idade < 16);
  exibirResultados(
    naoVotam,
    "Eleitores que NÃO TÊM DIREITO ou OBRIGAÇÃO de VOTO"
  );
});

btnVotoOpcional.addEventListener("click", () => {
  const votoOpcional = usuarios.filter((user) => {
    return (user.idade >= 16 && user.idade <= 17) || (user.idade >= 70);
  });
  exibirResultados(votoOpcional, "Eleitores com VOTO OPCIONAL");
});

btnVotoObrigatorio.addEventListener("click", () => {
  const votoObrigatorio = usuarios.filter((user) => {
    return user.idade >= 18 && user.idade < 70;
  });
  exibirResultados(votoObrigatorio, "Eleitores com VOTO OBRIGATÓRIO");
});

btnExibirCompleto.addEventListener("click", () => {
  exibirResultados(usuarios, "Lista Completa de Eleitores");
});

btnLimparUsuarios.addEventListener("click", () => {
  usuarios.length = 0;
  resultadoVotacao.innerHTML = `
        <h3 style="color: var(--cor-perigo);">
            Lista de Eleitores Limpa!
        </h3>
        <p>O sistema foi resetado, adicione novos eleitores.</p>
    `;

  inputNome.value = "";
  inputIdade.value = "";
});
function exibirResultados(arrayFiltrado, tituloMensagem) {
  if (arrayFiltrado.length === 0) {
    resultadoVotacao.innerHTML = `<h3>${tituloMensagem}</h3><p>Nenhum eleitor encontrado nesta categoria.</p>`;
    return;
  }

  const listaNomesIdades = arrayFiltrado.map((user) => {
    return `👤 ${user.nome} (${user.idade} anos)`;
  });

  const listaFormatada = listaNomesIdades.join("<br>");

  resultadoVotacao.innerHTML = `<h3>${tituloMensagem} (${arrayFiltrado.length} Eleitores)</h3><p>${listaFormatada}</p>`;
}
