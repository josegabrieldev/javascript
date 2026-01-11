algoritmo "EscolhendoPessoas"
var
   Resp, Sexo: Caractere
   Idade, Cor, Cond1, Cond2: Inteiro
inicio
Cond1 <- 0
Cond2 <- 0
      Repita
            Escreval("=========================")
            Escreval("    SELETOR DE PESSOAS   ")
            Escreval("=========================")
            
            Escreva("Qual o sexo? [M/F] ")
            Leia(Sexo)
            Escreva("Qual a idade? ")
            Leia(Idade)
            Escreva("Qual a cor do cabelo? ")
            Escreval(" ")
            Escreval("----------------------")
            Escreval("[1] Preto")
            Escreval("[2] Castanho")
            Escreval("[3] Loiro")
            Escreval("[4] Ruivo")
            Leia(Cor)
            
            Se ( (Sexo = "M") e (Idade > 18) e (Cor = 2) ) entao
               Cond1 <- Cond1 + 1
            Senao
                 Se   ( (Sexo = "F") e ( (Idade >= 25) e (Idade <= 30) ) e (Cor = 3) ) entao
                      Cond2 <- Cond2 + 1
                 FimSe
            FimSe
            
            Escreva("Adicionar mais pessoas? [S/N] ")
            Leia(Resp)
            LimpaTela
      Ate ( (Resp = "N") ou (Resp = "n") )
      
      Escreval("Total de Homens com mais de 18 anos e com cabelos castanhos ==> ", Cond1)
      Escreval("Total de Mulheres entre 25 e 30 anos com cabelos loiros ==> ", Cond2)
fimalgoritmo