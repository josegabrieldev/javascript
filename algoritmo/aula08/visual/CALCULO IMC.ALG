algoritmo "Calculo IMC"
var
   nome: Caractere
   M, A, IMC: Real
inicio
      Escreval("Bem vindo ao cálculo do seu IMC")
      Escreva("Me diga seu nome primeiro ")
      Leia(nome)
      
      Escreva("Seu peso em (kg) ")
      Leia(M)
      Escreva("Sua altura em (m): ")
      Leia(A)
      
      IMC <-  M / (A ^ 2)
      Escreva("O IMC de ", nome, " deu ", IMC:4:2, " portanto esta ")
      
      Se (IMC < 17) entao
         Escreva("muito abaixo do peso ideal")
      Senao
           Se (IMC >= 17) e (IMC < 18.5) entao
              Escreva("abaixo do peso ideal")
           Senao
                Se (IMC >= 18.5) e (IMC < 25) entao
                   Escreva("no peso ideal")
                Senao
                     Se (IMC >= 25) e (IMC < 30) entao
                        Escreva("na categoria de sobrepeso do ideal")
                     Senao
                          Se (IMC >= 30) e (IMC < 35) entao
                             Escreva("na categoria de obesidade")
                          Senao
                               Se (IMC >= 35) e (IMC < 40) entao
                                  Escreva("na categoria de obesidade severa")
                               Senao
                                    Escreva("na categoria de obesidade mórbida")
                               FimSe
                          FimSe
                     FimSe
                FimSe
           FimSe
      FimSe
fimalgoritmo