// Gerador de Tabuada
const inputNumero = document.querySelector("#numero");
const btnGerarTabuada = document.querySelector("#btn-gerar-tabuada");
const tituloTabuada = document.querySelector("#titulo-tabuada");
const resultadoTabuada = document.querySelector("#resultado-tabuada");

btnGerarTabuada.addEventListener("click", () => {
  const numero = parseFloat(inputNumero.value.trim().replace(",", "."));
  resultadoTabuada.innerHTML = "";

  if (isNaN(numero)) {
    resultadoTabuada.innerHTML =
      "Número inválido! Tente um número válido como por exemplo o número 22";
    inputNumero.focus();
    return;
  }

  for (let i = 1; i <= 10; i++) {
    const resMultiplicacao = numero * i;

    tituloTabuada.innerHTML = `Tabuada do ${numero}`;
    resultadoTabuada.innerHTML += `${numero} x ${i} = <strong>${resMultiplicacao}</strong> <br>`;
  }

  inputNumero.value = "";
  inputNumero.focus();
});

// Contador Regressivo
const inputContagem = document.querySelector("#input-contagem");
const btnIniciarContagem = document.querySelector("#btn-iniciar-contagem");
const resultadoContagem = document.querySelector("#resultado-contagem");

btnIniciarContagem.addEventListener("click", () => {
  const numeroInicial = parseInt(inputContagem.value.trim());
  resultadoContagem.innerHTML = "";

  if (isNaN(numeroInicial) || numeroInicial < 0) {
    resultadoContagem.innerHTML = `Digite um número correto antes de iniciar a contagem! Números negativos não são permitidos`;
    return;
  }

  btnIniciarContagem.disabled = true;
  inputContagem.disabled = true;

  let contador = numeroInicial;
  resultadoContagem.innerHTML = "Preparando lançamento... 🧑‍🚀";

  const intervalo = setInterval(() => {
    if (contador > 0) {
      resultadoContagem.innerHTML = contador;
      contador--;
      return;
    }

    if (contador === 0) {
      resultadoContagem.innerHTML = 0;
      clearInterval(intervalo);

      setTimeout(() => {
        resultadoContagem.innerHTML = "🚀 Contagem finalizada!";
        btnIniciarContagem.disabled = false;
        inputContagem.disabled = false;
        inputContagem.value = "";
        inputContagem.focus();
      }, 1000);
    }
  }, 1000);
});

// Adivinhe o número secreto
const btnGerarNumeroSecreto = document.querySelector("#gerar-numero-secreto");
const inputPalpite = document.querySelector("#input-palpite");
const btnEnviarPalpite = document.querySelector("#enviar-palpite");
const mensagem = document.querySelector("#mensagem");
const contarTentativas = document.querySelector("#contar-tentativas");

let numeroSecreto = "";
let acertou = false;
let tentativas = 0;

btnGerarNumeroSecreto.addEventListener("click", () => {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  mensagem.innerHTML = "Número secreto gerado! Tente adivinhar 👀";
  btnGerarNumeroSecreto.disabled = true;
  btnEnviarPalpite.disabled = false;
  inputPalpite.value = "";
  inputPalpite.focus();
  tentativas = 0;
  contarTentativas.innerHTML = `Número de tentativas ${tentativas}`;
  acertou = false;
});

btnEnviarPalpite.addEventListener("click", () => {
  const palpite = parseInt(inputPalpite.value.trim());

  if (numeroSecreto === "") {
    mensagem.innerHTML =
      "Por favor, gere o número secreto antes de tentar adivinhar!";
  } else if (isNaN(palpite)) {
    mensagem.innerHTML = "Por favor, insira um palpite válido!";
    inputPalpite.value = "";
    inputPalpite.focus();
  } else if (palpite === numeroSecreto) {
    mensagem.innerHTML = `Parabéns! Você adivinhou o número secreto ${numeroSecreto} 🎉`;
    mensagem.innerHTML += `<br> 🎯 Você acertou! Clique em <strong> Gerar Novo Número </strong> pra jogar outra vez.`;
    btnGerarNumeroSecreto.disabled = false;
    btnEnviarPalpite.disabled = true;
    inputPalpite.value = "";
    numeroSecreto = "";
    acertou = true;
    tentativas++;
    contarTentativas.innerHTML = `Número de tentativas ${tentativas}`;
  } else if (palpite < numeroSecreto) {
    mensagem.innerHTML = "Tente um número maior! 📈";
    inputPalpite.value = "";
    inputPalpite.focus();
    tentativas++;
    contarTentativas.innerHTML = `Número de tentativas ${tentativas}`;
  } else {
    mensagem.innerHTML = "Tente um número menor! 📉";
    inputPalpite.value = "";
    inputPalpite.focus();
    tentativas++;
    contarTentativas.innerHTML = `Número de tentativas ${tentativas}`;
  }
});

