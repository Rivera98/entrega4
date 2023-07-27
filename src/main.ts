function sumar() {
    const sumar1 = (document.getElementById("siguiente")as HTMLInputElement).value;

    const resultado = parseInt(sumar1) + 1;

    const resultadoElement = document.getElementById("resultado");
    if(resultadoElement !== null && resultadoElement !== undefined){
    resultadoElement.innerHTML = resultado.toString();
    }
}

function restar(){
    const restar1 = (document.getElementById("anterior")as HTMLInputElement).value;

    const resultado= parseInt(restar1) - 1;

    const resultadoElement = document.getElementById("resultado");
    if(resultadoElement !== null && resultadoElement !== undefined){
    resultadoElement.innerHTML = resultado.toString();
    }
}

const botonSiguiente = document.getElementById("siguiente");
if (botonSiguiente!== null && botonSiguiente !== undefined){
botonSiguiente.addEventListener("click", sumar);
}

const botonAnterior = document.getElementById ("anterior");
if (botonAnterior !== null && botonAnterior !== undefined){
botonAnterior.addEventListener("click", restar);
}
let resultado= 1