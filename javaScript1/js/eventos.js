let boton = document.getElementById("miBoton");
boton.addEventListener("click", function(){
document.body.style.backgroundColor = "yellow"; 
});
var parrafo = document.getElementById("miParrafo");
document.addEventListener("keydown", function(event){
parrafo.innerHTML = "Presionaste la tecla " + event.key;
});