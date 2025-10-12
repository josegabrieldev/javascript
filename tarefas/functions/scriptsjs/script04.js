function contarVogais(event) {
            event.preventDefault(); // impede o envio do formulário

            const textoArea = document.getElementById("texto");
            const resultado = document.getElementById("resultado");
            const texto = textoArea.value;

            let contador = 0;
            const vogais = ["a", "e", "i", "o", "u"];

            for (let i = 0; i < texto.length; i++) {
                if (vogais.includes(texto[i].toLowerCase())) {
                    contador++;
                }
            }

            resultado.innerHTML = `O texto <strong>${texto}</strong> possui <strong>${contador}</strong> vogais.`;
            resultado.classList.add("show");

            textoArea.value = "";
            textoArea.focus();
}