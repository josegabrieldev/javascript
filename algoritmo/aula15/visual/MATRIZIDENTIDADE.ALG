algoritmo "MatrizIdentidade"
var
   mID: vetor[1..10, 1..10] de Inteiro
   i, j: Inteiro
inicio
      Para i <- 1 ate 10 faca
           Para j <- 1 ate 10 faca
                Se (i = j) entao
                   mID[i,j] <- 1
                Senao
                     mID[i,j] <- 0
                FimSe
           FimPara
      FimPara
      
      Para i <- 1 ate 10 faca
           Para j <- 1 ate 10 faca
                Escreva(mID[i,j]:3)
           FimPara
           Escreval()
      FimPara
fimalgoritmo