algoritmo "ValoresMatriz"
var
   m: vetor[1..4, 1..4] de Inteiro
   l, c, sDP, p2L, maiV3C, menV4L: Inteiro
inicio
      sDP <- 0
      p2L <- 1
      menV4L <- 100
      Para l <- 1 ate 4 faca
           Para c <- 1 ate 4 faca
                Escreva("Digite o valor da posição [", l, ",", c, " ]:")
                Leia(m[l,c])
                Se (l = c) entao
                   sDP <- sDP + m[l,c]
                FimSe
           FimPara
           LimpaTela
      FimPara
      LimpaTela
      
      Para l <- 1 ate 4 faca
           Para c <- 1 ate 4 faca
                Escreva(m[l,c]:4)
           FimPara
           Escreval()
      FimPara
      
      Para c <- 1 ate 4 faca
           p2L <- p2L * m[2,c]
      FimPara
      
      Para l <- 1 ate 4 faca
           Se (m[l,3] > maiV3C) entao
              maiV3C <- m[l,3]
           FimSe
      FimPara
      
      Para c <- 1 ate 4 faca
           Se (m[4,c] < menV4L) entao
              menV4L <- m[4,c]
           FimSe
      FimPara
      
      Escreval("A soma dos valores da Diagonal Principal é ", sDP)
      Escreval("O produto dos valores da Segunda Linha é ", p2L)
      Escreval("O maior valor da Terceira Coluna é ", maiV3C)
      Escreval("O menor valor da Quarta Linha é ", menV4L)
fimalgoritmo