let tarefas = []

function adicionarTarefas() {
    const inputTarefa = window.document.getElementById('inputTarefa')
    let tarefa = inputTarefa.value.trim() 
    let mensagem = window.document.getElementById('mensagem')

    if (tarefa == "" ) {
        mensagem.innerHTML = 'Digite uma tarefa valida para adicicionar!'
        mensagem.style.color = '#7f1212'
    } else {
        mensagem.innerHTML = 'Tarefa adicionada com sucesso!'
        mensagem.style.color = '#0c581eff'
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ''
    inputTarefa.focus()
}

function renderizarTarefas() {  
    const listaTarefas = window.document.getElementById('listaTarefas')
    listaTarefas.innerText = ''

    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement('li')
        novaTarefa.textContent = tarefas[i]

        let botaoRemover = document.createElement('button')
        botaoRemover.className = 'remover'
        botaoRemover.textContent = 'Remover'
        botaoRemover.onclick = () => removerTarefa (i)

        let botaoEditar = document.createElement('button')
        botaoEditar.className = 'editar'
        botaoEditar.textContent = 'Editar'
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa)
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
}

function editarTarefa(i) {
    let tarefaEditada = prompt('Edite a tarefa:')
    if (tarefaEditada.trim() !== '') {
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }
}

function limparLista() {
    tarefas.length = 0
    renderizarTarefas()
    let mensagem = window.document.getElementById('mensagem')
    mensagem.innerHTML = 'Lista de tarefas limpada com sucesso!'
    mensagem.style.color = '#333'
}