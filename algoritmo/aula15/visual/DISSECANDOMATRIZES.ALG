algoritmo "DissecandoMatrizes"
var
   m: vetor[1..4, 1..4] de Inteiro
   l, c, op: Inteiro
   
Procedimento MostraMatriz()
Inicio
      Escreval("----------------------------")
      Escreval("----   MATRIZ INTEIRA   ----")
      Escreval("----------------------------")
      Escreval()
      
      Para l <- 1 ate 4 faca
           Para c <- 1 ate 4 faca
                Escreva(m[l,c])
           FimPara
           Escreval()
      FimPara
FimProcedimento

Procedimento DiagonalPrincipal()
var t: Inteiro
Inicio
      Escreval("--------------------------------")
      Escreval("----   DIAGONAL PRINCIPAL   ----")
      Escreval("--------------------------------")
      Escreval()
      Para l <- 1 ate 4 faca
           Escreval(m[l,l]:4)
           Para t <- 1 ate l faca
                Escreva("    ")
           FimPara
      FimPara
FimProcedimento

Procedimento TrianguloSuperior()
var t: Inteiro
Inicio
      Escreval("--------------------------------")
      Escreval("----   TRIÂNGULO SUPERIOR   ----")
      Escreval("--------------------------------")
      Escreval()
      Para l <- 1 ate 3 faca
           Escreva("    ")
           Para c <- l+1 ate 4 faca
                Escreva(m[l,c]:4)
           FimPara
           Escreval()
           Para t <- 1 ate l faca
                Escreva("    ")
           FimPara
      FimPara
      Escreval()
FimProcedimento

Procedimento TrianguloInferior()
Inicio
      Escreval("--------------------------------")
      Escreval("----   TRIÂNGULO INFERIOR   ----")
      Escreval("--------------------------------")
      Escreval()
      Para l <- 2 ate 4 faca
           EscrevaL()
           Para c <- 1 ate l-1 faca
                Escreva(m[l,c]:4)
           FimPara
      FimPara
      EscrevaL()
FimProcedimento

inicio
   Escreval("PREENCHIMENTO DA MATRIZ")
   Escreval()
   Para l <- 1 ate 4 faca
        Para c <- 1 ate 4 faca
             Escreva("Digite o valor da posição [", l, ",", c, " ]: ")
             Leia(m[l,c])
        Fimpara
        LimpaTela
   FimPara
   LimpaTela
      
   Repita
         Escreval()
         Escreval("============================")
         Escreval("====   MENU DE OPÇÕES   ====")
         Escreval("============================")
         Escreval(" [1] Mostrar a Matriz ")
         Escreval(" [2] Diagonal Principal ")
         Escreval(" [3] Triângulo Superior ")
         Escreval(" [4] Triângulo Inferior ")
         Escreval(" [5] Sair ")
         Repita
            Escreval("====   OPÇÃO:   ====")
            Escreva("===> ")
            Leia(op)
            Escreval()
         Ate (op >= 1) e (op <= 5)
         LimpaTela
         
         Escolha op
              Caso 1
                   MostraMatriz()
              Caso 2
                   DiagonalPrincipal()
              Caso 3
                   TrianguloSuperior()
              Caso 4
                   TrianguloInferior()
              Caso 5
                   Escreval("Agradecemos por testar nosso sistema!")
                   Escreval("ENCERRANDO ATIVIDADE...")
         FimEscolha
   Ate (op = 5)
fimalgoritmo