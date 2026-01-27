algoritmo "TorneioDeFutebol"
var
   Time: vetor[1..4] de Caractere
   I, J: Inteiro
inicio
      Escreval("==============================")
      Escreval("MINI CAMPEAONATO PAULISTA")
      Escreval("==============================")

      Para I <- 1 ate 4 faca
           Escreva(I, " time: ")
           Leia(Time[I])
      FimPara

      Para I <- 1 ate 4 faca
           Escreval("TABELA DE JOGOS DO ", Time[I])
           Para J <- 1 ate 4 faca
                Se (I = J) entao

                Senao
                     Escreval(Time[I]:15, " [ ] X [ ] ", Time[J])
                FimSe
           FimPara
           Escreval("-------------------------------")
      FimPara
fimalgoritmo