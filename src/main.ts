let resultado = 0
function sumar() {
    (document.getElementById("siguiente") as HTMLButtonElement).value;
    resultado = resultado +1;

    const resultadoElement= document.getElementById("resultado");
    if (resultadoElement !== null && resultadoElement !== undefined) {
        resultadoElement.innerHTML=resultado.toString();
    }
}
const botonSumar= document.getElementById("siguiente");

if (botonSumar != null && botonSumar !== undefined){
    botonSumar.addEventListener("click", sumar)
}

function restar() {
    (document.getElementById("anterior") as HTMLButtonElement).value;

     resultado = resultado -1;

    const resultadoElement= document.getElementById("resultado");
    if (resultadoElement !== null && resultadoElement !== undefined) {
        resultadoElement.innerHTML=resultado.toString();
    }
}

const botonRestar= document.getElementById("anterior");

if (botonRestar != null && botonRestar !== undefined){
    botonRestar.addEventListener("click", restar)
}

function reset () {
    (document.getElementById("reset") as HTMLButtonElement).value;

    resultado = 0
    const resultadoElement= document.getElementById("resultado");
    if (resultadoElement !== null && resultadoElement !== undefined) {
        resultadoElement.innerHTML=resultado.toString();
    }

}

const botonReset= document.getElementById("reset");

if (botonReset != null && botonReset !== undefined){
    botonReset.addEventListener("click", reset)
}

function numero () {
    const turno = (document.getElementById("turno") as HTMLInputElement)
    .value;

    resultado = parseInt(turno)

    const resultadoElement= document.getElementById("resultado");
    if (resultadoElement !== null && resultadoElement !== undefined) {
        resultadoElement.innerHTML=resultado.toString();
    }
}

const botonOk= document.getElementById("enter-turno");

if (botonOk != null && botonOk !== undefined){
    botonOk.addEventListener("click", numero)
}