algoritmo "exercicio 05"
var
   emprestimo, juros, valorJuros, valorTotal, parcela, parcelasDe: Real
inicio
      Escreva("Qual o valor do emprestimo? ")
      Leia(emprestimo)
      Escreva("Qual o valor do juros? ")
      Leia(juros)
      
      valorJuros <- emprestimo * juros / 100
      valorTotal <- emprestimo + valorJuros
      
      Escreva("Vai parcela em quantas vezes? ")
      Leia(parcela)
      
      parcelasDe <- valorTotal / parcela
      
      Escreval("Fiz um empréstimo de R$:", emprestimo)
      Escreval("Com juros de", juros, "%")
      Escreval("Valor total a pagar de", valorTotal, " somando empréstimo mais juros")
      Escreval("Quantidade de parcelas desejadas foi de", parcela, " vezes")
      Escreval("Será pago R$:", parcelasDe, " para cada parcela.")
fimalgoritmo