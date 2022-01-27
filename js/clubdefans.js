class Miembro {
    constructor(nombre, edad, email){
        this.nombre= nombre;
        this.edad = edad;
        this.email=email;
    }
}


let boton = document.getElementById("botonFormulario");
boton.addEventListener("click", datosFormulario);


function datosFormulario(){
    let nombreUsuario = document.getElementById("nombre").value;
    let edadUsuario = document.getElementById("edad").value;
    let emailUsuario = document.getElementById("email").value;
    let miembro1 = new Miembro (nombreUsuario, edadUsuario, emailUsuario);
    mostrarMiembro(miembro1);
    guardarDatos(miembro1);
}

function guardarDatos (Miembro){
    localStorage.setItem("Miembros", JSON.stringify(Miembro))
}


function mostrarMiembro (miembro) {
    let form = document.getElementById("formulario");
    formulario.innerHTML = "";

    let saludoMiembro  = document.createElement("div");
    saludoMiembro.className = "saludoMiembro";
    saludoMiembro.innerHTML = `Gracias ${miembro.nombre} por suscribirte al club de fans! Recibirás novedad a través de ${miembro.email}`;

    formulario.appendChild(saludoMiembro);


}