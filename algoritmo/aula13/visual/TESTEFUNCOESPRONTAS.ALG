algoritmo "TesteFuncoesProntas"
var
   Caract, Pois, Mcody: Inteiro
   Site, Copi, Mai, Min, CodyM: Caractere
inicio
      Site <- "Portifólio Dev Gabriel"
      Caract <- Compr(Site)
      EscrevaL("A frase tem de quantidade de caracteres: ", Caract)
      
      Copi <- Copia(Site, 11, 4)
      Escreval("Escolhendo para iniciar o número 11 e quantidade de caractere para aparecer sendo de 4 a palavra a ser colocada é ", Copi)
      
      Mai <- Maiusc(Site)
      Escreval("A frase toda em letras Maiusculas vai ficar ==> ",Mai)
      
      Min <- Minusc(Site)
      Escreval(" A frase toda em Minusculas vai ficar ==> ",Min)
      
      Pois <- Pos("Gabriel", Site)
      Escreval("Qual contagem de caractere o nome Gabriel começa ", Pois)
      
      MCody <- Asc("G")
      Escreval("Vai mostrar o codigo da letra digitada no caso aqui a letra G ", MCody)
      
      CodyM <- Carac(82)
      Escreval("Inverso do anterior vai mostrar a letra comforme o código dela aqui vai ser 82 para a letra ", CodyM)
      
fimalgoritmo