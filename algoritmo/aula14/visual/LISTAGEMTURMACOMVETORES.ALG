algoritmo "ListagemTurmaComVetores"
var
   Nome: vetor[1..4] de Caractere
   N1: vetor[1..4] de Real
   N2: vetor[1..4] de Real
   M: vetor[1..4] de Real
   AR: vetor[1..4] de Caractere
   SM, MT: Real
   I, TotM: Inteiro
inicio
      Para I <- 1 ate 4 faca
           Escreval("ALUNO ", I)
           Escreva("Nome: ")
           Leia(Nome[I])
           Escreva("Primeira nota: ")
           Leia(N1[I])
           Escreva("Segunda nota: ")
           Leia(N2[I])
           Escreval(" ")
           Escreval("--------------------")
           M[I] <- (N1[I] + N2[I]) / 2
           SM <- SM + M[I]

           Se ( M[I] >= 7 ) entao
              AR[I] <- "APROVADO!"
           Senao
                AR[I] <- "REPROVADO!"
           FimSe
      FimPara
      MT <- SM / 4
      
      LimpaTela
      Escreval("LISTAGEM DE ALUNOS")
      Escreval("----------------------")
      Para I <- 1 ate 4 faca
           Escreval("O aluno ", Nome[I], " ficou com média de ", M[I]:4:1, " portando foi ", AR[I])
      FimPara
      
      Se (M[I] > MT) entao
         TotM <- TotM + 1
      FimSe
      Escreval("Temos ", TotM, " alunos acima da média da turma que foi de ", MT:4:1)
fimalgoritmo