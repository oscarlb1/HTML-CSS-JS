// CALCULATOR PROGRAM
const display = document.getElementById("display"); // Coge el ID del display. Es donde se mostrará los números que seleccionas.

// FUNCION PARA QUE APAREZCAN LOS VALORES AL CLICKARLOS
function appendToDisplay(input) {
    display.value += input; // Hace que el boton que cliques aparezca en la barra de arriba de la calculadora.
}

// FUNCION PARA LIMPIAR LOS VALORES
function clear() {
    display.value = ""; // Hace que el valor arriba sea "" por lo que borra lo que haya puesto.
}

// FUNCION PARA CALCULAR  LA OPERACIÓN EN EL DISPLAY
function calculate() {
    try {
        display.value = eval(display.value); // Te resuelve los valores que hay en el display.
    }
    catch (error) {
        display.value = "Error." // Si  no se puede resolver la operación te salta un mensaje de error.
    }
}