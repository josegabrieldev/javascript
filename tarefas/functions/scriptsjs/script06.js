function inverterString(event) {
    event.preventDefault(); // Evita o envio do formulário
    const inputString = document.getElementById('inputString');
    let textoSeparado = inputString.value.split('');
    let textoReverse = textoSeparado.reverse();
    let palavra = textoReverse.join('');
    console.log(palavra);
}