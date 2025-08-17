// JUNTANDO TUDO EM UM SÓ, FAZENDO DE UMA VEZ
const produtos = [
        { id: 1, nome: 'Smartphone Galaxy S21', preco: 3999.99, temDesconto: true, quantidade: 1, },
        { id: 2, nome: 'Notebook Dell Inspiron', preco: 4500.00, temDesconto: false, quantidade: 3, },
        { id: 3, nome: 'Smart TV LG 55', preco: 2799.00, temDesconto: true, quantidade: 5, },
        { id: 4, nome: 'Fone de Ouvido Bluetooth JBL', preco: 299.90, temDesconto: false, quantidade: 2, },
        { id: 5, nome: 'Câmera DSLR canon', preco: 3200.00, temDesconto: true, quantidade: 1, },
        { id: 6, nome: 'Tablet iPad Air', preco: 4199.00, temDesconto: false, quantidade: 8, },
        { id: 7, nome: 'Console PlayStation 5', preco: 4699.00, temDesconto: true, quantidade: 2, },
        { id: 8, nome: 'Smartwatch Apple Watch', preco: 2499.00, temDesconto: false, quantidade: 7, },
        { id: 9, nome: 'Impressora HP Multifuncional', preco: 599.90, temDesconto: true, quantidade: 5, },
        { id: 10, nome: 'Caixa de Som Portátil Sony', preco: 1000.00, temDesconto: false, quantidade: 3, },
    ] // temDesconto = 10% de desconto ou valor do produto multiplicado por 0.9

// Adicionar +10 em cada produto
// Filtrar somente só os em promoção
// Saber qual é o faturamento se vendermos todos em promoção

    const faturamentoTotal = produtos.map( produto => {
        return { ...produto, quantidade: produto.quantidade + 12} // adiciona +12 a quantidade de cada produto
    }).filter( produto => produto.temDesconto).reduce( (acumulador, produto) => acumulador + (produto.quantidade * produto.preco), 0)
    //.filter pega somente os produtos com descontos
    //.reduce soma todos os precos em um único valor, incluive multiplicando a quantidade e somando
    console.log(faturamentoTotal.toLocaleString('pt-br', {style: "currency", currency: 'BRL'}))