const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    cor: 'Prata',
    placa: 'ABC-1234',
    buzina: function() {
        console.log('Buzinando: Beep Beep!');
        alert('Buzinando: Beep Beep!');
    },
    completo: function() {
        return `A marca do carro é ${this.marca}, e seu modelo é ${this.modelo}`
    }
};
alert(carro.completo());