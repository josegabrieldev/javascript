algoritmo "Estado do Aluno"
var
   N1, N2, N3, N4, M: Real
   aluno: Caractere
inicio
      Escreva("Nome do aluno: ")
      Leia(aluno)
      
      Escreval("ESTADO DA NOTA DO ALUNO ", aluno)
      Escreval("PREENCHA SUAS QUATRO NOTAS (De 0 A 10")
      
      Escreva("Primeira Nota: ")
      Leia(N1)
      Escreva("Segunda Nota: ")
      Leia(N2)
      Escreva("Terceira Nota: ")
      Leia(N3)
      Escreva("Quarta Nota: ")
      Leia(N4)
      
      M <- (N1 + N2 + N3 + N4) / 4
      Escreval("A média do aluno ", aluno, " foi de ", M:2:1, " pontos")
      
      Se (M >= 7) entao
         Escreval("O aluno ", aluno, " foi APROVADO!")
         Escreval("PARABÉNS")
      senao
           Se (M >= 5) entao
              Escreval("O aluno ", aluno, " está de RECUPERAÇÃO!")
              Escreval("Estude certinho para passar na recuperação")
           senao
                Escreval("O aluno ", aluno, " infelizmente foi REPROVADO!")
                Escreval("Se esforce mais para o proximo ano. Boa sorte!")
           FimSe
      FimSe
fimalgoritmo