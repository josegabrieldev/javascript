/*
        ForEach(item, index, array)
    
    item) - Dados/Informações contidos na posição atual do Array
    index) - Número da posição. Sempre começando em 0
    array) - Retorna o Array completo
*/

 const users = [
    { name: 'Maria', idade: 17, contact: ' (87) 98124-4329 '},
    { name: 'Biel', idade: 72, contact: ' (21) 90826-7045 '},
    { name: 'João', idade: 10, contact: ' (11) 90231-9887 '},
    { name: 'Sofia', idade: 8, contact: ' (94) 98822-3451 '},
 ]

 users.forEach((item, index, array) => {
    if(item.idade < 18) {
        console.log(`O cliente ${item.name}, na posição ${index} é menor de idade.`)
    } else {
        console.log(`O cliente ${item.name}, na posição ${index} pode prosseguir porque já é maior de idade.`)
    }
 });