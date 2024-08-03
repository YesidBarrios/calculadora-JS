// Funciones de operación
function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  if (num2 === 0) return "Error";
  return num1 / num2;
}

// Función para actualizar el textarea
function updateDisplay(element) {
  const resultado = document.getElementById("resultado");
  resultado.value += element.value;
}

// Función para limpiar el textarea
function clearDisplay() {
  document.getElementById("resultado").value = "";
}

// Función para calcular la operación
function calcular() {
  const resultado = document.getElementById("resultado");
  try {
    resultado.value = eval(resultado.value.replace("×", "*").replace("÷", "/"));
  } catch (error) {
    resultado.value = "Error";
  }
}
