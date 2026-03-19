function gerarTabuada() {
    // 1. Seleção dos elementos do DOM
    const numeroInput = document.getElementById("numeroInput"); // Corrigido o ID
    const resultadoDiv = document.getElementById("resultadoTabuada");
    
    // 2. Conversão do valor para número inteiro
    const numero = parseInt(numeroInput.value);

    // 3. Limpar o conteúdo anterior
    resultadoDiv.innerHTML = "";

    // 4. Validação (Verifica se é um número válido)
    if (isNaN(numero)) {
        resultadoDiv.innerHTML = "<p style='color: #e74c3c;'>Por favor, digite um número válido.</p>";
        return; // Sai da função se o campo estiver vazio ou inválido
    }

    // 5. Adicionar o título da tabuada
    resultadoDiv.innerHTML = `<h2>Tabuada do ${numero}</h2>`;

    // 6. Laço de repetição para gerar as linhas
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        
        // Criamos uma div com a classe 'tabuada-item' para usar o estilo do CSS
        resultadoDiv.innerHTML += `
            <div class="tabuada-item">
                ${numero} <span>×</span> ${i} = <strong>${resultado}</strong>
            </div>
        `;
    }
}

// 7. Event Listener para o botão
const botaoGerar = document.getElementById("btngerar"); // Corrigido o ID conforme seu HTML
botaoGerar.addEventListener("click", gerarTabuada);

// BÔNUS: Permitir gerar a tabuada ao apertar "Enter" no teclado
document.getElementById("numeroInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        gerarTabuada();
    }
}); 