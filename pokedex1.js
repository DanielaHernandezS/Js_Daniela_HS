function load(){
    document.getElementById("boton").addEventListener("click", infoPokemon)
}

function infoPokemon(){
    let resultado = document.getElementById("pokeName").value

    fetch("https://pokeapi.co/api/v2/pokemon/" + resultado)
    .then(reponse => reponse.json())
    .then(response => {
        document.getElementById("pokemon").setAttribute("src",response["sprites"]["front_default"])
        document.getElementById("nombre").textContent = response["species"]["name"]
        document.getElementById("tipo").textContent = response["types"]["0"]["type"]["name"]
        document.getElementById("habilidad1").textContent = response["abilities"]["0"]["ability"]["name"]
        document.getElementById("habilidad2").textContent = response["abilities"]["1"]["ability"]["name"]
       
        document.getElementById("movimiento1").textContent = response["moves"]["0"]["move"]["name"]
        document.getElementById("movimiento2").textContent = response["moves"]["1"]["move"]["name"]
        document.getElementById("movimiento3").textContent = response["moves"]["2"]["move"]["name"]

    })
    .catch(error => console.log(error))
}
window.addEventListener('DOMCounteloaded',load())