/* Functions / Funções
        - Trecho de código  que é executado SOMENTE quando é solicitado
        - Trecho de código que pode ser REUTILIZADO várias vezes
    
    [ ] O que é uma função e como usar
    [ ] Função VOID (vazia)
    [ ] Função com parâmetros
    [ ] Função Return
    [ ] Arrow Function

*/

    // VOID
        function digaMeuNome() {
            const nome = 'Dev Gabriel'
            console.log(nome)
        }
digaMeuNome() // -> chama a função

    // Função com Parâmetros
        function soma(num1, num2) {
            const resultado = num1 + num2
            console.log(resultado)
        }
soma(7, 15) // -> chama a função e damos o valor ou valores do parâmetro (a função so vai funcionar se entregar os valores)
    // Função Return
function estaEndividado(receita, gastos) {
    if (receita > gastos) {
        return 'Você ta indo bem, contínue cuidando do financeiro'
    } else {
        return 'Você ta indo mal, reveja o seu financeiro'
    }
}

const dev = estaEndividado(2000, 500)
const gabriel = estaEndividado(3000, 5000)

console.log(dev)
console.log(gabriel)

    // Arrow Function (Função Flecha)
function fruta() {} // Forma Classica
const nomeCompleto = (nomeCompleto) => { // Forma Moderna
    console.log(nomeCompleto)
}
nomeCompleto('José Gabriel Da Silva') // chama a função