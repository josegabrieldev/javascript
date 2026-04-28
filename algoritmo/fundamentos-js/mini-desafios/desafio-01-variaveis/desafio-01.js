// Sistema simples de cadastro de produto em uma loja virtual
let nomeProduto = "Teclado Gamer";
let precoProduto = 102.58;
let quantidadeProduto = 7;
let produtoDisponivel = null;
let categoriaPrincipalProduto = "Computador";

if (quantidadeProduto > 0) {
    produtoDisponivel = true;
} else {
    produtoDisponivel = false;
};

let produto = {
    nome: nomeProduto,
    preco: precoProduto,
    estoque: quantidadeProduto,
    disponivel: produtoDisponivel,
    categoria: categoriaPrincipalProduto,
    desconto: null
};

produto.desconto = 40;

let categoriaExtras = ["Tecnologia", "Acessório", "Entrada de comandos"];

// Valida melhor o produto disponivel!
let msgDisponibilidade = "";
if (produto.disponivel === true) {
    msgDisponibilidade = `Temos ${produto.estoque} ${produto.nome} disponiveis no momento.`;
} else {
    msgDisponibilidade = `No momento não temos ${produto.nome} disponiveis, Agradecemos a preferência.`;
};

// Aplicando desconto ao produto
let produtoComDesconto = produto.preco - produto.desconto;

// Mostrar todos os dados do objeto
console.log(`Dados do produto; Nome: ${produto.nome}, Preço: R$${produto.preco}, Estoque: ${produto.estoque}, Disponivel? ${msgDisponibilidade} Categoria Principal: ${produto.categoria}, Desconto de R$${produto.desconto}. Preço final com desconto, de R$${produto.preco} por apenas R$${produtoComDesconto}. Categorias Extras do produto são: ${categoriaExtras[0]}, ${categoriaExtras[1]}, ${categoriaExtras[2]}.`)