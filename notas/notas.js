//obter código do usuário por query string

function obterIdNota() {
    //Suponha a URL: http://site.com.br/notas/notas.html?idUsuario=1
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let idUsuario = urlParams.get("idUsuario");
    if (!idUsuario) {
        console.warn("idUsuario não encontrado na query string");
        return;
    }
    console.log("idUsuario:", idUsuario);
}

obterIdNota();

let notas = [
    {
        "descricao": "Fazer compras",
        "dataLimite": "2026-03-10T03:42:52.414Z",
        "usuarioId": 0
    }
]

let template = document.getElementById("nota-template");
let containerNotas = document.getElementById("containerNotas");

for(let nota in notas) {
    let clone = template.content.cloneNode(true);
    clone.querySelector(".descricao").textContent = notas[nota].descricao;
    containerNotas.appendChild(clone);
}

function carregarNotas(doIdUsuario) {
    //aqui você faria a chamada para a API usando o doIdUsuario para obter as notas do usuário
}