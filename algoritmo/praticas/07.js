// Pega o exercício de dobrar números numa lista (lógica de map) e escrever ele usando o método nativo map.

/*
    1 - Lista de números
    2 - Variavel que vai guarda o número dobrado, e vai chama o metodo map
    3 - Usar o metodo map com callback (o número pra ser dobrado um de cada vez da lista)
    4 - Dentro vai pega esse calback e multiplicar por dois (* 2) pra dobrar o número
    5 - Exibir o resultado na tela
*/

const numeros = [1, 23, 6, -10, 63, 71, 83, 29, 45, 98, -3, 56, -12];

const numerosDobrados = numeros.map((num) => num * 2);
console.log(numerosDobrados);