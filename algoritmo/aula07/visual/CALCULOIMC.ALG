algoritmo "CalculoIMC"
var
   N: Caractere
   M, A, IMC: Real
inicio
      Escreva("Seu nome por gentileza? ")
      Leia(N)
      Escreval("Olá ", N, " bem vindo ao calculador de (IMC)")
      Escreva("Sua Massa (kg): ")
      Leia(M)
      Escreva("Sua Altura (m): ")
      Leia(A)
      IMC <- M / (A ^ 2)
      Escreval("O IMC de ", N, " é de ", IMC:5:2)
      Se (IMC >= 18.5) e (IMC < 25) entao
           Escreval(N, ", Seu peso está no ideal, MUITO BOM!")
      senao
           Escreval(N, ", Seu peso não está no ideal, ATENÇÃO!")
      FimSe
fimalgoritmo