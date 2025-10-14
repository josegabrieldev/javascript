const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operacaoSelect = document.getElementById('operacaoSelect');
const btnExecutar = document.getElementById('btnExecutar');
const btnLimpar = document.getElementById('btnLimpar');
const saida = document.getElementById('saida');

// --- Funções callback 
function multiplicar(a,b) { return a * b; }
function somar(a,b) { return a + b; }
function subtrair(a,b) { return a - b;}
function dividir(a,b) { return b === 0 ? 'ERRO: Divisão por ZERO' : a / b; }

function aplicarOperacao(num1, num2, operacao) {
    if (typeof operacao !== "function") {
        throw TypeError('Operação precisa ser uma função (callback) ');
    }
    return operacao(num1, num2);
}

function executar() {
    const n1 = Number(num1Input.value);
    const n2 = Number(num2Input.value);

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        saida.textContent = "Por Favor, insira dois números válidos";
        return;
    }

    const opcao = operacaoSelect.value;
    let callback;

    switch(opcao) {
        case 'multiplicar': callback = multiplicar; break;
        case 'somar': callback = somar; break;
        case 'subtrair': callback = subtrair; break;
        case 'dividir': callback = dividir; break;
        default:
            saida.textContent = 'Operação desconhecida ou fora de registro';
            return;
    }
    try {
        const resultado = aplicarOperacao(n1, n2, callback);
        saida.innerHTML = `Resultado: <strong>${resultado}</strong>`;
    } catch (err) {
        saida.textContent = 'Erro: ' + err.message
    }
}

    btnExecutar.addEventListener('click', executar);
    btnLimpar.addEventListener('click', () => {
        num1Input.value = '';
        num2Input.value = '';
        saida.textContent = 'Resultado aparecerá aqui';
        num1Input.focus();
    })

window.addEventListener('load', () => num1Input.focus());