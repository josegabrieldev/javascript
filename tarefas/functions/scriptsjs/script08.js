function mostrarPares() {
    calcularNumeros("pares");
}

function mostrarImpares() {
    calcularNumeros("impares");
}

function mostrarTodos() {
    calcularNumeros("todos");
}

function calcularNumeros(tipo) {
    const num1 = document.getElementById("inicio");
    const num2 = document.getElementById("fim");
    const resultado = document.getElementById("resultado");

    let inicio = parseInt(num1.value);
    let fim = parseInt(num2.value);

    if (isNaN(inicio) || isNaN(fim)) {
        resultado.innerHTML = "Por favor, insira números válidos.";
        resultado.classList.add("show");
        return;
    }

    let pares = [];
    let impares = [];

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        } else {
            impares.push(i);
        }
    }

    let conteudo = "";
    if (tipo === "pares") {
        conteudo = `Os números <strong>pares</strong> entre ${inicio} e ${fim} são:<br><span class="par">${pares.join(", ")}</span>`;
    } else if (tipo === "impares") {
        conteudo = `Os números <strong>ímpares</strong> entre ${inicio} e ${fim} são:<br><span class="impar">${impares.join(", ")}</span>`;
    } else {
        let todos = [];
        for (let i = inicio; i <= fim; i++) {
            if (i % 2 === 0) {
                todos.push(`<span class="par">${i}</span>`);
            } else {
                todos.push(`<span class="impar">${i}</span>`);
            }
        }

        conteudo = `Os números entre ${inicio} e ${fim} são:<br>${todos.join(", ")}`;
    }

    resultado.innerHTML = conteudo;
    resultado.classList.remove("show");
    setTimeout(() => { resultado.classList.add("show"); }, 100);
}