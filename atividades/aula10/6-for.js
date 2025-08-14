/*
Estrura de repetição - LOOP
    - FOR
        1) INICIALIZAÇÃO - Criar uma váriavel e colocar um valor inicial pra ela

        2) CONDIÇÃO - Enquanto for true, o laço continuará interando.
                    Ele irá verificar antes de cada iteração
        
        3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso laço der uma volta

    for ([inicialização; condição; expressão final]) {
        o código fica aqui!
    }
*/
 const users = ['Maria', 'Aline', 'João'] // lenght(tamanho do array) = 3
for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}
console.log('Fim da lista de usúarios!')