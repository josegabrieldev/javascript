// Evento Número 1
// Mensagem Simples
const botaoMensagem = document.querySelector("button#btn1");
const mensagem = document.querySelector("p#mensagem");

botaoMensagem.addEventListener("click", () => {
  mensagem.innerHTML = "";

  let nome = prompt("Me diga seu nome Por Favor?");

  if (nome && nome.trim() !== "") {
    mensagem.textContent = `Olá ${nome} 🍝 Bem-vindo ao Restaurante Chelinha Gourmet! Esperamos que sua experiência seja deliciosa 😋`;
  } else {
    mensagem.textContent = "👋 Bem-vindo ao Restaurante Chelinha Gourmet!";
  }
});

// Evento Número 2
// Trocar de Cor
const retanguloDiv = document.querySelector("div#retangulo");
const corAtual = document.querySelector("p#cor-atual");

retanguloDiv.addEventListener("click", () => {
  const hue = Math.random() * 370;
  const randomColor = `hsl(${Math.round(hue)}, 70%, 60%)`;

  retanguloDiv.style.backgroundColor = randomColor;
  corAtual.textContent = `Cor Atual: ${randomColor}`;
});

// Evento Número 3
// Efeito "Hover" com JS
const quadradoDiv = document.querySelector("#quadrado");
quadradoDiv.addEventListener("mouseover", passarMouse);
quadradoDiv.addEventListener("mouseout", mouseSaiu);
function passarMouse() {
  quadradoDiv.style.backgroundColor = "#6E1BA6";
  quadradoDiv.innerHTML = `Retire o Mouse Agora!`;
}

function mouseSaiu() {
  quadradoDiv.style.backgroundColor = "green";
  quadradoDiv.innerHTML = `Passe o Mouse Aqui!`;
}

// Evento Número 4
// Contador de Cliques

const botaoContador = document.querySelector("#botao-contador");
const contaCliques = document.querySelector("#conta-cliques");
const botaoResetar = document.querySelector("#resetar");
let contador = 0;
botaoContador.addEventListener("click", () => {
  if (contador === 10) {
    alert("🔟 10 cliques: Eita! Já tem gente clicando — começou o show!");
  } else if (contador === 50) {
    alert("🎉 50 cliques: Tá bombando! Cinquentinha de respeito!");
  } else if (contador === 100) {
    alert("💯 100 cliques: Cem cliques? Isso aqui virou sucesso absoluto!");
  }

  contador++;
  contaCliques.innerHTML = `Cliques: ${contador}`;
});

botaoResetar.addEventListener("click", () => {
  contador = 0;
  contaCliques.innerHTML = `Cliques: 0`;
});
