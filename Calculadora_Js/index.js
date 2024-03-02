// CALCULATOR PROGRAM 

// DECLARAS LA VARIABLE DISPLAY, LA CUAL VA A COGER LAS ID'S DE LOS BOTONES QUE PULSES
const display = document.getElementById("display"); // Te coge los ID de los elementos de dentro del display.

// FUNCION PARA QUE SE MUESTREN LOS NUMEROS ARRIBA
function appendToDisplay(input) {
    display.value += input; // Te hace que al clicar un número de la calculadora u operación te lo escriba en el display de arriba.
}

// FUNCION PARA LIMPIAR LA PANTALLA
function clearDisplay() {
    display.value = ""; // Para borrar los datos del display de arriba y limpiar las operaciones.
}

// FUNCION DE LA CALCULADORA
function calcular() {
    try {
        display.value = eval(display.value); // Coge el valor que haya en el display y lo evalua, es decir que te lo calcula, y luego te devuelve el valor.
    }
    catch (error) {
        display.value = "Error"; // Si salta algún error o no se puede completar la operación, te sale un mensaje de error,
        display.value = "";     //  y te limpia la pantalla de nuevo.
    }
}
