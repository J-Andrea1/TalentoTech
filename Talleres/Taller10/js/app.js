/*//Punto 1
let nombre = "Jeimy";
let edad = 34;
document.write("Tu nombre es " + nombre + " y tu edad es: " + edad + "<br>" + "<br>");
*/
// Punto 2
let esEstudiante = true;
let altura = 165;
document.write("El tipo de dato de la variable esEstudiante es: " + typeof esEstudiante + "<br>");
document.write("El tipo de dato de la variable altura es: " + typeof altura + "<br>" + "<br>");

// Punto 3
const numPI = 3.14159;
//const numPI =5;
document.write("El número PI es: " + numPI + "<br>" + "<br>");

// Punto 4
let a = 2;
let b = 5;

suma = a + b;
resta = a - b;
multiplicacion = a * b;
division = a / b;
modulo = a % b;

alert("El resultado de a + b es: " + suma + "\n" + "El resultado de a - b es: " + resta
    + "\n" + "El resultado de a * b es: " + multiplicacion + "\n" + "El resultado de a / b es: " + division
    + "\n" + "El resultado de a % b es: " + modulo);
/*
//Punto 5
let x = 10;
x += 10;
x -= 10;
x *= 10;
x /= 10;
x %= 10;
document.write("El valor de x es: " + x + "<br>" + "<br>");
*/
// Punto 6
let contador1 = 0;
let contador2 = 1;
contador1 ++;
contador2 --;

alert("El valor del contador1 es: " + contador1 + "\n" + "El valor del contador2 es : " +contador2 + "\n")

// Punto 7
let p = 5;
let q = 7;

alert("p es mayor que q: " + (p > q) + "\n" + "p es menor que q: " + (p < q) + "\n" + "p es mayor igual que q: " + (p >= q) +
"\n" + "p es menor igual que q: " + (p <= q) + "\n" + "p es == que q: " + (p == q) + "\n" + "p es === que q: " + (p === q));

// Punto 8
let x = true;
let y = false;
let z = false;

alert("El resultado de x && y es: " + (x && y) + "\n" + "El resultado de x || y es: " + (x || y) + "\n" + "El resultado de !x es: " +
 (!x) + "\n" + "El resultado de x && y && z es: " + (x && y && z));

 // Punto 9
 let nombre = "Jeimy";
 let apellido = "Villegas";
 alert("Tu nombre completo es: " + nombre + " " + apellido);

 // Punto 10
 let numero = 34;
 let cadena = numero.toString();

 alert("El número en formato de cadena es: " + cadena + " " + (numero + cadena));

 // Punto 11
 let distanciaKm = 70;
 let distanciaM = distanciaKm*1000;
 let distanciaCm = distanciaKm*100000;
 let distanciaMilla = distanciaKm/1.609344;
 
 alert(distanciaKm + " km en metros es: " + distanciaM + "\n" + distanciaKm + " km en centimetros es: " + distanciaCm + "\n" + 
    distanciaKm + " km en millas es: " + distanciaMilla);

// Punto 12
let base = 10;
let altura1 = 15;
let altura2 = 15;

let perimetro = (base+altura1+altura2);
let area = (base * altura1) / 2;

alert("El área del triángulo es: " + area + "\n" + "El perimetro es: " + perimetro);

//punto 13
let calificacion1 = 4;
let calificacion2 = 5;
let calificacion3 = 5;

let promedio = (calificacion1 + calificacion2 + calificacion3) / 3;
alert("El promedio de las calificaciones es: " + promedio); 

//punto 14
let precioOriginal = 8500;
let descuento = (15/100);
let precioFinal =(descuento * precioOriginal);

alert("El precio final con descuento es: " + precioFinal);

//punto 15
let dolares = 4;
let euros = 92;
let librasEsterlinas = 78;
let yenes = 146;

alert(dolares + " " + "dolares a euros son: " + (dolares*euros)+"\n"+
    dolares + " "  + "dolares a libras esterlinas son: " + (dolares*librasEsterlinas)+"\n"+
    dolares + " " + "dolares a yenes son: " + (dolares*yenes));
