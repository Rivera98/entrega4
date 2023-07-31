let resultado = 0
function sumar() {
    // Leer los valores de los inputs
    const sumando1 = (document.getElementById("siguiente") as HTMLButtonElement)
    .value;
     resultado = resultado +1;

    const resultadoElement= document.getElementById("resultado");
    if (resultadoElement !== null && resultadoElement !== undefined) {
        resultadoElement.innerHTML=resultado.toString();
    }
}
function restar() {
    
    const restarUno = (document.getElementById("anterior") as HTMLButtonElement)
    .value;
    
     resultado = resultado -1;
    

    const resultadoElement= document.getElementById("resultado");
    if (resultadoElement !== null && resultadoElement !== undefined) {
        resultadoElement.innerHTML=resultado.toString();
    }
}
const botonSumar= document.getElementById("siguiente");

if (botonSumar != null && botonSumar !== undefined){
    botonSumar.addEventListener("click", sumar)
}
const botonRestar= document.getElementById("anterior");