algoritmo "MatrizParEImpar"
var
   mat: vetor[1..3, 1..3] de Inteiro
   l, c, totPar, totImp: Inteiro
inicio
      Para l <- 1 ate 3 faca
           Para c <- 1 ate 3 faca
                Escreva("Digite o valor da posição [", l, ",", c, " ]: ")
                Leia(mat[l,c])
           FimPara
           LimpaTela
      FimPara
      
      Escreval()
      Escreval("MATRIZES DIGITADAS")
      Escreval("========================")
      totPar <- 0
      totImp <- 0
      Para l <- 1 ate 3 faca
           Para c <- 1 ate 3 faca
                Se (mat[l,c] % 2 = 0) entao
                   Escreva(" |", mat[l,c]:4, " |")
                   totPar <- totPar + 1
                Senao
                     Escreva(" {", mat[l,c]:4, " } ")
                     totImp <- totImp + 1
                FimSe
           FimPara
           Escreval()
      FimPara
      Escreval()
      Escreval("Entre | xx | valores PARES")
      Escreval("Entre { yy } valores IMPARES")
      Escreval("Total de valores PARES foi de ", totPar)
      Escreval("Total de valores IMPARES foi de ", totImp)
fimalgoritmo