// Calculadora de Média de Notas
const inputAluno = document.querySelector("#input-aluno");
const inputNotas = document.querySelector("#input-notas");
const btnAdicionarNota = document.querySelector("#btn-adicionar-nota");
const tituloNotas = document.querySelector("#titulo-notas");
const listaNotas = document.querySelector("#lista-notas");
const btnCalcularMedia = document.querySelector("#btn-calcular-media");
const resultadoMedia = document.querySelector("#resultado-media");
let notas = [];

btnAdicionarNota.addEventListener("click", () => {
  const aluno = inputAluno.value.trim();
  const nota = parseFloat(inputNotas.value.trim().replace(",", "."));

  if (!aluno) {
    resultadoMedia.innerHTML =
      "Por favor, digite o nome do aluno ou seu nome antes de adicionar as notas.";
    inputAluno.focus();
    return;
  }

  if (isNaN(nota) || nota < 0 || nota > 10) {
    resultadoMedia.innerHTML = "Nota inválida! Digite uma nota entre 0 e 10.";
    inputNotas.value = "";
    inputNotas.focus();
    return;
  }

  if (tituloNotas.textContent === "") {
    tituloNotas.textContent = `Notas de ${aluno}:`;
  }

  notas.push(nota);

  listaNotas.innerHTML = "";
  for (let i = 0; i < notas.length; i++) {
    const li = document.createElement("li");
    li.textContent = `Nota ${i + 1}: ${notas[i].toFixed(1)}`;
    listaNotas.appendChild(li);
  }
  inputNotas.value = "";
  inputNotas.focus();
  resultadoMedia.innerHTML = "";
});

btnCalcularMedia.addEventListener("click", () => {
  const aluno = inputAluno.value.trim();

  if (notas.length <= 1) {
    resultadoMedia.innerHTML =
      "Adicione pelo menos duas notas para calcular a média.";
    inputNotas.focus();
    return;
  }

  const somaNotas = notas.reduce((acc, curr) => acc + curr, 0);
  const media = somaNotas / notas.length;

  if (media >= 7) {
    resultadoMedia.innerHTML += `<br>🎉 Parabéns, ${aluno}! Você foi aprovado com média ${media.toFixed(
      1
    )}`;
  } else if (media >= 5) {
    resultadoMedia.innerHTML += `<br>⚠️ Atenção, ${aluno}. Você está de recuperação com média ${media.toFixed(
      1
    )}`;
  } else {
    resultadoMedia.innerHTML += `<br>❌ Infelizmente, ${aluno}, você foi reprovado com média ${media.toFixed(
      1
    )}`;
  }
});

// Simulador de Juros Compostos
// Ajuste os seletores abaixo se seus ids no HTML forem diferentes
const inputCapital = document.querySelector("#capital");
const inputTaxa = document.querySelector("#taxa-juros");
const inputPeriodo = document.querySelector("#periodo");
const btnCalcularJuros = document.querySelector("#btn-calcular-juros");
const resultadoJuros = document.querySelector("#resultado-juros");

btnCalcularJuros.addEventListener("click", () => {
  const capital = parseFloat(inputCapital.value.trim().replace(",", "."));
  const taxa = parseFloat(inputTaxa.value.trim().replace(",", ".")) / 100;
  const periodo = parseInt(inputPeriodo.value.trim(), 10);

  resultadoJuros.innerHTML = "";

  if (isNaN(capital) || capital <= 0) {
    resultadoJuros.innerHTML =
      "Por favor, insira um valor de capital válido maior que zero.";
    inputCapital.value = "";
    inputCapital.focus();
    return;
  }

  if (isNaN(taxa) || taxa <= 0) {
    resultadoJuros.innerHTML =
      "Por favor, insira uma taxa de juros válida maior que zero.";
    inputTaxa.value = "";
    inputTaxa.focus();
    return;
  }

  if (isNaN(periodo) || periodo <= 0) {
    resultadoJuros.innerHTML =
      "Por favor, insira um período válido (meses) maior que zero.";
    inputPeriodo.value = "";
    inputPeriodo.focus();
    return;
  }

  let montante = capital;

  resultadoJuros.innerHTML = `<h3>📊 Evolução dos juros:</h3><ul>`;

  for (let mes = 1; mes <= periodo; mes++) {
    montante *= 1 + taxa;
    const montanteFormatado = montante.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    resultadoJuros.innerHTML += `<li>Mês ${mes}: ${montanteFormatado}</li>`;
  }

  resultadoJuros.innerHTML += `</ul><h3>💰 Montante final após ${periodo} meses: ${montante.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</h3>`;

  inputCapital.value = ""
  inputTaxa.value = ""
  inputPeriodo.value = ""
  inputCapital.focus()
});
