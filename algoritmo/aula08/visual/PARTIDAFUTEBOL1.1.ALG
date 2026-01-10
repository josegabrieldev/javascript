algoritmo "PartidaFutebol"
var
   Time1, Time2: Caractere
   Casa, Visitante, diferenca: Real
inicio
      Escreval("Escolha dois times abaixo")
      Escreva("Time da casa ")
      Leia(Time1)
      Escreva("Time visitante ")
      Leia(Time2)
      
      Escreval("PARTIDA DEFINIDA ENTRE ", Time1, " X ", Time2)
      
      Escreva("Quantos gols o ", Time1, " fez na partida? ")
      Leia(Casa)
      Escreva("E quantos gols o ", Time2, " fez na partida? ")
      Leia(Visitante)
      
      diferenca <- Casa - Visitante
      
      Escolha diferenca
              Caso 0
                   Escreval("DIFERENÇA: ", diferenca)
                   Escreval("STATUS: EMPATE")
              Caso 1, 2, 3
                   Escreval("DIFERENÇA: ", diferenca)
                   Escreval("STATUS: PARTIDA NORMAL")
              OutroCaso
                       Escreval("DIFERENÇA: ", diferenca)
                       Escreval("STATUS: GOLEADA")
      FimEscolha
fimalgoritmo