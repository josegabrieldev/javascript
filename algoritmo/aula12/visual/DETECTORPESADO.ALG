algoritmo "DetectorPesado"
var
   I: Inteiro
   N, Pesado: Caractere
   P, Mai: Real
   Procedimento Topo()
   Inicio
      LimpaTela
      Escreval("-----------------------------------")
      Escreval(" D E T C T O R    DE   P E S A D O ")
      Escreval(" Maior peso até agora: ", Mai, "kg ")
      Escreval("-----------------------------------")
   FimProcedimento
inicio
      Topo()
      Para I <- 1 ate 5 faca
           Escreva("Digite o nome: ")
           Leia(N)
           Escreva("Digite o peso de: ", N, ": ")
           Leia(P)
           Se (P > Mai) entao
                Mai <- P
                Pesado <- N
           FimSe
           Topo()
      FimPara
      Topo()
      Escreval("A pessoa mais pesada foi ", Pesado, ", com ", Mai, " quilos")
fimalgoritmo