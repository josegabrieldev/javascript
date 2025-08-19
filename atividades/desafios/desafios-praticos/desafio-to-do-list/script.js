let inputTarefa = document.querySelector('#input-tarefa')
let buttonAdicionar = document.querySelector('#button-adicionar')
let buttonLimpar = document.querySelector('#button-limpar')
let listaTarefas = document.querySelector('ul#lista-tarefas')

let spanPendentes = document.getElementById('tarefas-pendentes')
let spanConcluidas = document.getElementById('tarefas-concluidas')
let spanTotal = document.getElementById('total-tarefas')

buttonAdicionar.addEventListener('click', adicionarTarefa)
buttonLimpar.addEventListener('click', function() {
    const confirmar = confirm("Tem certeza que deseja apaga todas as tarefas?")
    tarefas = [] // Esvazia array
    localStorage.removeItem('tarefas') // Remove do storage
    renderizarTarefas() // Limpa o DOM
})

inputTarefa.addEventListener('keyup', function(e) {
    if(e.key === 'Enter')
        adicionarTarefa()
})

let tarefas = []
let tarefasSalvas = localStorage.getItem('tarefas')

if(tarefasSalvas) {
    tarefas = JSON.parse(tarefasSalvas)
}

renderizarTarefas() // Chamada para renderizar ao carrega a página

function renderizarTarefas() {
    listaTarefas.innerHTML = '' // Limpa a lista antes de redesenhar
    // Percorrer o array de tarefas
    tarefas.forEach(function (tarefa, index) {

        // Criar elementos <li>, <span> e <button>
        let li = document.createElement('li')
        let span = document.createElement('span')
        let buttonRemover = document.createElement('button')

        // Definir o texto do span e do botão
        span.textContent = tarefa.texto
        buttonRemover.textContent = 'Remover'

        // Se a tarefa estiver concluída, adicionar classe css
        if(tarefa.concluida) {
            span.classList.add('concluida')
        }

        // Evento de concluír tarefa (clicar no texto)
        span.addEventListener('click', function() {
            tarefa.concluida = !tarefa.concluida // Alterna concluída true/false
            span.classList.toggle('concluida')
            atualizarContadores()
            localStorage.setItem('tarefas', JSON.stringify(tarefas)) // Salvar no localStorage
        })

        // Evento de remover tarefa
        buttonRemover.addEventListener('click', function() {
            li.remove() // Remove apenas este item do DOM
            tarefas.splice(index, 1) // Remover a tarefa do array usando splice
            atualizarContadores()
            localStorage.setItem('tarefas', JSON.stringify(tarefas)) // Atualizar o localStorage
        })

        // Monta os elementos no li
        li.appendChild(span)
        li.appendChild(buttonRemover)
        listaTarefas.appendChild(li)
    })
    
    atualizarContadores() // Atualizar os contadores sempre no final
}

function atualizarContadores() {
    let tarefasConcluidas = document.querySelectorAll('#lista-tarefas li span.concluida').length
    let total = document.querySelectorAll('#lista-tarefas li').length
    let tarefasPendentes = total - tarefasConcluidas

    spanPendentes.textContent = tarefasPendentes
    spanConcluidas.textContent = tarefasConcluidas
    spanTotal.textContent = total
}

function adicionarTarefa() {
    let texto = inputTarefa.value.trim()
    if (texto === '') {
        alert('Digite uma tarefa antes de adicionar!')
        return
    }

    // Criar objeto da tarefa
    let novaTarefa = {
        texto: texto,
        concluida: false
    }

    // Adicionar no array
    tarefas.push(novaTarefa)

    // Salvar no localStorage
    localStorage.setItem('tarefas', JSON.stringify(tarefas))

    // Re-renderizar a lista
    renderizarTarefas()

    // Limpar input e focar novamente
    inputTarefa.value = ''
    inputTarefa.focus()
}