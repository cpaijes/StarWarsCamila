const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;

prompt

let precioProducto = prompt("Ponga el valor del producto deseado ")


let nuevoPrecio = suma(precioProducto, iva (precioProducto));
alert(nuevoPrecio);