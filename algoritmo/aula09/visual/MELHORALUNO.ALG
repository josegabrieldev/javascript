algoritmo "MelhorAluno"
var
   Nome, MAluno: Caractere
   qtdAlunos, C: Inteiro
   Nota, Maior: Real
inicio
       Escreval("-------------------------")
       Escreval("ESCOLA DEVS EM FORMAÇÃO")
       Escreval("-------------------------")
       Escreva("Quantos alunos a turma tem? ")
       Leia(qtdAlunos)
       
       C <- 1
       Enquanto (C <= qtdAlunos) faca
                Escreval("---------------")
                Escreval("ALUNO ", C)
                Escreva("Nome do aluno: ")
                Leia(Nome)
                Escreva("Nota de ", Nome, ": ")
                Leia(Nota)
                Se (Nota > Maior) entao
                   Maior <- Nota
                   MAluno <- Nome
                FimSe
                
                C <- C + 1
       FimEnquanto
       
       Escreval("------------------")
       Escreval("O melhor aproveitamento foi de ", MAluno, " com nota ", Maior)
fimalgoritmo