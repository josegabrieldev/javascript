Algoritmo "triangulos"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 12/12/2025
Var
// Seção de Declarações das variáveis 
   L1, L2, L3: Real
   EQ, ES, TRI: Logico

Inicio
      Escreva("Digite o valor do primeiro lado: ")
      Leia(L1)
      Escreva("Digite o valor do segundo lado: ")
      Leia(L2)
      Escreva("Digite o valor do  terceiro lado: ")
      Leia(L3)
      TRI <- (L1 < L2 + L3) E (L2 < L1 + L3) E (L3 < L1 + L2)
      EQ <- (L1 = L2) E (L2 = L3)
      Es <- (L1 <> L2) E (L2 <> L3) E (L1 <> L3)
      Escreval("Pode formar um triângulo? ", TRI)
      Escreval("O triângulo é EQUILATERO? ", EQ)
      Escreval("O triângulo é ESCALENO? ", ES)

Fimalgoritmo