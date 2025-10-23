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
    mostrarListaFrutas.innerHTML = `Lista de frutas: ${listaFrutas.join(", ")}`;
    itemFruta.value = "";
    itemFruta.focus();
  }
});

botaoRemoverPrimeiroItem.addEventListener("click", () => {
  if (listaFrutas.length > 0) {
    mostrarListaFrutas.innerHTML = `Lista de frutas antes: ${listaFrutas.join(
      ", "
    )} <br>`;

    listaFrutas.shift();
    mostrarListaFrutas.innerHTML += `Lista de frutas após remoção: ${listaFrutas.join(
      ", "
    )}`;
  } else {
    alert('Não à nenhum item na lista. Adicione ao menos uma fruta e clique novamente para remover o (O primeiro item)')
  }
});

botaoInverterOrdem.addEventListener("click", () => {
  if (listaFrutas.length === 0) {
    alert(
      "Não tem nenhuma fruta na lista, digite algumas frutas a lista e depois inverta ela"
    );
  } else {
    mostrarListaFrutas.innerHTML = `Lista de frutas: ${listaFrutas.join(
      ", "
    )} <br>`;
    listaFrutas.reverse();
    mostrarListaFrutas.innerHTML += `Lista de frutas invertida: ${listaFrutas.join(
      ", "
    )}`;
  }
});
