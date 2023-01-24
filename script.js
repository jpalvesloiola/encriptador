function autoResize()
    {
        objTextArea = document.getElementById('msg-criptografa');
        while (objTextArea.scrollHeight > objTextArea.offsetHeight)
        {
            objTextArea.rows += 1;
        }
    }

//Variáveis
const msgCriptografa = document.querySelector(".msg-criptografa");
const msgDescriptografa = document.querySelector(".msg-descriptografa");

//Liga a função ao botão correspondente no HTML
function btnEncriptar() {
    const textoEncriptado = encriptar(msgCriptografa.value);
    msgDescriptografa.value = textoEncriptado;
    msgCriptografa.value = "";
}

//lógica da criptografia
function encriptar(stringEncriptada){
    let matrizCodigo = [["e" , "enter"], ["i", "imaes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

//lógica da descriptografia
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(msgCriptografa.value);
    msgDescriptografa.value = textoDesencriptado;
    msgCriptografa.value = "";
}

//lógica da descriptografia
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e" , "enter"], ["i", "imaes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

// Botão copiar
function copy() {
    let copyText = document.querySelector("#msg-descriptografa");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copy").addEventListener("click", copy);
  