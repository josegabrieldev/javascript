// Evento Número 5
// Validação em Tempo Real
const inputCampo = document.querySelector("#campo");
const mensagemErro = document.querySelector("#erro");

inputCampo.addEventListener("keyup", () => {
  let texto = inputCampo.value;

  if (texto.length < 8) {
    mensagemErro.textContent = "Sua senha precisa ter no mínimo 8 digitos!";
  } else {
    mensagemErro.textContent = "";
  }
});

// Evento Número 6
// Submissão de Formulário Controlada
const meuForm = document.querySelector("#meu-form");
const inputNome = document.querySelector("#nome");
const mostrarValor = document.querySelector("#mostrar-valor");

meuForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = inputNome.value;
  console.log(`Olá ${nome} Seja Bem Vindo ou Bem Vinda!`);
  mostrarValor.innerHTML = `Olá ${nome} Seja Bem Vindo ou Bem Vinda!`;
});

// Evento Número 7
// Captura de Teclas
document.addEventListener("keypress", (evento) => {
  const teclaPressionada = document.querySelector("#tecla-pressionada");
  teclaPressionada.innerHTML = `A ultima tecla pressionada foi essa: <br>${evento.key}`;
});

// Evento Número 8
//Lista Dinâmica
const inputText = document.querySelector("#item");
const botaoAdicionarItem = document.querySelector("#adicionar-item");
const lista = document.querySelector("#lista");

botaoAdicionarItem.addEventListener("click", () => {
  const item = inputText.value.trim();

  if (item !== "") {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
    inputText.focus();
    inputText.value = "";
  } else {
    alert("Digite um item antes de adicionar!");
  }
});
