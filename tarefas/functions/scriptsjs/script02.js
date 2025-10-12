function calcularAreaRetangulo() {
    const largura = document.getElementById("largura");
    const altura = document.getElementById("altura");
    const area = largura.value * altura.value;
    document.getElementById("resultado").innerHTML = "A área do retângulo é: " + area;
    largura.value = '';
    altura.value = '';
    largura.focus();
}