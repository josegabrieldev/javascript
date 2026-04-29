const nomeVendedor = "José Gabriel";
const vendas = 132;
const diasTrabalhados = 30;
const salarioBase = 2500;
const bonus = 20;

const mediaDiaria = vendas / diasTrabalhados;

if (vendas >= 120 && mediaDiaria >= 4){
    const valorBonus = salarioBase * (bonus / 100)
    const salarioBonus = salarioBase + valorBonus;
    console.log(`
        Salário base de ${nomeVendedor}: ${salarioBase.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.
        ${nomeVendedor} fez ${vendas} vendas em ${diasTrabalhados} dias com uma média diaria de ${mediaDiaria.toFixed(0)} vendas por dia. Com esse feito o vendedor ${nomeVendedor} obteve um bônus de ${bonus}% sobre o seu salário.
        Ganhando um bônus de ${valorBonus.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}, com isso o vendedor ${nomeVendedor} vai receber ${salarioBonus.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.
        `);
} else {
    console.log(`Vendedor ${nomeVendedor} você não obteve as metas necessarias pra ter direito ao bônus, mas não desanime continue se esforçando. Agradecemos por seu esforço!`);
};