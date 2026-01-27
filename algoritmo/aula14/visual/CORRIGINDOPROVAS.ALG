algoritmo "CorrigindoProvas"
var
   nome: vetor[1..3] de Caractere
   nota: vetor[1..3] de Real
   questGab, resQuest: vetor[1..5] de Caractere
   alunos, questoes: Inteiro
   notaTotal, mediaTotal: Real
inicio
      Escreval("PASSO 1 - CADASTRO DE GABARITO")
      Escreval("==================================")
      Para questoes <- 1 ate 5 faca
           Escreva("Questão ", questoes, ": ")
           Leia(questGab[questoes])
      FimPara
      LimpaTela
      
      Para alunos <- 1 ate 3 faca
           Escreval("-----------------")
           Escreval("ALUNO ", alunos)
           Escreval("-----------------")
           
           Escreva("NOME: ")
           Leia(nome[alunos])
           Escreval(" ")
           Escreval("RESPOSTAS DO ALUNO")
           
           nota[alunos] <- 0
           Para questoes <- 1 ate 5 faca
                Escreva("Questão ", questoes, ": ")
                Leia(resQuest[questoes])
                Se (questGab[questoes] = resQuest[questoes]) entao
                   nota[alunos] <- nota[alunos] + 2
                FimSe
           FimPara
           LimpaTela
      FimPara
      
      mediaTotal <- (nota[1] + nota[2] + nota[3]) / 3
      
      Escreval("NOTAS FINAIS")
      Escreval("------------------------------")
      Para alunos <- 1 ate 3 faca
           Escreval(nome[alunos]:12, nota[alunos]:2:1)
      FimPara
      Escreval("-----------------------------")
      Escreval("MÉDIA TOTAL DA TURMA FOI DE: ", mediaTotal:4:1)
fimalgoritmo