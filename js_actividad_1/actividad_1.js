// Ejercicio 1
function verificarEdad() {
    const edad = document.getElementById("edad").value;
    const mensaje = edad >= 18 ? "Eres mayor de edad." : "No eres mayor de edad.";
    document.getElementById("resultadoEdad").textContent = mensaje;
}

// Ejercicio 2
function calcularNotaFinal() {
    const nombre = document.getElementById("nombre").value;
    const carnet = document.getElementById("carnet").value;
    const examen = document.getElementById("examen").value * 0.2;
    const tareas = document.getElementById("tareas").value * 0.4;
    const asistencia = document.getElementById("asistencia").value * 0.1;
    const investigacion = document.getElementById("investigacion").value * 0.3;

    const notaFinal = examen + tareas + asistencia + investigacion;
    document.getElementById("resultadoNota").textContent = `Nombre: ${nombre}, Carnet: ${carnet}, Nota Final: ${notaFinal.toFixed(2)}`;
}

// Ejercicio 3
function calcularAumento() {
    const nombre = document.getElementById("nombreEmpleado").value;
    const salario = parseFloat(document.getElementById("salario").value);
    const categoria = document.getElementById("categoria").value.toUpperCase();
    
    let aumento = 0;

    switch (categoria) {
        case 'A':
            aumento = 0.15;
            break;
        case 'B':
            aumento = 0.30;
            break;
        case 'C':
            aumento = 0.10;
            break;
        case 'D':
            aumento = 0.20;
            break;
        default:
            alert("Categoría no válida");
            return;
    }

    const nuevoSalario = salario + (salario * aumento);
    document.getElementById("resultadoAumento").textContent = `Nombre: ${nombre}, Nuevo Salario: $${nuevoSalario.toFixed(2)}`;
}

// Ejercicio 4
function calcularMayor() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const mayor = num1 > num2 ? num1 : num2;
    document.getElementById("resultadoMayor").textContent = `El número mayor es: ${mayor}`;
}

// Ejercicio 5
function calcularDescuentoCoche() {
    const coche = document.getElementById("coche").value;
    let descuento = 0;

    switch (coche) {
        case 'FORD FIESTA':
            descuento = 0.05;
            break;
        case 'FORD FOCUS':
            descuento = 0.10;
            break;
        case 'FORD ESCAPE':
            descuento = 0.20;
            break;
        default:
            alert("Coche no válido");
            return;
    }

    document.getElementById("resultadoCoche").textContent = `Coche seleccionado: ${coche}, Descuento aplicado: ${(descuento * 100).toFixed(0)}%`;
}

// Ejercicio 6
function calcularDescuentoViaje() {
    const origen = document.getElementById("origen").value.toLowerCase();
    const destino = document.getElementById("destino").value.toLowerCase();
    let descuento = 0;

    if (origen === "palma") {
        if (destino === "la costa del sol") {
            descuento = 0.05;
        } else if (destino === "panchimalco") {
            descuento = 0.10;
        } else if (destino === "puerto el triunfo") {
            descuento = 0.15;
        }
    }

    document.getElementById("resultadoViaje").textContent = `Descuento aplicado: ${(descuento * 100).toFixed(0)}%`;
}

// Ejercicio 7
function analizarValores() {
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;

    for (let i = 0; i < 10; i++) {
        const valor = parseInt(prompt("Ingresa un valor entero:"));
        
        if (valor < 0) negativos++;
        if (valor > 0) positivos++;
        if (valor % 15 === 0) multiplosDe15++;
        if (valor % 2 === 0) sumaPares += valor;
    }

    document.getElementById("resultadoValores").textContent = `Valores negativos: ${negativos}, Valores positivos: ${positivos}, Múltiplos de 15: ${multiplosDe15}, Suma de pares: ${sumaPares}`;
}

// Ejercicio 8
function mostrarTabla() {
    const numero = parseInt(document.getElementById("numero").value);
    let resultado = "";

    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }

    document.getElementById("resultadoTabla").textContent = resultado;
}

// Ejercicio 9
function convertirTemperatura() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = (celsius * 9/5) + 32;
    let mensaje = "";

    if (fahrenheit >= 14 && fahrenheit < 32) {
        mensaje = "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        mensaje = "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        mensaje = "Temperatura alta";
    } else {
        mensaje = "Temperatura desconocida";
    }

    document.getElementById("resultadoTemperatura").textContent = `Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}, ${mensaje}`;
}

// Ejercicio 10
function calcularPromedios() {
    let edadesTurnoMañana = [];
    let edadesTurnoTarde = [];
    let edadesTurnoNoche = [];
    
    for (let i = 0; i < 5; i++) {
        edadesTurnoMañana.push(parseInt(prompt("Ingresa la edad del estudiante del turno mañana:")));
    }
    
    for (let i = 0; i < 6; i++) {
        edadesTurnoTarde.push(parseInt(prompt("Ingresa la edad del estudiante del turno tarde:")));
    }
    
    for (let i = 0; i < 11; i++) {
        edadesTurnoNoche.push(parseInt(prompt("Ingresa la edad del estudiante del turno noche:")));
    }

    const promedioMañana = edadesTurnoMañana.reduce((a, b) => a + b, 0) / edadesTurnoMañana.length;
    const promedioTarde = edadesTurnoTarde.reduce((a, b) => a + b, 0) / edadesTurnoTarde.length;
    const promedioNoche = edadesTurnoNoche.reduce((a, b) => a + b, 0) / edadesTurnoNoche.length;

    let mensajeMayor = "Turno con mayor promedio: ";

    if (promedioMañana > promedioTarde && promedioMañana > promedioNoche) {
        mensajeMayor += "Mañana";
    } else if (promedioTarde > promedioMañana && promedioTarde > promedioNoche) {
        mensajeMayor += "Tarde";
    } else {
        mensajeMayor += "Noche";
    }

    document.getElementById("resultadoPromedios").textContent = `Promedio Turno Mañana: ${promedioMañana.toFixed(2)}, Promedio Turno Tarde: ${promedioTarde.toFixed(2)}, Promedio Turno Noche: ${promedioNoche.toFixed(2)}. ${mensajeMayor}`;
}
