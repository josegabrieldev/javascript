algoritmo "Contador"
var
   valorInicial, valorFinal, salto, contador: Real
inicio
      Escreval("CONTADOR DO DEV GABRIEL)")
      Escreval("Totalmente interativo")
      
      Escreva("Digite o valor inicial: ")
      Leia(valorInicial)
      Escreva("Digite o valor final: ")
      Leia(valorFinal)
      Escreva("Digite o valor do salto: ")
      Leia(salto)
      
      Escreval("A contagem será iniciada")
      
      Enquanto (valorInicial <= valorFinal) faca
               Escreval(valorInicial)
               valorInicial <- valorInicial + salto
      FimEnquanto
      
      Escreval("Contagem finalizada!")
fimalgoritmo