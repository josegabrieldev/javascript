/*
Reduce(Reduzir o Array ao um Único valor)
        - Reduz um array inteiro ao um ÚNICO Valor
        - Você tem acesso a 4 dados
            - Acumulador
            - Valor Atual
            - Posição Atual
            - Array 
*/

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
    ] // temDesconto = 10% de desconto ou valor do produto multiplicado por 0.
    
    // Qual será o faturamento, se vendermos todo o estoque
    const totalVendas = produtos.reduce((acumulador, produto) => {

        return acumulador + (produto.preco * produto.quantidade)
    }, 0)

    console.log(totalVendas.toLocaleString('pt-br', {style: "currency", currency: 'BRL'}))