algoritmo "DepententesFuncionarios"
var
   Nome: Caractere
   Salario, NovoSalario: Real
   Dependentes: Inteiro
inicio
      Escreva("Qual o nome do funcionário? ")
      Leia(Nome)
      Escreval("Qual o salário de ", Nome)
      Escreva("R$: ")
      Leia(Salario)
      Escreva("Qual é a quantidade de dependentes? ")
      Leia(Dependentes)
      
      Escolha Dependentes
              Caso 0
                   NovoSalario <- Salario + (Salario * 5/100)
              Caso 1, 2, 3
                   NovoSalario <- Salario + (Salario * 10/100)
              Caso 4, 5, 6
                   NovoSalario <- Salario + (Salario * 15/100)
              OutroCaso
                   NovoSalario <- Salario + (Salario * 18/100)
      FimEscolha
      
      Escreval("O novo salário de ", Nome, " sera de R$", NovoSalario:4:2)
fimalgoritmo