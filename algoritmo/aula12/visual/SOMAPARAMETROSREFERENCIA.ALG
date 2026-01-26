algoritmo "SomaParametrosReferencia"
var
 X, Y: Inteiro
Procedimento Soma(var A, B: Inteiro)
Inicio
      A <- A + 3
      B <- B + 7
      Escreval("Valor de A = ", A)
      Escreval("Valor de B = ", B)
      Escreval("Soma A + B = ", A + B)
      Escreval(A, " +", B, " =", A + B)
FimProcedimento
inicio
      Escreval("===================================")
      Escreval("SOMA PARAMETROS POR REFERENCIA")
      Escreval("===================================")
      Escreva("Digite um número: ")
      Leia(X)
      Escreva("Digite outro número: ")
      Leia(Y)
      Soma(X, Y)
      Escreval("Valor de X = ", X)
      Escreval("Valor de Y = ", Y)
fimalgoritmo