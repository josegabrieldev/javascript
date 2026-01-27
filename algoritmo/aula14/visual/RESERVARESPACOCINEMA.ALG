algoritmo "ReservarEspacoCinema"
var
   B: vetor[1..19] de Caractere
   L, cad: Inteiro
   R: Caractere
   
Procedimento MostrarFileira()
var i: Inteiro
Inicio
      Escreval("RESERVA DE ASSENTOS AO CINEMA")
      Escreval("=====================================")
      Para i <- 1 ate 10 faca
           Se (B[i] = "") entao
              Escreva("[ B", i:2, " ]")
           Senao
                Escreva("[ --- ]")
           FimSe
      FimPara
      Escreval("")
      Escreval("--------------------------------------")
FimProcedimento
inicio
      Repita
            LimpaTela
            MostrarFileira()
            Escreval("")
            Escreva("Reserva a cadeira B: ")
            Leia(cad)
            Se (B[cad]="") entao
               B[cad] <- "X"
               EscrevaL("Cadeira B", cad, " RESERVADA!")
            Senao
                 EscrevaL("ERRO: Lugar Ocupado!")
            FimSe
            Escreva("Quer reservar outro lugar? [S/N] ")
            Leia(R)
      Ate (R = "N")
fimalgoritmo