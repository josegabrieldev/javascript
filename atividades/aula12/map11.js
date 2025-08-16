/*

    DOMINANDO ARRAYS no JavaScript

    Map(Mapear item por item do Array)
        - Criar um novo array com a mesma quantidade de items do array original.
        - O novo array você pode alterar o que quiser em relação ao original.
        - Você tem acesso a 3 dados:
            - Item por Item do array
            - Posição atual do Array
            - Array Completo
*/

const numeros = [91,26,39,42,581]
const dobro = numeros.map((numero, index, arrayCompleto) => {
console.log(`Posição Número ${index} e valor ${numero}`)
})