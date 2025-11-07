// Descontos por Fidelidade
const selectStatus = document.querySelector("#select-status");
const inputValorCompra = document.querySelector("#input-valor-compra");
const btnCalcularDesconto = document.querySelector("#btn-calcular-desconto");
const resultadoDesconto = document.querySelector("#resultado-desconto");

btnCalcularDesconto.addEventListener("click", () => {
  const status = selectStatus.value;
  const valorCompra = parseFloat(
    inputValorCompra.value.trim().replace(",", ".")
  );

  let percentualDesconto = 0;
  let valorFinal = 0;

  if (isNaN(valorCompra) || valorCompra <= 0) {
    resultadoDesconto.innerHTML = `<p style="color: var(--cor-perigo);">⚠️ Insira um valor de compra válido.</p>`;
    return;
  }

  if (status === "BASICO") {
    if (valorCompra < 100) {
      percentualDesconto = 0.0;
    } else if (valorCompra >= 100) {
      percentualDesconto = 0.05;
    }
  } else if (status === "VIP") {
    if (valorCompra < 100) {
      percentualDesconto = 0.05;
    } else if (valorCompra >= 100 && valorCompra < 500) {
      percentualDesconto = 0.1;
    } else if (valorCompra > 500) {
      percentualDesconto = 0.15;
    }
  } else if (status === "PREMIUM") {
    if (valorCompra < 100) {
      percentualDesconto = 0.1;
    } else if (valorCompra >= 100 && valorCompra < 500) {
      percentualDesconto = 0.2;
    } else if (valorCompra > 500) {
      percentualDesconto = 0.28;
    }
  }

  const valorDesconto = valorCompra * percentualDesconto;
  valorFinal = valorCompra - valorDesconto;

  const valorCompraFormatado = valorCompra.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const valorDescontoFormatado = valorDesconto.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const valorFinalFormatado = valorFinal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const percentualFormatado = (percentualDesconto * 100).toFixed(0);

  resultadoDesconto.innerHTML = `
        <h3>🏷️ Resultado do Desconto (${status})</h3>
        <p>Valor Original: ${valorCompraFormatado}</p>
        <p>Desconto Aplicado: <strong>${percentualFormatado}%</strong> (${valorDescontoFormatado})</p>
        <p>Valor Final: <strong>${valorFinalFormatado}</strong></p>
        `;
});

// Semáfaro de Pagamento
const inputStatus = document.querySelector("#status");
const btnVerificarStatus = document.querySelector("#verificar-status");
const resultadoStatus = document.querySelector("#resultado-status");

btnVerificarStatus.addEventListener("click", () => {
  const status = parseInt(inputStatus.value.trim());
  let mensagem;
  let classeStatus;

  if (isNaN(status)) {
    resultadoStatus.innerHTML = `<p class="status-bloqueio">🚫 Insira um número válido de dias de atraso.</p>`;
    return;
  }

  if (status <= 0) {
    classeStatus = "status-ok";
    mensagem = "<h3>Pagamento em Dia!</h3>";
    mensagem +=
      "<p>Seu pagamento está <strong>em dia</strong>. Mantenha o bom trabalho!</p>";
  } else if (status <= 5) {
    classeStatus = "status-aviso";
    mensagem = "<h3>Aviso de Pequeno Atraso</h3>";
    mensagem +=
      "<p>Há um pequeno atraso. Uma <strong>multa leve de R$5,00</strong> foi aplicada.</p>";
  } else if (status <= 15) {
    classeStatus = "status-alerta";
    mensagem = "<h3>Alerta de Atraso Grave</h3>";
    mensagem +=
      "<p>O atraso é significativo. Aplicaremos <strong>juros diários</strong> e o serviço pode ser limitado.</p>";
  } else {
    classeStatus = "status-bloqueio";
    mensagem = "<h3>Bloqueio Imediato</h3>";
    mensagem +=
      "<p>O serviço foi <strong>SUSPENSO</strong>. Entre em contato com a cobrança legal.</p>";
  }

  resultadoStatus.className = `resultado-grande ${classeStatus}`;
  resultadoStatus.innerHTML = mensagem;
  inputStatus.value = "";
  inputStatus.focus();
});

// Classificação de Dia da Semana
const inputDiaSemana = document.querySelector("#dia-semana");
const saida = "Domingo";
const btnDiaSemana = document.querySelector("#btn-dia-semana");
const resultadoDiaSemana = document.querySelector("#resultado-dia-semana");

btnDiaSemana.addEventListener("click", () => {
  const diaSemana = parseInt(inputDiaSemana.value.trim());
  let saida;
  let classificacao;
  let classeStatus = "status-ok";

  if (isNaN(diaSemana) || diaSemana < 1 || diaSemana > 7) {
    saida = "Erro";
    classificacao = "Por Favor, insira um número válido de 1 a 7.";
    classeStatus = "status-bloqueio";
  } else {
    switch (diaSemana) {
      case 1:
        saida = "Domingo";
        classificacao = "Fim de Semana";
        classeStatus = "status-aviso";
        break;
      case 2:
        saida = "Segunda Feira";
        classificacao = "Dia Útil";
        break;
      case 3:
        saida = "Terça Feira";
        classificacao = "Dia Útil";
        break;
      case 4:
        saida = "Quarta Feira";
        classificacao = "Dia Útil";
        break;
      case 5:
        saida = "Quinta Feira";
        classificacao = "Dia Útil";
        break;
      case 6:
        saida = "Sexta Feira";
        classificacao = "Dia Útil";
        break;
      case 7:
        saida = "Sábado";
        classificacao = "Fim de Semana";
        classeStatus = "status-aviso";
        break;
    }
  }
  resultadoDiaSemana.className = `resultado-grande ${classeStatus}`;
  resultadoDiaSemana.innerHTML = `<h3>Resultado: ${saida}</h3><p>Classificação: <strong>${classificacao}</strong></p>`;

  inputDiaSemana.value = "";
  inputDiaSemana.focus();
});

