// 7 y 8. Función para clasificar la nota (Switch y If/Else)

function clasificarNota(nota) {
    let letraAsignada = '';
    let estadoAsignado = '';
    let mensajeAsignado = '';

    // Uso de la estructura SWITCH para asignar la letra
    // Como evaluamos rangos (ej: entre 4.0 y 4.4), le decimos al switch
    // que evalue (true) para ver cuál de los "case" se cumple como verdadero.
    switch (true) {
        case (nota >= 4.5 && nota <= 5.0):
            letraAsignada = 'A';
            break;
        case (nota >= 4.0 && nota < 4.5):
            letraAsignada = 'B';
            break;
        case (nota >= 3.5 && nota < 4.0):
            letraAsignada = 'C';
            break;
        case (nota >= 3.0 && nota < 3.5):
            letraAsignada = 'D';
            break;
        default:
            // Si no cumplio ninguna de las anteriores, es menor a 3.0
            letraAsignada = 'F';
            break;
    }

    // Uso de la estructura IF/ELSE para determinar estado y mensaje
    if (nota >= 3.0) {
        estadoAsignado = 'Aprobado';
        // se asigna un mensaje motivacional dependiendo de la nota
        if (letraAsignada === 'A') {
            mensajeAsignado = '¡Excelente trabajo, sigue así!';
        } else {
            mensajeAsignado = '¡Buen trabajo, aprobaste!';
        }
    } else {
        estadoAsignado = 'Reprobado';
        mensajeAsignado = 'Debes esforzarte un poco más para la próxima.';
    }

    // Retornamos el objeto con la estructura solicitada
    return {
        letra: letraAsignada,
        estado: estadoAsignado,
        mensaje: mensajeAsignado,
        puntos: nota
    };
}


// 9. Arreglo de notas y ciclo FOR

const notas = [4.8, 3.2, 2.5, 4.0, 5.0, 1.5, 3.8, 4.2];

// Variables preparadas para guardar los cálculos finales
let sumaDeNotas = 0;
let cantidadAprobados = 0;
let cantidadReprobados = 0;

// Para la nota más alta y más baja, se asume al inicio que es la primera nota del arreglo
let notaMasAlta = notas[0];
let notaMasBaja = notas[0];

console.log("--- RESULTADOS INDIVIDUALES ---");

// Ciclo FOR: Empieza en 0, llega hasta el final de la lista, y avanza de a 1 (i++)
for (let i = 0; i < notas.length; i++) {
    const notaActual = notas[i];
    
    // Llamamos a la funcion
    const resultado = clasificarNota(notaActual);
    
    // Imprimimos el resultado de este estudiante
    console.log(`Nota: ${resultado.puntos} | Letra: ${resultado.letra} | Estado: ${resultado.estado} | Mensaje: ${resultado.mensaje}`);

    
    // 10. Cálculos de estadísticas para el final
   
    
    // 1. Sumamos las notas para luego sacar el promedio
    sumaDeNotas = sumaDeNotas + notaActual;

    // 2. Contamos si aprobó o reprobó
    if (resultado.estado === 'Aprobado') {
        cantidadAprobados = cantidadAprobados + 1;
    } else {
        cantidadReprobados = cantidadReprobados + 1;
    }

    // 3. Revisamos si es la nota más alta o más baja hasta el momento
    if (notaActual > notaMasAlta) {
        notaMasAlta = notaActual;
    }
    
    if (notaActual < notaMasBaja) {
        notaMasBaja = notaActual;
    }
}

// Fuera del ciclo (cuando ya terminó de revisar a todos), calculamos el promedio
const promedioDelGrupo = sumaDeNotas / notas.length;

console.log("\n--- ESTADÍSTICAS FINALES DEL GRUPO ---");
console.log(`Promedio general: ${promedioDelGrupo}`);
console.log(`Estudiantes Aprobados: ${cantidadAprobados}`);
console.log(`Estudiantes Reprobados: ${cantidadReprobados}`);
console.log(`La nota más alta fue: ${notaMasAlta}`);
console.log(`La nota más baja fue: ${notaMasBaja}`);