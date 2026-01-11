algoritmo "SuperContador"
var
   R, C, N1, N2: Inteiro
inicio
      Escreval("SUPER CONTADOR INTELIGENTE")
      Escreval("ESCOLHA DOIS NÚMEROS")
      Escreval( )
      Escreva("Primeiro número? ")
      Leia(N1)
      Escreva("Segundo número? ")
      Leia(N2)
      
      Repita
            Escreval( )
            Escreval("=================")
            Escreval("|     M E N U    |")
            Escreval("=================")
            Escreval("| [1] De ", N1, " a ", N2, "  |")
            Escreval("| [2] De ", N2, " a ", N1, "  |")
            Escreval("| [3] Sair       |")
            Escreval("=================")
            Leia(R)
            Se (R = 1) entao
               C <- N1
               Repita
                     Escreva(C, "..")
                     C <- C + 1
               Ate (C > N2)
               Escreval( )
               Escreval("Fim da contagem progressiva!")
            Senao
                 Se (R = 2) entao
                    C <- N2
                    Repita
                          Escreva(C, "..")
                          C <- C - 1
                    Ate (C < N1)
                    Escreval( )
                    Escreval("Fim da contagem regressiva!")
                 FimSe
            FimSe
      Ate (R = 3)
      Escreval("Fim do programa! Saindo...")
      Escreval("AGRADECEMOS A PREFERÊNCIA")
fimalgoritmo