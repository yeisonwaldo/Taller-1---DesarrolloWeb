
// 1. Declaración de variables de cada tipo de dato

const texto = "Hola mundo";               // string
const edad = 25;                          // number
const estaAprobado = true;                // boolean
const valorVacio = null;                  // null
let sinDefinir;                           // undefined (se asigna por defecto si no le damos valor)
const numeroGigante = 9007199254740991n;  // bigint (se le agrega una 'n' al final)
const identificador = Symbol("id");       // symbol


// 2. Función para analizar el tipo de dato

function analizarTipo(valor) {
    // Verificamos si es null o undefined para 'esNulo'
    const esNuloOIndefinido = (valor === null || valor === undefined);
    
    // Obtenemos el tipo usando el operador typeof
    const tipoDato = typeof valor;
    
    // Creamos una descripción basada en el valor o el tipo
    let descripcionTexto = "";
    
    // NOTA: typeof null devuelve "object" en JavaScript (es un error histórico del lenguaje),
// por eso primero validamos si el valor es exactamente null.
if (valor === null) {
    // Si el valor es null, asignamos una descripción específica
    // porque typeof no lo identifica correctamente.
    descripcionTexto = "Valor nulo";

} else if (tipoDato === "string") {
    // Si el tipo es "string", significa que es una cadena de texto
    // (texto entre comillas simples, dobles o backticks).
    descripcionTexto = "Cadena de texto";

} else if (tipoDato === "number") {
    // Si el tipo es "number", representa cualquier número,
    // ya sea entero o decimal.
    descripcionTexto = "Número";

} else if (tipoDato === "boolean") {
    // Si el tipo es "boolean", solo puede tener dos valores:
    // true (verdadero) o false (falso).
    descripcionTexto = "Valor booleano (verdadero o falso)";

} else if (tipoDato === "undefined") {
    // Si el tipo es "undefined", significa que la variable
    // fue declarada pero no se le asignó ningún valor.
    descripcionTexto = "Valor no definido";

} else if (tipoDato === "bigint") {
    // Si el tipo es "bigint", es un número entero muy grande
    // que supera el límite seguro del tipo number.
    descripcionTexto = "Número entero muy grande";

} else if (tipoDato === "symbol") {
    // Si el tipo es "symbol", representa un identificador único,
    descripcionTexto = "Símbolo único";

} else {
    // Si no coincide con ninguno de los anteriores,
    // significa que es otro tipo de dato (por ejemplo, object o function).
    descripcionTexto = "Otro tipo de dato";
}

    // Retornamos el objeto con la estructura que pide el taller
    return {
        valor: valor,
        tipo: tipoDato,
        esNulo: esNuloOIndefinido,
        descripcion: descripcionTexto
    };
}

// 3. Llamados a la función e impresión en consola

console.log(analizarTipo(texto));
console.log(analizarTipo(edad));
console.log(analizarTipo(estaAprobado));
console.log(analizarTipo(valorVacio)); 
console.log(analizarTipo(sinDefinir));
console.log(analizarTipo(numeroGigante));
console.log(analizarTipo(identificador));