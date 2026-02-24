// 11. Función tablaDeMultiplicar usando un ciclo WHILE

function tablaDeMultiplicar(n, limite) {
    console.log(`\n--- Tabla de multiplicar del ${n} hasta el ${limite} ---`);
    
    // En el ciclo WHILE,se crea el contador afuera
    let multiplicador = 1; 

    // Mientras el multiplicador sea menor o igual al límite, repetimos el bloque
    while (multiplicador <= limite) {
        const resultado = n * multiplicador;
        console.log(`${n} x ${multiplicador} = ${resultado}`);
        
        // Sumarle 1 al contador para que el ciclo no sea infinito
        multiplicador++; 
    }
}


// 12. Función esPrimo usando un ciclo FOR

function esPrimo(n) {
    // "El 0 y el 1 no son primos"
    if (n === 0 || n === 1) {
        return false;
    }

    // Un número es primo si solo se divide por 1 y por sí mismo.
    // se va a usar un ciclo para intentar dividir 'n' por todos los números 
    // que hay entre el 2 y un número antes que 'n'.
    for (let i = 2; i < n; i++) {
        // El símbolo % (módulo) nos da el residuo de una división.
        // Si el residuo es 0, significa que 'i' dividió a 'n' de forma exacta.
        if (n % i === 0) {
            // Si se encontra un divisor exacto, entonces no es primo
            return false; 
        }
    }

    // Si el ciclo terminó y no encontró ningún divisor exacto, entonces SÍ es primo
    return true;
}


// 13. Función primosMenoresA usando un ciclo FOR y arreglos

function primosMenoresA(limite) {
    // se empieza con un arreglo vacío para guardar los primos que encontremos
    const listaDePrimos = []; 

    // Empezamos desde el 2 (porque el 0 y 1 no cuentan) 
    // y se revisa todos los números hasta llegar al límite.
    for (let i = 2; i < limite; i++) {
        
        // Usamos la función que creamos arriba para preguntar si el número actual (i) es primo
        if (esPrimo(i) === true) {
            // Si es primo, lo empujamos (push) a nuestra lista
            listaDePrimos.push(i); 
        }
    }

    // Retornamos la lista final llena de los números primos que encontramos
    return listaDePrimos;
}


// 14. Llamados a las funciones para mostrar resultados


// Probamos la tabla de multiplicar
tablaDeMultiplicar(5, 10); 

console.log("\n--- Verificando si son primos ---");
console.log(`¿El 7 es primo?: ${esPrimo(7)}`);   // Debería decir true
console.log(`¿El 10 es primo?: ${esPrimo(10)}`); // Debería decir false

console.log("\n--- Números primos menores a un límite ---");
const limiteElegido = 20;
const resultadoPrimos = primosMenoresA(limiteElegido);
console.log(`Los números primos menores a ${limiteElegido} son: ${resultadoPrimos}`);