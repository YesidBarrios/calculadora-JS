// Función para actualizar el textarea
function updateDisplay(value) {
  const resultado = document.getElementById("resultado");
  resultado.value += value;
}

// Función para limpiar el textarea
function clearDisplay() {
  document.getElementById("resultado").value = "";
}

// Función para calcular la operación
function calcular() {
  const resultado = document.getElementById("resultado");
  try {
    // Reemplazar los operadores para que sean válidos en JavaScript
    resultado.value = eval(resultado.value.replace("×", "*").replace("÷", "/"));
  } catch (error) {
    resultado.value = "Error"; // Mostrar "Error" si algo sale mal
  }
}


/* // Función para actualizar el textarea
function updateDisplay(value) {
  const resultado = document.getElementById("resultado");
  resultado.value += value;
}

// Función para limpiar el textarea
function clearDisplay() {
  document.getElementById("resultado").value = "";
}

// Función para calcular la operación de manera segura
function calcular() {
  const resultado = document.getElementById("resultado");
  try {
    // Reemplazar los operadores no válidos en JavaScript
    const expression = resultado.value.replace("×", "*").replace("÷", "/");
    // Sanear la expresión eliminando caracteres no válidos
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
    // Evaluar la expresión de manera segura
    resultado.value = new Function('return ' + sanitizedExpression)();
  } catch (error) {
    resultado.value = "Error"; // Mostrar "Error" si algo sale mal
  }
}
 */