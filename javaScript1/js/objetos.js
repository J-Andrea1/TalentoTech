const producto={
    nombre: "Manzana",
    categoria: "frutas",
    precio: 2000
}
const persona={
    nombre:"Homero",
    apellido:"Simpson",
    id:"55555",
    edad: 42,
    direccion: {
        calle: 10,
        ciudad: "Sprienfield",
        país: "EEUU"
    }
}
document.write(persona.nombre+"<br>");
document.write(persona.apellido+"<br>");
document.write(persona.edad+"<br>");
document.write(persona["id"]+"<br>");
document.write(persona.direccion.ciudad+"<br>");


function saludar (nombre){
    document.write("Hola "+nombre+"<br>");
}
saludar("Nena");

//Crea una función que tome un array de números como parámetro y devuelva el número más grande del array:
function encontrarNumeroMayor(array) {
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}
document.write(encontrarNumeroMayor([2, 7, 3, 9, 4])+"<br>"); // Output: 9

//Crea una función que tome un array de strings como parámetro y devuelva un nuevo array con todos los strings en mayúsculas:
function convertirAMayusculas(array) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
    nuevoArray.push(array[i].toUpperCase());
    }
    return nuevoArray;
}
document.write(convertirAMayusculas(["hola", " mundo"])+"<br>"); // Output: ["HOLA", "MUNDO"]

//Crea una función que tome dos números como parámetros y devuelva el resultado de elevar el primer número a la potencia del segundo número:
function elevarAExponente(base, exponente) {
    return Math.pow(base, exponente);
    }
document.write(elevarAExponente(2, 3)+"<br>"); // Output: 8
//Crea una función que tome un array de números como parámetro y devuelva la suma de todos los números del array:
function sumarNumeros(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
    suma += array[i];
    }
    return suma;
}
document.write(sumarNumeros([1, 2, 3, 4])+"<br>"); // Output: 10

//Crea una función que tome un objeto como parámetro y devuelva un array con todas las propiedades del objeto:
function obtenerPropiedades(objeto) {
    return Object.keys(objeto);
    }
document.write(obtenerPropiedades({a: 1, b: 2, c: 3})); // Output: ["a", "b", "c"]