// Classes com JS

class Carro {
  constructor(marca, modelo, ano, placa) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.placa = placa;
  }
  buzina() {
    return `${this.modelo} Buzinou: Biiiipiiii`
  }
}
const uno = new Carro("Fiat", "Uno", 2001, "AB-2221");
const gol = new Carro("Corolla", "Gol", 2022, "BA-4240");
console.log(uno)
console.log(gol)