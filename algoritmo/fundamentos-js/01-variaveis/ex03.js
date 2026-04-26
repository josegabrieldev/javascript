let produto = {
    nome: "Moto G24",
    marca: "Motorola",
    preco: 682.75,
    disponivel: true
};

let desconto = null;

// Simulação de desconto
desconto = produto.preco - 120;

const categoria = ["Celular", "Promoção", "Lançamento"];

// Saida
console.log(produto);
console.log(categoria)
console.log(`Categoria: ${categoria[0]} | Produto: ${produto.marca} | Modelo ${produto.nome}. Preço de ${categoria[2]} era R$${produto.preco}, mas com a ${categoria[1]} teve desconto de R$120, e ficou por R$${desconto}. Disponivel? ${produto.disponivel}`);