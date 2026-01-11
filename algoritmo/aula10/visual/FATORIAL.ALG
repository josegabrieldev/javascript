algoritmo "Fatorial"
var
   C, N, F: Inteiro
   R: Caractere
inicio
  Repita
     Escreva("Digite um número: ")
     Leia(N)
     Escreval("--------------------------")
     Escreval("FATORIAL DO NÚMERO ", N)
     Escreval("--------------------------")
     
     C <- N
     F <- 1
     Repita
           Escreva(C, "X")
           F <- F * C
           C <- C - 1
     Ate (C < 1)
     Escreval(" ")
     Escreval("O fatorial do número ", N, " é igual a ", F)
     Escreva("Deseja fazer o fatorial de outro número? [S/N]")
     Leia(R)
  Ate ( (R = "N") ou (R = "n") )
fimalgoritmo