// Simulação de Caixa Eletrônico Simples
const inputValorSaque = document.querySelector("#valor-saque");
const btnFazerSaque = document.querySelector("#btn-fazer-saque");
const resultadoSaque = document.querySelector("#resultado-saque");
let saldoAtual = 1000000;

btnFazerSaque.addEventListener("click", () => {
  const valorSaque = parseInt(inputValorSaque.value.trim());

  if (isNaN(valorSaque) || valorSaque === "") {
    resultadoSaque.innerHTML = `<h3>Erro</h3> <p>Valor do saque solicitado inválido! Tente outro valor</p>`;
    return;
  }

  if (valorSaque <= saldoAtual && valorSaque % 10 == 0) {
    const saqueFeito = saldoAtual - valorSaque;
    const saldoPosSaque = saldoAtual - valorSaque;
    resultadoSaque.innerHTML = `<h3>Saque realizado com Sucesso</h3> <p>Saldo disponivel: ${saldoAtual.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    )} reais. <br> 
    Saldo Socilitado: ${valorSaque.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })} reais <br>
    Saldo pós Saque: ${saldoPosSaque.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })} reais</p>`;
  } else if (valorSaque > saldoAtual) {
    resultadoSaque.innerHTML = `O valor ${valorSaque.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })} solicitado é maior que o valor que possui disponivel no caixa atualmente`;
  } else {
    resultadoSaque.innerHTML = `O valor solicitado precisa ser múltiplo de 10 para efetuar o saque <br> O valor ${valorSaque.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    )} reais não é múltiplo de 10`;
  }

  inputValorSaque.value = "";
  inputValorSaque.focus();
});

// Lógica de Categorização de Produtos
const inputCodigoProduto = document.querySelector("#input-codigo-produto");
const btnClassificarProduto = document.querySelector(
  "#btn-classificar-produto"
);
const resultadoProduto = document.querySelector("#resultado-produto");

btnClassificarProduto.addEventListener("click", () => {
  const codigoProduto = inputCodigoProduto.value.trim().toUpperCase();
  let nomeCategoria = "Código Inválido";
  let classeStatus = "Aguardando Classificação";
  let descricao = "status-erro";
  switch (codigoProduto) {
    case "A":
    case "B":
    case "C":
      nomeCategoria = "Alimentos Essenciais";
      descricao = "Gêneros básicos e perecíveis";
      classeStatus = "categoria-alimentos";
      break;

    case "D":
    case "E":
      nomeCategoria = "Eletrônicos";
      descricao = "Dispositivos e acessórios tecnólogicos";
      classeStatus = "categoria-eletronicos";
      break;

    case "F":
    case "G":
      nomeCategoria = "Ferramentas e Jardinagem";
      descricao = "Materiais para contrução e manutenção";
      classeStatus = "categoria-ferramentas";
      break;

    case "H":
    case "I":
    case "J":
      nomeCategoria = "Higiene e Beleza";
      descricao = "Produtos de cuidado pessoal";
      classeStatus = "categoria-higiene";
      break;

    case "K":
    case "L":
      nomeCategoria = "Livros e Mídia";
      descricao = "Mídia física e digital, periódicos";
      classeStatus = "categoria-midia";
      break;

    case "M":
    case "N":
      nomeCategoria = "Mobiliário e Decoração";
      descricao = "Itens para casa e escritório";
      classeStatus = "categoria-mobiliario";
      break;

    case "O":
    case "P":
    case "Q":
      nomeCategoria = "Outros/Miscelânea";
      descricao = "Produtos diversos, sem classificação clara";
      classeStatus = "categoria-outros";
      break;

    case "R":
    case "S":
      nomeCategoria = "Roupas e Calçados";
      descricao = "Vestuário e acessórios de moda";
      classeStatus = "categoria-roupas";
      break;

    case "T":
    case "U":
    case "V":
      nomeCategoria = "Transporte e Peças";
      descricao = "Peças automotivas, bicicleta e acessórios";
      classeStatus = "categoria-transporte";
      break;

    case "W":
    case "X":
    case "Y":
    case "Z":
      nomeCategoria = "Brinquedos e Jogos";
      descricao = "Itens de intreterimento e lazer";
      classeStatus = "categoria-brinquedos";
      break;

    default:
      nomeCategoria = "Categoria Indefinida ou Inválida";
      descricao = "Categoria não encontrada!";
      classeStatus = "status-bloqueio";
  }

  resultadoProduto.className = `resultado-grande ${classeStatus}`
  resultadoProduto.innerHTML = `
    <h3>${nomeCategoria}</h3>
    <p>${descricao}</p>
  `;

  inputCodigoProduto.value = "";
  inputCodigoProduto.focus();
});
