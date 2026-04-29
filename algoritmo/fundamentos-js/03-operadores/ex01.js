const valorCaixa = 12.50;
const quantidadeCaixa = 37;

const valorTotal = valorCaixa * quantidadeCaixa;

console.log(`Cliente enviou 37 caixas custando ${valorCaixa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} cada uma. O preço total da remessa é de ${valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`);