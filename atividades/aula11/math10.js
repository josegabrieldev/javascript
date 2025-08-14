/*
        Math --> Matemática
        - pow(2,2) / potência / 2 elevado a 2 (2x2) = 4
        - sqrt(25,2) / raiz quadrada
        - ceil / teto -> arredonda para cima
        - floor / chão -> arredonda para baixo
        - random() / número aleatório entre 0 e 1
*/

const calculo = Math.random() * (9999 - 0) + 1 // da um código de 4 digitos aleatoriamente
console.log(Math.ceil(calculo))