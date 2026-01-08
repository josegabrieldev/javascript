algoritmo "exercicio 02"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
var
   reais, dolares, cotacao: Real
inicio
      Escreva("Quantos em real eu tenho? ")
      Leia(reais)
      Escreva("Qual a cotação atual do dolar? ")
      Leia(cotacao)
      
      dolares <- reais / cotacao
      Escreva("Você possui US$: ", dolares, " em dolares.")
fimalgoritmo