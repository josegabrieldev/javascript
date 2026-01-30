algoritmo "LerMatrizes"
var
   m: vetor[1..3, 1..2] de Inteiro
   l, c: Inteiro
inicio
      Para l <- 1 ate 3 faca
           Para c <- 1 ate 2 faca
                Escreva("Digite o valor da posição [", l, ",", c, " ]: ")
                Leia(m[l,c])
           FimPara
           LimpaTela
      FimPara
      
      Para l <- 1 ate 3 faca
           Para c <- 1 ate 2 faca
                Escreval("Valor digitado na posição [", l, ",", c, " ] foi: ", m[l,c])
           FimPara
      FimPara
fimalgoritmo