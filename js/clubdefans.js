

function Miembro (nombre, edad, email){
    this.nombre= nombre;
    this.edad = edad;
    this.email=email;
  
}

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let email = prompt("Ingrese su email"); 

var miembro1 = new Miembro (nombre, edad, email);
console.log (miembro1);

alert ("Bienvenido, " + nombre + "al club de fans de Star Wars!")

let personajePrimero = prompt("Ingrese su personaje favorito");
let personajeSegundo = prompt("Ingrese su segundo personaje favorito");
let personajeTercero = prompt ("Ingrese su tercer personaje favorito");

var personajes = [personajePrimero, personajeSegundo, personajeTercero];

alert (personajes.sort())

const form = document.getElementById("formulario")

formulario.addEventListener("submit", function(){
    let nombreUsuario = document.getElementById("nombre").value
    console.log(nombreUsuario)

    let edadUsuario = document.getElementById("edad").value
    console.log(edadUsuario)


    let emailUsuario = document.getElementById("email").value
    console.log(emailUsuario)
})