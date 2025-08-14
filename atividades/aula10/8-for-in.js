/*
        Estrutura de repetição - LOOP
            - FOR IN
            - Usado para iterar objetos
*/

const info = {
    nome: 'José Gabriel',
    idade: 21,
    Cidade: 'Juripiranga',
    Estado: 'PB'
}

for (let key in info) {
    console.log(`${key}: ${info[key]}`)
}
console.log('Usúario com todos os dados OK!')