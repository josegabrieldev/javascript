function eventoClick() {
    alert("Você clicou no botão uma vez!");
    document.body.style.backgroundColor = "lightblue";
}

function eventoDblClick() {
    alert("Você clicou no botão duas vezes!");
    document.body.style.backgroundColor = "lightgreen";
}

let div = document.getElementById("eventos");
div.addEventListener("mouseover", mouseDentro);
div.addEventListener("mouseout", mouseFora);
div.addEventListener("mousemove", adicionaTexto);
div.addEventListener("mousedown", crescerDiv);
div.addEventListener("mouseup", botaoLiberado);

function mouseDentro() {
    div.style.backgroundColor = "#27ae60";
}

function mouseFora() {
    div.style.backgroundColor = "green";
}

function adicionaTexto() {
    div.innerHTML = "O mouse se moveu dentro da div!<br>";
}

function crescerDiv() {
    div.style.width = "400px";
    div.innerHTML = "O botão do mouse está pressionado!<br>";
}

function botaoLiberado() {
    div.style.width = "300px";
    div.innerHTML = "O botão do mouse foi liberado!<br>";
    div.style.backgroundColor = "blue";
    div.style.color = "white";
}

let inputTexto = document.getElementById("text");
inputTexto.addEventListener("focus", focoInput);
inputTexto.addEventListener("change", valorAlterado);
inputTexto.addEventListener("blur", inputPerdeFoco);
inputTexto.addEventListener("keypress", teclaPressionadaESolta);
inputTexto.addEventListener("keydown", teclaPressionada);
inputTexto.addEventListener("keyup", teclaSolta);

function focoInput() {
    inputTexto.style.backgroundColor = "#f1c40f";
}

function valorAlterado() {
    let valor = inputTexto.value;
    alert("O valor do input foi alterado para: " + valor);
}

function inputPerdeFoco() {
    inputTexto.style.backgroundColor = "blue";
}

function teclaPressionada() {
    console.log("Uma tecla foi pressionada.");
}

function teclaPressionadaESolta() {
    console.log("Uma tecla foi pressionada e está sendo segurada.");
}

function teclaSolta() {
    console.log("Uma tecla foi solta.");
}