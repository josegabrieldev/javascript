algoritmo "MelhorAluno"
var
   Nome: Caractere
   qtdAlunos, C: Inteiro
   Nota: Real
inicio
       Escreval("-------------------------")
       Escreval("ESCOLA DEVS EM FORMAÇÃO")
       Escreval("-------------------------")
       Escreva("Quantos alunos a turma tem? ")
       Leia(qtdAlunos)
       
       C <- 0
       Enquanto (C <= qtdAlunos) faca
                Escreval("---------------")
                Escreval("ALUNO ", C)
                Escreva("Nome do aluno: ")
                Leia(Nome)
                Escreva("Nota de ", Nome, ":")
                Leia(Nota)
       FimEnquanto
fimalgoritmo