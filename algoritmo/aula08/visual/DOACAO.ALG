algoritmo "Doacao"
var
   D: Inteiro
   valor: Real
inicio
      Escreval("-----------------------------------------")
      Escreval("----------- CRIANÇA ESPERANÇA -----------")
      Escreval("-----------------------------------------")
      Escreval(" Valores de Doação ")
      Escreval(" [1] para doar R$: 10 Reais ")
      Escreval(" [2] para doar R$: 25 Reais ")
      Escreval(" [3] para doar R$: 50 Reais ")
      Escreval(" [4] para doar outros valores ")
      Escreval(" [5] para para cancelar a doação ")
      
      Escreva("Digite o número correspondente ao que deseja ")
      Leia(D)
      
      Escolha D
              Caso 1
                   valor <- 10
              Caso 2
                   valor <- 25
              Caso 3
                   valor <- 50
              Caso 4
                   Escreva("Qual valor da doação? R$: ")
                   Leia(valor)
              Caso 5
                   Escreval("Sua doação foi cancelada")
      FimEscolha
      
      Escreval("----------------------------------------------")
      Escreval(" SUA DOAÇÃO FOI DE R$:", valor, " REAIS")
      Escreval(" AGRADECEMOS PELA SUA GENEROSA DOAÇÃO! ")
      Escreval("----------------------------------------------")
fimalgoritmo