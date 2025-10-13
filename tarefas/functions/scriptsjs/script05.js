function calcularMedia(event) {
    event.preventDefault();
    const inputNota1 = document.getElementById('nota1');
    const inputNota2 = document.getElementById('nota2');
    const inputNota3 = document.getElementById('nota3');
    const inputNota4 = document.getElementById('nota4');
    var nota1 = parseFloat(inputNota1.value);
    var nota2 = parseFloat(inputNota2.value);
    var nota3 = parseFloat(inputNota3.value);
    var nota4 = parseFloat(inputNota4.value);
    var media = (nota1 + nota2 + nota3 + nota4) / 4;
    document.getElementById('resultado').innerHTML = `A média é: ${media.toFixed(1)}`;

    inputNota1.value = '';
    inputNota2.value = '';
    inputNota3.value = '';
    inputNota4.value = '';
}