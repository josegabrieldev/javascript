// Evento Inversão e Concatenação
const botaoAdicionarFruta = document.querySelector("#adicionar-fruta");
const botaoRemoverPrimeiroItem = document.querySelector("#remover-item");
const botaoInverterOrdem = document.querySelector("#inverter-ordem");
const mostrarListaFrutas = document.querySelector("#mostrar-frutas");
const itemFruta = document.querySelector("#fruta");
const listaFrutas = [];

botaoAdicionarFruta.addEventListener("click", () => {
  const valorFruta = itemFruta.value;
  if (valorFruta.trim() === "") {
    alert(
      "Por Favor! Digite o nome de uma fruta do seu agrado pada poder adicionar"
    );
  } else {
    listaFrutas.push(valorFruta);
    console.log(`Lista de frutas: ${listaFrutas.join(", ")}`);
    mostrarListaFrutas.innerHTML = `Lista de frutas: ${listaFrutas.join(", ")}`;
    itemFruta.value = "";
    itemFruta.focus();
  }
});

botaoRemoverPrimeiroItem.addEventListener("click", () => {
  console.log(`Lista de frutas antes: ${listaFrutas.join(", ")}`);
  mostrarListaFrutas.innerHTML = `Lista de frutas antes: ${listaFrutas.join(
    ", "
  )} <br>`;

  listaFrutas.shift();
  console.log(`Lista de frutas depois da remoção: ${listaFrutas.join(", ")}`);
  mostrarListaFrutas.innerHTML += `Lista de frutas depois da remoção: ${listaFrutas.join(
    ", "
  )}`;
});

botaoInverterOrdem.addEventListener("click", () => {
  console.log(`Lista de frutas: ${listaFrutas.join(", ")}`);
  mostrarListaFrutas.innerHTML = `Lista de frutas: ${listaFrutas.join(", ")} <br>`

  listaFrutas.reverse();
  console.log(`Lista de frutas invertida: ${listaFrutas.join(", ")}`);
  mostrarListaFrutas.innerHTML += `Lista de frutas invertida: ${listaFrutas.join(", ")}`
});
