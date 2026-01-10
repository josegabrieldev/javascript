algoritmo "SomadorNumerico"
var
   contador, N, S, maior, menor, media: Real
inicio
      contador <- 1
      s <- 0
      Enquanto (contador <= 5) faca
                Escreva("Digite o", contador, " valor: ")
                Leia(N)
                Se ( contador = 1) entao
                maior <- N
                menor <- N
                FimSe
                
                Se (N > maior) entao
                   maior <- N
                FimSe
                
                Se (N < menor) entao
                   menor <- N
                FimSe
                S <- S + N
                contador <- contador + 1
      FimEnquanto
      
      media <- S / 5
      
      Escreval("A soma de todos os valores digitados foi de ", S)
      Escreval("O maior valor digitado foi", maior)
      Escreval("O menor valor digitado foi", menor)
      Escreval("A média de todos os números digitados foi de", media)
fimalgoritmo