algoritmo "ParOuImparFuncao"
var
   N: Inteiro
   R: Caractere
   
Funcao ParOuImpar(V: Inteiro): Caractere
Inicio
       Se (V % 2 = 0) entao
          Retorne "PAR"
       Senao
            Retorne "IMPAR"
       FimSe
FimFuncao
inicio
      Escreva("Digite um número: ")
      Leia(N)
      R <- ParOuImpar(N)
      Escreval("O número ", N, " é um valor ", R)
fimalgoritmo