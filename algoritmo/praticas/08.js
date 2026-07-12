// Lista de produtos, cada um é um objeto com nome e preco. Retorna apenas o nome dos produtos que custam mais de R$ 50.

/*
    1 - Lista de produtos, usando array de objetos
    2 - Usar filter pra obter a lista com os produtos que custam +50 reais e guarda em uma variavel
    3 - Usar map pra criar uma nova lista apenas com os nomes desses produtos, guarda em outra variavel
    4 - Retorna essa lista apenas com os nomes
    5 - Mostrar a Lista na tela
*/

const listaDosProdutos = [
    { nome: "Monitor Led 23 Polegadas", preco: 344.96 },
    { nome: "Fone de Ouvido Bluetooth", preco: 24.98 },
    { nome: "Caderno do Ben10", preco: 22.57 },
    { nome: "Mouse Gamer", preco: 102.49 },
    { nome: "Impressora 3D", preco: 498.99 },
    { nome: "Sandalia", preco: 33.75 },
    { nome: "Notebook", preco: 3789.67 },
];

const precosMaioresQueCinquenta = listaDosProdutos.filter(function(produto) {
    return produto.preco > 50;
});

const nomesProdutosMaioresQueCinquenta = precosMaioresQueCinquenta.map(function(produto) {
    return produto.nome;
})

const nomesFormatados = `
Lista dos produtos que custam mais de 50 Reais, Ordem alfabética:
${nomesProdutosMaioresQueCinquenta.sort()}.
`
console.log(nomesFormatados.replace(/,/g, ", "));

const nomesProdutosMaisDeCinquentaReais = listaDosProdutos.filter(produto => produto.preco > 50).map(produto => produto.nome);
const nomesProdutosFormatados = `
Lista dos produtos que custam mais de 50 Reais, Ordem alfabética:
${nomesProdutosMaisDeCinquentaReais}`
console.log(nomesProdutosFormatados.replace(/,/g, ", "));

const numeros = [1, 10, 2, 21, 3];
console.log(numeros.sort((a, b) => a - b));