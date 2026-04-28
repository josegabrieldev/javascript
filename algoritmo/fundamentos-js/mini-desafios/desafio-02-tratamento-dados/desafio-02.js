// Sistema simples de cálculo de compra com desconto
const nomeProduto = "Smart TV";
const precoProduto = "598.99";
const descontoPercentual = 45;

// Converte o preço de string pra numero
const preco = Number(precoProduto);

// Aplica desconto por porcentagem
const descontoAplicado = preco * (descontoPercentual / 100);

// Calcular o valor final do produto
const valorFinalProduto = preco - descontoAplicado;

// Frase formatada
console.log(`O produto ${nomeProduto} custava ${preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} mas com ${descontoPercentual}% de desconto sai por apenas ${valorFinalProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. Você economizou ${descontoAplicado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais na ${nomeProduto}`);