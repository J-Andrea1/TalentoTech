function esVocal(letra) {
    const vocales = 'aeiouAEIOU';
    
    if (!isNaN(entrada) && entrada.trim() !== '') {
        return "Error: Debes ingresar una letra, no un número.";
    }
    
    if (letra.length !== 1) {
      return "Error: Debes ingresar una sola letra.";
    } else if (vocales.includes(letra)) {
      return `La letra '${letra}' es una vocal.`;
    } else {
      return `La letra '${letra}' es una consonante.`;
    }
}
  
// Pide al usuario que ingrese una letra
const entrada = prompt("Ingresa una letra:");
  
// Llama a la función y muestra el resultado
const resultado = esVocal(entrada);
document.write(resultado);