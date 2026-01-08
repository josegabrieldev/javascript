algoritmo "exercicio 04"
var
   preco, taxacao, imposto: Real
inicio
      Escreva("Qual foi o preço do produto em US$? ")
      Leia(preco)
      Escreva("Quanto foi a taxação? ")
      Leia(taxacao)
      
      imposto <- preco * taxacao / 100
      Escreva("O valor de imposto foi de US:", imposto:5:2, " pelo produto")
fimalgoritmo