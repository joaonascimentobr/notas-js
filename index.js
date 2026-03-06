let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputSenha = document.getElementById("senha");
let inputConfirmarSenha = document.getElementById("confirmarSenha");

let checkBox8digitos = document.getElementById("peloMenos8digitos");
let checkboxAoMenos1Maiusculo = document.getElementById("peloMenos1maiusculo");
let checkboxAoMenos1Minusculo = document.getElementById("peloMenos1minuculo");
let checkboxAoMenos1caracterEspecial = document.getElementById("caracterEspecial");

let letrasMinusculas = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

let letrasMaiusculas = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function temAoMenos8digitos() {
    let quantidade = inputSenha.value.length;
    return quantidade >= 8;
}

function temUmaSenhaMinucula() {
    let senha = inputSenha.value;
    for (let i = 0; i < senha.length; i++) {
        let caractere = senha[i];
        if (letrasMinusculas.includes(caractere)) {
            checkboxAoMenos1Minusculo.checked = true;
            return true;
        }
    }
    checkboxAoMenos1Minusculo.checked = false;
    return false;
}

function temUmaSenhaMaiuscula() {
    let senha = inputSenha.value;
    for (let i = 0; i < senha.length; i++) {
        let caractere = senha[i];
        if (letrasMaiusculas.includes(caractere)) {
            checkboxAoMenos1Maiusculo.checked = true;
            return true;
        }
    }
    checkboxAoMenos1Maiusculo.checked = false;
    return false;
    
}

function tem1caracterEspecial() {
    let senha = inputSenha.value;
    for (let i = 0; i < senha.length; i++) {
        let caractere = senha[i];
        let ehNumero = numeros.includes(caractere);
        let ehMaiuscula = letrasMaiusculas.includes(caractere);
        let ehMinuscula = letrasMinusculas.includes(caractere);
        let ehAlfanumerico = ehNumero || ehMaiuscula || ehMinuscula;

        if (!ehAlfanumerico) {
            checkboxAoMenos1caracterEspecial.checked = true;
            return true;
        }
    }
    checkboxAoMenos1caracterEspecial.checked = false;
    return false;
}

function validaComplexidadeSenha() {
    let tem8digitos = temAoMenos8digitos();
    checkBox8digitos.checked = tem8digitos;

    let temMinuscula = temUmaSenhaMinucula();
    let temMaiuscula = temUmaSenhaMaiuscula();
    let temEspecial = tem1caracterEspecial();

    return tem8digitos && temMinuscula && temMaiuscula && temEspecial;
}

function senhaOk() {
    return validaComplexidadeSenha();
}

inputSenha.addEventListener("input", validaComplexidadeSenha);
validaComplexidadeSenha();



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
