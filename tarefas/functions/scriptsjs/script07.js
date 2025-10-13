function ehPalindromo(event) {
    event.preventDefault();
    const inputTexto = document.getElementById("inputTexto");
    const resultado = document.getElementById("resultado");
    let textoNormal = inputTexto.value;
    let textoSemEspacos = textoNormal.replace(/\s+/g, '').toLowerCase();
    let textoInvertido = textoSemEspacos.split('').reverse().join('');
    if (textoSemEspacos === textoInvertido && textoSemEspacos.length > 0) {
        resultado.textContent = `"${textoNormal}" é um palíndromo.`;
        resultado.textContent += ` (Invertido: "${textoInvertido}")`;
    } else {
        resultado.textContent = `"${textoNormal}" não é um palíndromo.`;
        resultado.textContent += ` (Invertido: "${textoInvertido}")`;
    }
    inputTexto.value = "";
}