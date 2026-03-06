let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputSenha = document.getElementById("senha");
let inputConfirmarSenha = document.getElementById("confirmarSenha");

let checkBox8digitos = document.getElementById("peloMenos8digitos");
let checkboxAoMenos1Maiusculo = document.getElementById("peloMenos1maiusculo");
let checkboxAoMenos1Minusculo = document.getElementById("peloMenos1minuculo");
let checkboxAoMenos1caracterEspecial = document.getElementById("caracterEspecial");

function temAoMenos8digitos() {
    let quantidade = inputConfirmarSenha.value.length;
    if (quantidade > 7) {
        return true
    } else {
        return false
    }
}

function temUmaSenhaMinucula() {

}

function temUmaSenhaMaiuscula() {
    let senha = inputSenha.value;
    for (let i = 0; i < senha.length; i++) {
        let caractere = senha[i];
        if (caractere === caractere.toUpperCase() && caractere !== caractere.toLowerCase()) {
            checkboxAoMenos1Maiusculo.checked = true;
            return true;
        }
    }
    checkboxAoMenos1Maiusculo.checked = false;
    return false;
    
}

function tem1caracterEspecial() {

}

function validaComplexidadeSenha() {

}

function senhaOk() {
    return temUmaSenhaMaiuscula();
}



let form = document.getElementById("formCadastro");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (senhaOk()) {
        console.log("senhaOK")
    } else {
        console.log("senha fora do padrão")
    }
});

function validarSenhasIguais() {
    let resultado = inputSenha.value == inputConfirmarSenha.value;
    return resultado;
}

function criarUsuario() {
    let servidor = "https://notas-api-qvzz.onrender.com/";
    let endpoint = "usuarios";
    let url = servidor + endpoint;

    let novoUsuario = {
        nome: inputNome.value,
        email: inputEmail.value,
        "password": inputConfirmarSenha.value
    }

    let requestInit = {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novoUsuario)
    }

    fetch(url, requestInit).then(response => {
            console.log(response);
        })    
}
