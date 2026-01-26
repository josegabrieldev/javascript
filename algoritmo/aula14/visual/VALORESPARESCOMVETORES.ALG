algoritmo "ValoresParesComVetores"
var
   V: vetor[1..7] de Inteiro
   C, P: Inteiro
inicio
      Escreval("===== VALORES PARES =====")
      Para C <- 1 ate 7 faca
           Escreva("Digite o ", C, " valor: ")
           Leia(V[C])
      FimPara
      
      Para C <- 1 ate 7 faca
           Se (V[C] % 2 = 0) entao
              P <- P + 1
              Escreval("Valor PAR na posição ", C, " com valor: ", V[C])
           FimSe
      FimPara
      
      Se P = 0 entao
         Escreval("Nenhum valor PAR foi digitado anteriormente!")
      Senao
           Escreval(P, " Valores pares foram digitados!")
      FimSe
fimalgoritmo