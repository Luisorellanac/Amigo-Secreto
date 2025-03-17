let amigos = [];

/**
 * Escribe un nuevo amigo en array "amigos - añadir".
 * Valida que el nombre de amigo no esté vacío antes de agregar.
 */
function agregarAmigo() {
let nombreAmigo = document.getElementById("amigo").value;

    if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre");
} 
    else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
}
}

/**
 * Actualizar visualización de la lista de amigos al DOM, creando elementos <li> para cada amigo.
 */
function mostrarListaAmigo() {
let listaAmigos = document.querySelector("#listaAmigos");
listaAmigos.innerHTML = "";

for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
}
}

/**
 * Sortea y muestra un amigo de la lista de amigos de manera aleatoria.
 * Verificar que lista no esté vacía antes de realizar el sorteo.
 */
function sortearAmigo() {
let cantidadAmigos = amigos.length;
    if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
} 

    else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
}
}