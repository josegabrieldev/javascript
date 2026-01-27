algoritmo "SoComC"
var
   nome: Caractere
   soC: vetor[1..10] de Caractere
   c, totC: Inteiro
inicio
      totC <- 0
      Para c <- 1 ate 10 faca
           Escreva("Digite seu nome: ")
           Leia(nome)
           Se (Copia(Maiusc(nome), 1, 1) = "C") entao
              totC <- totC + 1
              soC[totC] <- nome
           FimSe
      FimPara
      
      LimpaTela
      Escreval("lISTAGEM NOMES QUE INICIAM COM C")
      Para c <- 1 ate totC faca
           Escreval(soC[C])
      FimPara
fimalgoritmo