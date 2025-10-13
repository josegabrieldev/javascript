function inverterString(event) {
    event.preventDefault(); // Evita o envio do formulário
    const resultadoDiv = document.getElementById('resultado');
    const inputString = document.getElementById('inputString');
    let textoSeparado = inputString.value.split('');
    let textoReverse = textoSeparado.reverse();
    let palavra = textoReverse.join('');
    resultadoDiv.innerHTML = `Palavra Invertida: ${palavra}`;
    inputString.value = '';
}