algoritmo "AproveitamentoAluno"
var
   N: Caractere
   N1, N2, N3, N4, M: Real
inicio
      Escreval("ESCOLA DEVS EM FORMAÇÃO")
      Escreval("------------------------------------------")
      Escreva("Seu nome Completo ")
      Leia(N)
      Escreva("Primeira nota ")
      Leia(N1)
      Escreva("Segunda nota: ")
      Leia(N2)
      Escreva("Terceira nota: ")
      Leia(N3)
      Escreva("Quarta nota: ")
      Leia(N4)
      
      M <- (N1 + N2 + N3 + N4) / 4
      
      Se (M <= 10) e (M > 9) entao
         Escreval("------------------------")
         Escreval("ALUNO: ", N)
         Escreval("MÉDIA: ", M:2:1)
         Escreval("APROVEITAMENTO: A")
         Escreval("------------------------")
      Senao
           Se (M <= 9) e (M > 8) entao
              Escreval("------------------------")
              Escreval("ALUNO: ", N)
              Escreval("MÉDIA: ", M:2:1)
              Escreval("APROVEITAMENTO: B")
              Escreval("------------------------")
           Senao
                Se (M <= 8) e (M > 7) entao
                   Escreval("------------------------")
                   Escreval("ALUNO: ", N)
                   Escreval("MÉDIA: ", M:2:1)
                   Escreval("APROVEITAMENTO: C")
                   Escreval("------------------------")
                Senao
                     Se (M <= 7) e (M > 6) entao
                        Escreval("------------------------")
                        Escreval("ALUNO: ", N)
                        Escreval("MÉDIA: ", M:2:1)
                        Escreval("APROVEITAMENTO: D")
                        Escreval("------------------------")
                     Senao
                          Se (M <= 6) e (M >= 5) entao
                             Escreval("------------------------")
                             Escreval("ALUNO: ", N)
                             Escreval("MÉDIA: ", M:2:1)
                             Escreval("APROVEITAMENTO: E")
                             Escreval("------------------------")
                          Senao
                               Escreval("------------------------")
                               Escreval("ALUNO: ", N)
                               Escreval("MÉDIA: ", M:2:1)
                               Escreval("APROVEITAMENTO: F")
                               Escreval("------------------------")
                          FimSe
                     FimSe
                FimSe
           FimSe
      FimSe
fimalgoritmo