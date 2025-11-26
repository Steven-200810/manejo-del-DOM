const boton = document.getElementById('boton-color');
const color = document.getElementById('color');

const anterior = document.getElementById('anterior');
const actual = document.getElementById('actual');
const titulo = document.getElementById('titulo');

let colorActual = "#2B807B";
let colorAnterior = "#2B807B";

function generarColorAleatorio() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceAleatorio];
    }

    return colorHex;
}

boton.addEventListener('click', function () {

    // Guardar el color actual
    colorAnterior = colorActual;

    // Generar color nuevo
    colorActual = generarColorAleatorio();

    // Actualizar pantalla
    color.textContent = colorActual;
    anterior.style.backgroundColor = colorAnterior;
    actual.style.backgroundColor = colorActual;

    // El título ahora se combina con el color del fondo actual
    titulo.style.backgroundColor = colorActual;
});
