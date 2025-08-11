/* 
    if E else -> Controlador de fluxo

    if (se)
    else (se não)

    Operadores de comparação

    > maior que
    < menor que
    = atribui valor
    == igual que (comparando somente o valor)
    === identico a que (compara o valor e o tipo)
    >= maior ou igual que
    <= menor ou igual que

*/

const cidadeHabitantes = 600000
if (cidadeHabitantes > 300000) {
    console.log(`A sua cidade possui ${cidadeHabitantes} Mil habitantes`)
    console.log('Cidade Grande')
} else {
    console.log(`A sua cidade possui ${cidadeHabitantes} Mil habitantes`)
    console.log('Cidade Pequena')
}