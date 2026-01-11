algoritmo "Fibonacci"
var
   a, b, c, contador, v: Inteiro
inicio
      a <- 0
      b <- 1
      Escreva("Quantos valores deseja que apareça da serie Fibonocci? ")
      Leia(v)
      Escreval("OS PRIMEIROS ", v, " VALORES DA SERIE FIBONACCI")
      Escreval(a)
      Escreval(b)
      contador <- 3
      
      Enquanto (contador <= V) faca
               c <- a + b
               Escreval(c)
               a <- b
               b <- c
               contador <- contador + 1
      FimEnquanto
fimalgoritmo