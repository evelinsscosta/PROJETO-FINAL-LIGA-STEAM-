function mostrarConteudo(secao){

    let conteudo = document.getElementById("conteudo");

    if(secao === "inicio"){
        conteudo.innerHTML = `
        <h2>Início</h2>
        <p>Este portal tem o objetivo de divulgar boas práticas sustentáveis realizadas por empresas, equipes e organizações.</p>
        `;
    }

    else if(secao === "reciclagem"){
        conteudo.innerHTML = `
        <h2>♻️ Reciclagem</h2>
        <ul>
            <li>Coleta seletiva de resíduos.</li>
            <li>Reutilização de materiais.</li>
            <li>Redução do desperdício.</li>
        </ul>
        `;
    }

    else if(secao === "energia"){
        conteudo.innerHTML = `
        <h2>💡 Economia de Energia</h2>
        <ul>
            <li>Uso de lâmpadas LED.</li>
            <li>Desligamento de equipamentos sem uso.</li>
            <li>Uso de energia solar.</li>
        </ul>
        `;
    }

    else if(secao === "agua"){
        conteudo.innerHTML = `
        <h2>💧 Economia de Água</h2>
        <ul>
            <li>Captação da água da chuva.</li>
            <li>Conserto de vazamentos.</li>
            <li>Uso consciente da água.</li>
        </ul>
        `;
    }

    else if(secao === "ambiental"){
        conteudo.innerHTML = `
        <h2>🌳 Preservação Ambiental</h2>
        <ul>
            <li>Plantio de árvores.</li>
            <li>Proteção de áreas verdes.</li>
            <li>Educação ambiental.</li>
        </ul>
        `;
    }
}

function solicitarSelo(){
    alert("Parabéns! Sua organização aderiu ao Selo de Boas Práticas Sustentáveis.");
}