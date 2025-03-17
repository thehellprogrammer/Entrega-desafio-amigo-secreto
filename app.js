let participantes = [];

function nuevoAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "")
    {
        alert("Debes ingresar un nombre");
        return;
    }
    participantes.push(nombreAmigo);

    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();

}

function actualizarLista() {
    let listaAmigoUl = document.getElementById("listaAmigos")
    listaAmigoUl.innerHTML = "";
    participantes.forEach(amigo =>{
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);
    });
}

function resultadoAmigo() {
    if (participantes.length === 0){
        alert("No hay amigos para sortear, Ingresa nombres para jugar");
        return
    }
    let indiceAleatorio = Math.floor(Math.random() * participantes.length);
    let amigoSorteado = participantes[indiceAleatorio];
    let resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;
        
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", nuevoAmigo);
    document.getElementById("btnSortear").addEventListener("click", resultadoAmigo);
});