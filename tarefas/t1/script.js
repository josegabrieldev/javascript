const usu = { 
    nome: document.getElementById("nome"),
    idade: document.getElementById("idade"),
    cidade: document.getElementById("cidade"),
    profissao: document.getElementById("profissao")
};
function mensagem() {
     document.getElementById("texto").innerHTML = `Olá, eu sou ${usu.nome.value}, tenho ${usu.idade.value} anos, moro em ${usu.cidade.value} e sou ${usu.profissao.value}.`;
}