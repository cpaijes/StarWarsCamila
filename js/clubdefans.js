

class Miembro {
    constructor(nombre, edad, email){
        this.nombre= nombre;
        this.edad = edad;
        this.email=email;
    }
}


//let nombre = prompt("Ingrese su nombre");
//let edad = prompt("Ingrese su edad");
//let email = prompt("Ingrese su email"); 

//var miembro1 = new Miembro (nombre, edad, email);
//console.log (miembro1);

//alert ("Bienvenido, " + nombre + "al club de fans de Star Wars!")

//let personajePrimero = prompt("Ingrese su personaje favorito");
//let personajeSegundo = prompt("Ingrese su segundo personaje favorito");
//let personajeTercero = prompt ("Ingrese su tercer personaje favorito");

//var personajes = [personajePrimero, personajeSegundo, personajeTercero];

//alert (personajes.sort())

//let form = document.getElementById("formulario");
//form.addEventListener("submit", function(e){
   // e.preventDefault();
//});

let boton = document.getElementById("botonFormulario");
boton.addEventListener("click", cargarMiembro);


function datosFormulario(){
    let nombreUsuario = document.getElementById("nombre").value;
    let edadUsuario = document.getElementById("edad").value;
    let emailUsuario = document.getElementById("email").value;
    let miembro1 = new Miembro (nombre, edad, email);
    console.log (miembro1);
    mostrarMiembro(miembro1);
}

function mostrarMiembro (miembro) {
    let form = document.getElementById("formulario");
    formulario.innerHTML = "";

    let saludoMiembro  = document.createElement("div");
    saludoMiembro.className = "saludoMiembro";
    saludoMiembro.innerHTML = `Gracias ${miembro.nombre} por suscribirte al club de fans! Recibirás novedad a través de ${miembro.cliente}`;

    formulario.appendChild(saludoMiembro);


}