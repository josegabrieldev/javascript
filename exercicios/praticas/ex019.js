function tabuada() {
    var n = window.document.getElementById('num')
    var num = Number(n.value)
    var res = window.document.getElementById('res')
    res.innerHTML = ''
    for (var m = 1; m <= 10; m++) {
    res.innerHTML += `${num} x ${m} = ${num * m} <br>`
    }
}