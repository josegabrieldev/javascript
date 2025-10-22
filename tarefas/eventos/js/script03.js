// Evento Número 9
// Delegação de Eventos Simples
const listaContainer = document.querySelector("#lista-container");
const mostrarItemClicado = document.querySelector("#info");
let itemAnteriorClicado = null;
for (let i = 1; i <= 10; i++) {
  const item = document.createElement("li");

  item.textContent = `Item da Lista ${i}`;
  listaContainer.appendChild(item);
}

listaContainer.addEventListener("click", (event) => {
  const itemClicado = event.target;
  if (event.target.matches("li")) {
    if (itemAnteriorClicado !== null) {
      itemAnteriorClicado.classList.remove("selecionado");
    }
    console.log(`Item válido clicado: ${itemClicado.textContent}`);
    mostrarItemClicado.textContent = `Item válido clicado: ${itemClicado.textContent}`;
    itemAnteriorClicado = itemClicado;
    itemClicado.classList.add("selecionado");
  }
});

// Evento Número 10
// Parando a Propagação (Bubbling == Borbulhamento)
function mostrarClique(nome) {
  console.log(`Clique detectado no elemento ${nome}`);
  mostrarElementoClicado.innerHTML = `Clique detectado no elemento ${nome}`;

  event.stopPropagation();
}

const pai = document.getElementById("pai");
const filho = document.getElementById("filho");
const neto = document.getElementById("neto");
const mostrarElementoClicado = document.getElementById("mostrar-clique");

pai.addEventListener("click", () => mostrarClique("PAI"));
filho.addEventListener("click", () => mostrarClique("FILHO"));
neto.addEventListener("click", () => mostrarClique("NETO"));
