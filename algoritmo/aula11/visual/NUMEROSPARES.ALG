algoritmo "NumerosPares"
var
   C, V: Inteiro
inicio
      Escreva("Digite um valor: ")
      Leia(V)
      Se (V % 2 = 1) entao
         V <- V - 1
      FimSe
      Para C <- V ate 0 passo -2 faca
           Escreval(C)
      FimPara
fimalgoritmo