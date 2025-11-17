// 🥇 Exercício 1 — O atraso dramático (setTimeout básico)
const botaoAtraso = document.getElementById("botao-atraso");
const mensagemAtraso = document.getElementById("mensagem-atraso");

botaoAtraso.addEventListener("click", () => {
  mensagemAtraso.innerHTML = `O código começou a rodar… <br> Aguarde 3 segundos para ver a mensagem final!`;
  mensagemAtraso.style.color = "black";

  setTimeout(() => {
    let contador = 0;

    const intervalo = setInterval(() => {
      mensagemAtraso.style.visibility =
        mensagemAtraso.style.visibility === "hidden" ? "visible" : "hidden";
      contador++;

      if (contador === 10) {
        clearInterval(intervalo);
        mensagemAtraso.style.visibility = "visible";
        mensagemAtraso.innerHTML = `<br><strong style="color:red;">💥 Boom! O tempo acabou!</strong>`;
      }
    }, 200);
  }, 3000);
});

// 🥈 Exercício 2 — Contagem regressiva com suspense (setInterval básico)
const inputNumero = document.getElementById("input-numero");
const botaoContagem = document.getElementById("botao-iniciar-contagem");
const mensagemContagem = document.getElementById("mensagem-contagem");

botaoContagem.addEventListener("click", () => {
  const numeroInicial = parseInt(inputNumero.value.trim());

  if (isNaN(numeroInicial) || numeroInicial <= 0) {
    mensagemContagem.innerHTML = `<strong style="color:red;">Por favor, insira um número inteiro positivo válido.</strong>`;
    return;
  }

  botaoContagem.disabled = true;
  inputNumero.disabled = true;

  let contador = numeroInicial;

  mensagemContagem.innerHTML = `<strong>🚀 Contagem iniciando em ${contador}...</strong>`;

  const intervalo = setInterval(() => {
    contador--;

    if (contador > 0) {
      mensagemContagem.innerHTML = `⏳ ${contador}`;
      console.log(`⏳ ${contador}`);
    } else {
      clearInterval(intervalo);
      mensagemContagem.innerHTML = `<strong style="color:lime;">💥 Boom! Contagem finalizada!</strong>`;
      console.log("💥 Boom! Contagem finalizada!");
      botaoContagem.disabled = false;
      inputNumero.disabled = false;
      inputNumero.value = "";
      inputNumero.focus();
    }
  }, 1000);
});

// 🥉 Exercício 3 — O relógio maluco
const relogio = document.querySelector("#relogio");

function atualizarRelogio() {
  const agora = new Date();
  const horas = String(agora.getHours());
  const minutos = String(agora.getMinutes());
  const segundos = String(agora.getSeconds());

  relogio.innerHTML = `${horas.padStart(2, "0")} : ${minutos.padStart(
    2,
    "0"
  )} : ${segundos.padStart(2, "0")}`;
}
setInterval(atualizarRelogio, 1000);

// 🚀Exercício 4 — Notificação Personalizada
const inputTempoNotificacao = document.querySelector("#input-tempo");
const inputMensagemNotificacao = document.querySelector("#input-mensagem");
const botaoAtivarNotificacao = document.querySelector(
  "#botao-ativar-notificacao"
);
const contagemNotificacao = document.querySelector(
  "#mostrar-contagem-notificacao"
);
const mostrarNotificacao = document.querySelector(
  "#mostrar-notificacao-personalizada"
);

botaoAtivarNotificacao.addEventListener("click", () => {
  const tempo = parseInt(inputTempoNotificacao.value.trim(), 10);
  const mensagem = inputMensagemNotificacao.value.trim();

  if (isNaN(tempo) || tempo <= 0) {
    contagemNotificacao.innerHTML = `<strong style="color:red;">Por favor, insira um tempo válido em segundos.</strong>`;
    mostrarNotificacao.innerHTML = "";
    inputTempoNotificacao.value = "";
    inputTempoNotificacao.focus();
    return;
  }

  if (mensagem === "") {
    mostrarNotificacao.innerHTML = `<strong style="color:red;">Por favor, insira uma mensagem para a notificação.</strong>`;
    contagemNotificacao.innerHTML = "";
    inputMensagemNotificacao.value = "";
    inputMensagemNotificacao.focus();
    return;
  }

  inputTempoNotificacao.disabled = true;
  inputMensagemNotificacao.disabled = true;
  botaoAtivarNotificacao.disabled = true;

  let tempoRestante = tempo;
  contagemNotificacao.innerHTML = `⏳ Notificação será exibida em ${tempoRestante} segundos…`;

  const intervalo = setInterval(() => {
    contagemNotificacao.innerHTML = `⏳ Notificação em ${tempoRestante} segundos`;

    if (tempoRestante === 0) {
      clearInterval(intervalo);
      mostrarNotificacao.innerHTML = `<strong style="color:lime;">🔔 Notificação: ${mensagem}</strong>`;
      inputTempoNotificacao.disabled = false;
      inputMensagemNotificacao.disabled = false;
      botaoAtivarNotificacao.disabled = false;

      return;
    }

    tempoRestante--;
  }, 1000);
});

