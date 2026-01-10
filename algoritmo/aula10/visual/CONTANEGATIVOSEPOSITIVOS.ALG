algoritmo "ContaNegativos"
var
   N, C, TotalN, TotalP: Inteiro
inicio
      C <- 0
      TotalN <- 0
      TotalP <- 0
      Repita
            Escreva("Digite um número: ")
            Leia(N)
            Se (N < 0) entao
               TotalN  <- TotalN + 1
            Senao
                 TotalP <- TotalP + 1
            Fimse
            C <- C + 1
      Ate (C >= 5)
      Escreval("Quantidade de números foi de... ")
      Escreval(TotalP, " positivos")
      Escreval(TotalN, " negativos")
fimalgoritmo