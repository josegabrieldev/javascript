algoritmo "AnalisadorDeValores"
var
   C, V, S, D5, N, SP: Inteiro // C = Contador, V = Valor, D5 = Divisiveis por 5, N = Nulos, SP = Soma dos pares
   M: Real // M = Media
inicio
S <- 0
M <- 0
S <- 0
D5 <- 0
N <- 0
SP <- 0
      Para C <- 1 ate 5 faca
           Escreva("Digite o ", C, " valor: ")
           Leia(V)
           S <- S + V
           M <- S / 5
           Se (V % 5 = 0) entao
              D5 <- D5 + 1
           FimSe
           Se (V = 0) entao
              N <- N + 1
           FimSe
           Se (V % 2 = 0) entao
              SP <- SP + V
           FimSe
      FimPara
      Escreval("A soma entre os valores é de ", S)
      Escreval("A média entre os valores é de ", M)
      Escreval("Valores divisiveis por cinco são ", D5)
      Escreval("Valores nulos ", N)
      Escreval("A soma dos valores pares é de ", SP)
fimalgoritmo