// 🧪 Exercício 5 — Temporizador
const inputSegundos = document.querySelector("#input-segundos");
const botaoIniciarTemporizador = document.querySelector(
  "#botao-iniciar-temporizador"
);
const mensagemTemporizador = document.querySelector("#mensagem-temporizador");

botaoIniciarTemporizador.addEventListener("click", () => {
  const segundos = parseInt(inputSegundos.value.trim());

  if (isNaN(segundos) || segundos <= 0) {
    mensagemTemporizador.innerHTML = `<strong style="color:red;">Por favor, insira um número inteiro positivo válido.</strong>`;
    inputSegundos.value = "";
    inputSegundos.focus();
    return;
  }

  botaoIniciarTemporizador.disabled = true;
  inputSegundos.disabled = true;

  let tempoRestante = segundos;

  const intervalo = setInterval(() => {
    mensagemTemporizador.innerHTML = `⏳ Tempo restante: ${tempoRestante} segundos`;

    if (tempoRestante < 0) {
      clearInterval(intervalo);
      mensagemTemporizador.innerHTML = `<strong style="color:lime;">💥 Tempo esgotado!</strong>`;
      botaoIniciarTemporizador.disabled = false;
      inputSegundos.disabled = false;
      inputSegundos.value = "";
      inputSegundos.focus();
      return;
    }

    tempoRestante--;
  }, 1000);
});

// 🧩 Exercício 6 — Contador crecente
const inputNumeroFinal = document.querySelector("#numero-final");
const botaoContagemCrescente = document.querySelector(
  "#botao-contagem-crescente"
);
const mostrarContagemCrescente = document.querySelector(
  "#mostrar-contagem-crescente"
);

botaoContagemCrescente.addEventListener("click", () => {
  const numeroFinal = parseInt(inputNumeroFinal.value.trim());

  if (isNaN(numeroFinal) || numeroFinal <= 0) {
    mostrarContagemCrescente.innerHTML = `<strong style="color:red;">Por favor, insira um número inteiro positivo válido antes de iniciar a contagem.</strong>`;
    inputNumeroFinal.value = "";
    inputNumeroFinal.focus();
    return;
  }

  inputNumeroFinal.disabled = true;
  botaoContagemCrescente.disabled = true;

  let contador = 1;
  mostrarContagemCrescente.innerHTML = `🚀 Contagem iniciando...`;
  const delay = numeroFinal <= 100 ? 800 : 200;

  if (numeroFinal === numeroFinal) {
    const intervalo = setInterval(() => {
      mostrarContagemCrescente.innerHTML = `⏳ ${contador}`;

      if (contador === numeroFinal) {
        clearInterval(intervalo);
        mostrarContagemCrescente.innerHTML = `<strong style="color:lime;">🎉 Contagem finalizada!</strong>`;
        inputNumeroFinal.disabled = false;
        botaoContagemCrescente.disabled = false;
        inputNumeroFinal.value = "";
        inputNumeroFinal.focus();
        return;
      }
      contador++;
    }, delay);
  }
});

// 👑 Exercício 7 — Jogo do Reflexo
const jogo = document.getElementById("jogo");
let estado = "aguardando"; // estados: aguardando, valendo, perdeu e fim
let inicio;
let delay;
let timeoutVerde;

function gerarDelay() {
  return (delay = Math.random() * 3000 + 2000);
}

function iniciarRodada() {
  clearTimeout(timeoutVerde);
  jogo.style.backgroundColor = "gray";
  jogo.innerHTML = "Espere o verde...";
  estado = "aguardando";
  gerarDelay();

  timeoutVerde = setTimeout(() => {
    jogo.style.backgroundColor = "green";
    jogo.innerHTML = "Clique agora!";
    inicio = Date.now();
    estado = "valendo";
  }, delay);
}

gerarDelay();
iniciarRodada();

jogo.addEventListener("click", () => {
  if (estado === "aguardando") {
    jogo.innerHTML = "Você clicou cedo demais!";
    jogo.style.backgroundColor = "red";
    estado = "fim";
    return;
  }

  if (estado === "valendo") {
    const tempoFinal = (Date.now() - inicio) / 1000;
    jogo.innerHTML = `⏱️ Seu tempo de reação: ${tempoFinal.toFixed(
      2
    )} segundos`;
    estado = "fim";
    return;
  }

  if (estado === "fim") {
    iniciarRodada();
  }
});
