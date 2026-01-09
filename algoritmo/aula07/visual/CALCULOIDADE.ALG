algoritmo "viagem"
var
   nome: Caractere
   dinheiro: Real
inicio
      Escreva("Qual seu nome? ")
      Leia(nome)
      Escreva("Quanto em dinheiro você possui? ")
      Leia(dinheiro)
      Se (dinheiro >= 10000) entao
         Escreva("Boa quantia a viagem pode rolar. Partiu Disney!")
      Senao
           Escreva("Uma pena essa quantia não é muito legal para uma viagem.")
      FimSe
fimalgoritmo