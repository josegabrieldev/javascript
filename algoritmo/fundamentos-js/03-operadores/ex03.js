const clientVip = false;
const totalCompras = 680;
const desconto = 15;

if (clientVip === true || totalCompras > 500) {
    const descontoAplicado = totalCompras * (15 / 100);
    const totalComprasComDesconto = totalCompras - descontoAplicado;
    console.log(`Meus parabéns você tem direito a um cupom de ${desconto}%, com isso sua compra de ${totalCompras.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. Vai pagar agora ${totalComprasComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.
    O desconto recebido foi de ${descontoAplicado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`)
} else {
    console.log(`Infelizmente desta vez você não conseguiu o desconto, portanto sua compra total foi de ${totalCompras.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`)
};