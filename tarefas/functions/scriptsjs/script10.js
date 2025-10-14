function criarContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    };
}

const primeiroContador = criarContador();

console.log(`Olá esse é o ${primeiroContador()}  Número!`);
console.log(`Olá esse é o ${primeiroContador()}  Número!`);
console.log(`Olá esse é o ${primeiroContador()}  Número!`);
console.log(`Olá esse é o ${primeiroContador()}  Número!`);
console.log(`Olá esse é o ${primeiroContador()}  Número!`);
console.log(`Olá esse é o ${primeiroContador()}  Número!`);

const segundoContador = criarContador();

console.log(segundoContador());

if (primeiroContador() < 0) {
    console.log(segundoContador());
}