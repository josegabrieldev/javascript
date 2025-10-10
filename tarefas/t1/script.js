let idade, pessoa, res;
idade = 21
pessoa = (idade < 18) ? `Você é menor de idade, possui ${idade}` : `Você é maior de idade, possui ${idade}`;
res = (idade < 18 || idade > 65) ? "MENOR DE IDADE" : "MAIOR DE IDADE";
document.getElementById("texto").innerHTML = res;