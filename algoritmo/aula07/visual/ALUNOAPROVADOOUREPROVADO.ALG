algoritmo "alunoAprovadoOUReprovado"
var
   N1, N2, N3, N4, media: Real
inicio
      Escreval("— — — — — — — — — — — — — —")
      Escreval("ESCOLA DEVS EM FORMAÇÃO")
      Escreval("— — — — — — — — — — — — — —")
      
      Escreva("Nota 1: ")
      Leia(N1)
      Escreva("Nota 2: ")
      Leia(N2)
      Escreva("Nota 3: ")
      Leia(N3)
      Escreva("Nota 4: ")
      Leia(N4)
      
      media <- (N1 + N2 + N3 + N4) / 4
      
      Se (media >= 7) entao
         Escreval("— — — — — — — — RESULTADO — — — — — — — —")
         Escreval("MÉDIA: ", media:2:1)
         Escreval("ALUNO APROVADO! VOCÊ ESTA DE PARABÉNS")
         Escreval("— — — — — — — — — — — — — — — — — — — — — —")
      Senao
           Escreval("— — — — — — — — — RESULTADO — — — — — — — — —")
           Escreval("MÉDIA: ", media:2:1)
           Escreval("ALUNO REPROVADO! ESTUDE E TENTE NOVAMENTE")
           Escreval("— — — — — — — — — — — — — — — — — — — — — — —")
      FimSe
fimalgoritmo