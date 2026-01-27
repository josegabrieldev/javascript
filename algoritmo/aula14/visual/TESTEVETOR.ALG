algoritmo "TesteVetor"
var
   V: vetor[1..5] de Inteiro
   C: Inteiro
inicio
      Para C <- 1 ate 5 faca
           Escreva("Digite o ", C, " valor: ")
           Leia(V[C])
      FimPara
      
      Para C <- 1 ate 5 faca
           Escreva(" {", V[C], " },")
      FimPara
fimalgoritmo