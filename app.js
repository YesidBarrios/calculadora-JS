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
