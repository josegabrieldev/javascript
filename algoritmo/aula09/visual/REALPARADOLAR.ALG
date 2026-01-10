algoritmo "RealParaDolar"
var
   C, Q: Inteiro
   R, D: Real
inicio
      C <- 1
      Escreva("Quantas conversões você deseja? ")
      Leia(Q)
      Enquanto (C <= Q) faca
               Escreva("Qual o valor em R$? ")
               Leia(R)
               D <- R / 5.39
               Escreval("O valor convertido é de US$", D:5:2)
               C <- C + 1
      FimEnquanto
fimalgoritmo