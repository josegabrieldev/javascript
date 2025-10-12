function verificarParOuImpar() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    if (numero === '') {
        alert('Por favor, insira um número.');
        return;
    } if (numero % 2 === 0) {
        resultado.innerHTML = `O número ${numero} é Par.`;
    } else {
        resultado.innerHTML = `O número ${numero} é Ímpar.`;
    }
    numero.value = '';
    numero.focus();
}