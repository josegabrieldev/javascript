function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam Dados! Verifique e TENTE NOVAMENTE!')
    } else {
       res.innerHTML = 'Contando.. '
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)

       for () {
        
       }
    }
}