let numeroDeCliques = 0
let contador = document.querySelector('span#contador')
let buttonContar = document.querySelector('button#button-contar')
let buttonDiminuir = document.querySelector('button#button-diminuir')
let buttonResetar = document.querySelector('button#button-resetar')
buttonContar.addEventListener('click', contarCliques)
buttonDiminuir.addEventListener('click', diminuirCliques)
buttonResetar.addEventListener('click', resetarCliques)

function atualizarContador() {
    contador.innerHTML = `${numeroDeCliques}`

    const comemoracao = new Audio('comemoracao.mp3')

    if(numeroDeCliques < 10) {
        contador.style.color = '#c6e636ff'
    } else if(numeroDeCliques < 100) {
        contador.style.color = '#13914E'
    } else if(numeroDeCliques < 1000) {
        contador.style.color = '#7a1fa2'
    } else {
        contador.style.color = '#c62828'
    }

    if(numeroDeCliques === 10 || numeroDeCliques === 100 || numeroDeCliques === 1000) {
        contador.classList.add('brilho')
        comemoracao.play()
        setTimeout( () => contador.classList.remove('brilho'), 600)
    }
}

function contarCliques() {
    numeroDeCliques = numeroDeCliques + 1
    atualizarContador()
}

function diminuirCliques() {
    if(numeroDeCliques === 0) {
        alert(`
            [ERRO]
            O contador precisar ser maior que 0 ZERO para funcionar
            Clique pelo menos uma vez!
            `)
    } else {
        numeroDeCliques = numeroDeCliques - 1
        atualizarContador()
    }
}

function resetarCliques() {
    numeroDeCliques = 0
    atualizarContador()
}