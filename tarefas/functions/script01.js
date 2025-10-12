function saudarUsuario() {
    const nome = document.getElementById('nome');
    const saudacao = document.getElementById('saudacao');
    saudacao.innerHTML = `Olá, ${nome.value}! Muito prazer te conhecer Seja bem-vindo(a)! Ao meu EX01 de JavaScript utilizando funções.`;
    nome.value = '';
    nome.focus();
}
// EX01: Crie uma função que exiba uma saudação personalizada ao usuário com base no nome fornecido em um campo de entrada.