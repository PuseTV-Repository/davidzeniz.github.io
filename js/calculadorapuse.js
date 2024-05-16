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

    // Calcular el descuento de intereses
    var descuentoIntereses = income - valorsindescuentointeres;

    // Mostrar el resultado en el campo de "DESCUENTO INTERESES"
    document.getElementById("descuentoIntereses").innerText = descuentoIntereses.toFixed(2);

    // Mostrar el valor del capital en el campo "CAPITAL"
    document.getElementById("capitalInicial").innerText = capital.toFixed(2);


     // Calcular el interés con descuento
     var interesConDescuento = income - descuentoIntereses;

     // Mostrar el resultado en el campo de "INTERES CON DSTO"
     document.getElementById("interesConDescuento").innerText = interesConDescuento.toFixed(2);

     // Calcular la DEUDA TOTAL 2 como la suma de "capital" e "interes con descuento"
    var nuevaDeudaTotal2 = capital + interesConDescuento;

    // Mostrar el resultado en el campo de "DEUDA TOTAL 2"
    document.getElementById("deudaTotal2").innerText = nuevaDeudaTotal2.toFixed(0);

    

    ////SEGUNDO CARD VALORES

    // PARA EL CAPITAL
    var valor = document.getElementById('capitalInput').value;   
    // Asignar el valor al input del segundo card
    document.getElementById('capital2card').value = valor;


    // PARA EL INTERES
    var valor = document.getElementById('incomeInput').value;
    // Asignar el valor al input del segundo card
    document.getElementById('income2').value = valor;



}
