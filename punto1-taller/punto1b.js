// 4. Coerción implícita (Cuando JavaScript adivina y cambia los tipos automáticamente)

// Pregunta 1: "5" + 3
console.log('Resultado de "5" + 3 es:', "5" + 3); 
// EXPLICACIÓN: El resultado es "53". 
// ¿Por qué? Porque el símbolo "+" sirve para sumar, pero también para pegar (concatenar) textos. 
// Como "5" es un texto, JavaScript prefiere convertir el número 3 a texto y simplemente los junta.

// Pregunta 2: "5" - 3
console.log('Resultado de "5" - 3 es:', "5" - 3); 
// EXPLICACIÓN: El resultado es 2.
// ¿Por qué? Porque el símbolo "-" solo sirve para matemáticas. No se pueden restar textos.
// Entonces, JavaScript se da cuenta de esto y convierte el texto "5" en el número 5 para poder hacer la resta.

// Pregunta 3: false + "JS"
console.log('Resultado de false + "JS" es:', false + "JS"); 
// EXPLICACIÓN: El resultado es "falseJS".
// ¿Por qué? Al igual que en el primer caso, como hay un texto ("JS") y un símbolo "+", 
// JavaScript convierte el valor booleano 'false' en un texto y los pega.

// Pregunta 4: null + 1
console.log('Resultado de null + 1 es:', null + 1); 
// EXPLICACIÓN: El resultado es 1.
// ¿Por qué? En matemáticas, JavaScript considera que 'null' (vacío) vale 0. 
// Entonces hace la suma normal: 0 + 1 = 1.

// Pregunta 5: true + 1
console.log('Resultado de true + 1 es:', true + 1); 
// EXPLICACIÓN: El resultado es 2.
// ¿Por qué? En programación, el valor 'true' equivale matemáticamente a 1 (y 'false' equivale a 0).
// Entonces hace la suma: 1 + 1 = 2.



// 5. Coerción explícita (Cuando nosotros obligamos a cambiar el tipo)

function convertirDatos(valor) {
    // Usamos Number(), String() y Boolean() para forzar la conversión
    const convertidoANumero = Number(valor);
    const convertidoATexto = String(valor);
    const convertidoABooleano = Boolean(valor);

    // Retornamos un objeto con los resultados
    return {
        original: valor,
        aNumero: convertidoANumero,
        aTexto: convertidoATexto,
        aBooleano: convertidoABooleano
    };
}

console.log("\n--- Prueba de convertirDatos ---");
console.log(convertirDatos("10")); // Probamos con un texto que tiene un número
console.log(convertirDatos(0));    // Probamos con el número cero



// 6. Comparar valores (== vs ===)

function compararValores(a, b) {
    // El doble igual (==) es "relajado". 
    // Compara los valores, pero si son de tipos diferentes, intenta convertirlos para ver si se parecen.
    const comparacionDoble = (a == b);

    // El triple igual (===) es "estricto". 
    // Compara los valores y tambien los tipos de datos. No hace conversiones automáticas.
    const comparacionTriple = (a === b);

    return {
        valorA: a,
        valorB: b,
        sonIgualesConDobleIgual: comparacionDoble,
        sonIgualesConTripleIgual: comparacionTriple
    };
}

console.log("\n--- Prueba de compararValores ---");
// Vamos a comparar el NÚMERO 5 con el TEXTO "5"
console.log(compararValores(5, "5")); 
// Explicación de lo que saldrá:
// Con == dará 'true' porque ambos representan el número cinco.
// Con === dará 'false' porque uno es de tipo Number y el otro es de tipo String.