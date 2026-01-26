algoritmo "SomaProcedimento"
var
 N: Inteiro
Procedimento ParOuImpar(V: Inteiro)
Inicio
      Se (V % 2 = 0) entao
         Escreval("O número ", V, " é PAR!")
      Senao
           Escreval("O número ", V, " é IMPAR!")
      FimSe
FimProcedimento
inicio
      Escreval("==========================================")
      Escreval("VERIFICADOR DE NÚMERO ==> PAR OU IMPAR")
      Escreval("==========================================")
      Escreva("Digite um número: ")
      Leia(N)
      ParOuImpar(N)
fimalgoritmo