algoritmo "AptoADirigir"
var
   anoAtual, anoNascimento, idade: Inteiro
   status: Caractere
inicio
      Escreval("— — — — — — — — — — — — — — — — — — — —")
      Escreval("DEPARTAMENTO DE TRÂNSITO DA PARAÍBA")
      Escreval("— — — — — — — — — — — — — — — — — — — —")
      
      Escreva("Ano atual (yyyy): ")
      Leia(anoAtual)
      Escreva("Ano de nascimento (yyyy): ")
      Leia(anoNAscimento)
      
      idade <- anoAtual - anoNascimento
      
      Se (idade >= 18) entao
         Escreval("— — — — — — — — STATUS — — — — — — — —")
         Escreval("IDADE: ", idade, " ANOS")
         Escreval("VOCÊ ESTÁ APTO A TIRA SUA CARTEIRA")
         Escreval("— — — — — — — — — — — — — — — — — — — —")
      Senao
           Escreval("— — — — — — — — STATUS — — — — — — — —")
           Escreval("IDADE: ", idade, " ANOS")
           Escreval("VOCÊ ESTÁ INAPTO A TIRA SUA CARTEIRA")
           Escreval("— — — — — — — — — — — — — — — — — — — —")
      FimSe
fimalgoritmo