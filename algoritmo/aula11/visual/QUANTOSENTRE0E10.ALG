algoritmo "QuantosEntre0E10"
var
   C, V, Cond, Simp: Inteiro
inicio
      Cond <- 0
      Simp <- 0
      Para C <- 1 ate 6 faca
           Escreva("Digite um valor: ")
           Leia(V)
           Se (V >= 0) e ( V <= 10) entao
                Cond <- Cond + 1
           FimSe
           Se (V % 2 = 1) entao
                   Simp <- Simp + V
           FimSe
      FimPara
      Escreval("Dentre os valores digitados, ", Cond, " estão entre 0 e 10")
      Escreval("Nesse intervalo a soma de impares é de ", Simp)
fimalgoritmo