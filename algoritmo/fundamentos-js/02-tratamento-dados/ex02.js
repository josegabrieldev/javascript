const valor = 7845.6

console.log(`
    Valor Original: ${valor}
    Com duas casas decimais: ${valor.toFixed(2)}
    Formato brasileiro (virgula): ${valor.toFixed(2).replace('.', ',')}
    Formato em Real: ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
    `);