algoritmo "Somador"
var
   N, S: Inteiro
   Resp: Caractere
inicio
      S <- 0
      Repita
            Escreva("Valor ==> ")
            Leia(N)
            S <- S + N
            Escreva("Deseja digitar outro valor? [S/N] ")
            Leia(Resp)
      Ate ((Resp = "N") ou (Resp = "n"))
      
      Escreval("A soma de todos os números digitados é de ", S)
fimalgoritmo