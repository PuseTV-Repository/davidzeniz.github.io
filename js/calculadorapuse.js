function calculateInterest() {
    // Obtener el valor del capital ingresado
    var capitalInput = document.getElementById("capitalInput").value.trim();
    
    // Obtener el valor del ingreso ingresado
    var incomeInput = document.getElementById("incomeInput").value.trim();

    // Validar que ambos campos no estén vacíos
    if (capitalInput === "" || incomeInput === "") {
        alert("Por favor ingresa valores para el capital y el ingreso antes de calcular.");
        return; // Detener la ejecución de la función si falta algún valor
    }

    // Convertir los valores a números flotantes
    var capital = parseFloat(capitalInput);
    var income = parseFloat(incomeInput);

    // Calcular el interés sumando el capital y el ingreso
    var totalDebt = capital + income;

    // Mostrar el resultado en el campo de "Deuda Total"
    document.getElementById("resultadoDeudaTotal").innerText = totalDebt.toFixed(2); // toFixed(2) para redondear a 2 decimales

    // Calcular el valor sin descuento de intereses
    var descuentoInput = parseFloat(document.getElementById("descuentoInput").value);
    var valorsindescuentointeres = income - (income * descuentoInput);

    // Mostrar el resultado en el campo de "VALOR SIN DSTO INTERESES"
    document.getElementById("valorSinDescuentoInteres").innerText = valorsindescuentointeres.toFixed(2);
}
