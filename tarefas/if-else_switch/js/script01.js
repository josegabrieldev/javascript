// Descontos por Fidelidade
const selectStatus = document.querySelector("#select-status");
const inputValorCompra = document.querySelector("#input-valor-compra");
const btnCalcularDesconto = document.querySelector("#btn-calcular-desconto");
const resultadoDesconto = document.querySelector("#resultado-desconto");

btnCalcularDesconto.addEventListener("click", () => {
  const status = selectStatus.value;
  const valorCompra = parseFloat(inputValorCompra.value.trim().replace(",", "."));

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
