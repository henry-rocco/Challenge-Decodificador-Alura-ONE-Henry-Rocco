// Seletores do DOM para acessar os elementos HTML

// Variável que referencia o campo de texto onde o usuário insere a mensagem
let inputTextArea = document.querySelector('textarea');

// Variável que referencia o botão de criptografar
let encryptButton = document.getElementById('cript');

// Variável que referencia o botão de descriptografar
let decryptButton = document.getElementById('descript');

// Variável que referencia a área onde o texto criptografado ou descriptografado será exibido
let outputTextDiv = document.getElementById('outputText');

// Variável que referencia o botão de copiar o texto
let copyButton = document.getElementById('copyBtn');

// Variável que referencia o contêiner da imagem inicial
let imageContainer = document.getElementById('imageContainer');

// Variável que referencia o contêiner do texto processado
let outputContainer = document.getElementById('outputContainer');

// Função para validar se o texto contém apenas letras minúsculas e espaços
function validarTexto(texto) {
    let regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

// Função para criptografar o texto
function criptografarTexto() {
    let textoOriginal = inputTextArea.value;

    if (!validarTexto(textoOriginal)) {
        alert('Erro: O texto deve conter apenas letras minúsculas, sem acentos ou caracteres especiais, mas pode conter espaços.');
        return;
    }

    // Aplica a criptografia conforme as regras especificadas
    let textoCriptografado = textoOriginal.replace(/e/g, "enter")
                                          .replace(/i/g, "imes")
                                          .replace(/a/g, "ai")
                                          .replace(/o/g, "ober")
                                          .replace(/u/g, "ufat");

    // Esconde a imagem inicial e exibe o texto criptografado e o botão de copiar
    imageContainer.style.display = 'none';
    outputContainer.style.display = 'block';
    copyButton.style.display = 'block';
    outputTextDiv.textContent = textoCriptografado;
}

// Função para descriptografar o texto
function descriptografarTexto() {
    let textoCriptografado = inputTextArea.value;

    if (!validarTexto(textoCriptografado)) {
        alert('Erro: O texto deve conter apenas letras minúsculas, sem acentos ou caracteres especiais, mas pode conter espaços.');
        return;
    }

    // Aplica a descriptografia revertendo as substituições
    let textoDescriptografado = textoCriptografado.replace(/enter/g, "e")
                                                  .replace(/imes/g, "i")
                                                  .replace(/ai/g, "a")
                                                  .replace(/ober/g, "o")
                                                  .replace(/ufat/g, "u");

    // Esconde a imagem inicial e exibe o texto descriptografado e o botão de copiar
    imageContainer.style.display = 'none';
    outputContainer.style.display = 'block';
    copyButton.style.display = 'block';
    outputTextDiv.textContent = textoDescriptografado;
}

// Função para copiar o texto criptografado/descriptografado usando a API Clipboard
function copiarTexto() {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(outputTextDiv.textContent).then(() => {
            // Limpa o texto da área de saída após copiar e exibe "Texto copiado."
            outputTextDiv.textContent = 'Texto copiado.';
            // Esconde o botão de copiar
            copyButton.style.display = 'none';
        }).catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
    } else {
        alert('A função de copiar não é suportada pelo seu navegador.');
    }
}

// Conectando as funções aos botões correspondentes
encryptButton.addEventListener('click', criptografarTexto);
decryptButton.addEventListener('click', descriptografarTexto);
copyButton.addEventListener('click', copiarTexto);
