algoritmo "FstorialFuncao"
var
   N, F: Inteiro
   
Funcao Fatorial(X: Inteiro): Inteiro
Var
   C, R: Inteiro
Inicio
      R <- 1
      Para C <- 1 ate X faca
      R <- R * C
      FimPara
      Retorne R
FimFuncao
inicio
      Escreva("Digite um número: ")
      Leia(N)
      F <- Fatorial(N)
      Escreval("O valor de ", N, "! é igual a ", F)
fimalgoritmo