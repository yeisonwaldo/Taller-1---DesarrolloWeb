// ============================================================
// PUNTO 4 - Objetos en JavaScript
// Sistema de gestión de estudiantes universitarios
// Construcción de Software III - 2026-I
// ============================================================

// ============================================================
// PARTE A: Definición y manipulación de objetos (10 pts)
// ============================================================

// Definimos el objeto estudiante con todas las propiedades que pide el enunciado.
// Las notas son un array de objetos porque cada nota tiene dos datos: materia y calificacion.
const estudiante = {
  nombre: "Carlos",
  apellido: "Ramirez",
  codigo: "2023001",
  programa: "Ingeniería de Sistemas",
  semestre: 5,
  notas: [
    { materia: "Construcción de Software III", calificacion: 4.2 },
    { materia: "Base de Datos", calificacion: 3.8 },
    { materia: "Redes de Computadores", calificacion: 4.5 },
    { materia: "Cálculo Diferencial", calificacion: 3.1 },
  ],
  activo: true,

  // Recorre el array de notas con reduce para acumular la suma,
  // luego divide entre la cantidad de materias y redondea a 2 decimales.
  calcularPromedio() {
    if (this.notas.length === 0) return 0;
    const suma = this.notas.reduce((acc, n) => acc + n.calificacion, 0);
    return parseFloat((suma / this.notas.length).toFixed(2));
  },

  // Concatena nombre y apellido usando template literal.
  obtenerNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },

  // Llama a calcularPromedio() internamente para no repetir lógica.
  // El umbral de aprobación en la universidad es 3.0.
  estaAprobado() {
    return this.calcularPromedio() >= 3.0;
  },

  // Recibe los datos de la nueva nota y los empuja al array como un objeto literal.
  // @param {string} materia - nombre de la materia a agregar
  // @param {number} calificacion - calificación entre 0.0 y 5.0
  agregarNota(materia, calificacion) {
    this.notas.push({ materia, calificacion });
    console.log(`Nota agregada: ${materia} - ${calificacion}`);
  },

  // Arma un string con todos los datos del estudiante usando template literals.
  // Es útil para imprimir un resumen legible sin tener que acceder propiedad por propiedad.
  toString() {
    const promedio = this.calcularPromedio();
    const estado = this.estaAprobado() ? "Aprobado" : "Reprobado";
    const materiasStr = this.notas
      .map((n) => `    - ${n.materia}: ${n.calificacion}`)
      .join("\n");

    return `
========================================
  ESTUDIANTE: ${this.obtenerNombreCompleto()}
========================================
  Codigo:     ${this.codigo}
  Programa:   ${this.programa}
  Semestre:   ${this.semestre}
  Activo:     ${this.activo ? "Si" : "No"}
  Notas:
${materiasStr}
  Promedio:   ${promedio}
  Estado:     ${estado}
========================================`;
  },
};

// Probamos cada método del objeto para verificar que funcionen correctamente
console.log("========== PARTE A: OBJETO ESTUDIANTE ==========\n");

console.log("Nombre completo:", estudiante.obtenerNombreCompleto());
console.log("Promedio:", estudiante.calcularPromedio());
console.log("Esta aprobado?", estudiante.estaAprobado());

// Agregamos una nota nueva para probar que el array se actualiza
estudiante.agregarNota("Electiva I", 4.0);

// toString() muestra el resumen completo ya con la nota nueva incluida
console.log(estudiante.toString());

// ============================================================
// PARTE B: Prototipos y Object Methods (15 pts)
// ============================================================

console.log("\n========== PARTE B: PROTOTIPOS Y OBJECT METHODS ==========\n");

// Usamos función constructora (no clase) porque el enunciado lo pide explícitamente.
// Cada instancia tendrá su propio array inscritos para no compartirlo entre cursos.
// @param {string} nombre - nombre del curso
// @param {string} codigo - código del curso
// @param {number} creditos - cantidad de créditos académicos
function Curso(nombre, codigo, creditos) {
  this.nombre = nombre;
  this.codigo = codigo;
  this.creditos = creditos;
  this.inscritos = []; // se inicializa vacío, se llena con inscribirEstudiante()
}

// Agrega el objeto estudiante al array inscritos de esta instancia del curso.
// Como el objeto estudiante tiene sus propios métodos, los podemos usar desde aquí.
Curso.prototype.inscribirEstudiante = function (estudiante) {
  this.inscritos.push(estudiante);
  console.log(`Estudiante "${estudiante.obtenerNombreCompleto()}" inscrito en ${this.nombre}`);
};

// Mapea el array inscritos y extrae solo el nombre completo de cada uno.
// Retorna un array de strings, no de objetos.
Curso.prototype.obtenerListado = function () {
  return this.inscritos.map((e) => e.obtenerNombreCompleto());
};

// Suma los promedios individuales de cada inscrito y divide entre la cantidad total.
// Si no hay inscritos retorna 0 para evitar dividir entre cero.
Curso.prototype.calcularPromedioGrupo = function () {
  if (this.inscritos.length === 0) return 0;
  const sumaPromedios = this.inscritos.reduce(
    (acc, e) => acc + e.calcularPromedio(),
    0
  );
  return parseFloat((sumaPromedios / this.inscritos.length).toFixed(2));
};

// Recorre los inscritos con reduce comparando promedios para quedarse con el mayor.
// Retorna el objeto estudiante completo, no solo el nombre.
Curso.prototype.estudianteDestacado = function () {
  if (this.inscritos.length === 0) return null;
  return this.inscritos.reduce((mejor, actual) =>
    actual.calcularPromedio() > mejor.calcularPromedio() ? actual : mejor
  );
};

// Segundo estudiante para tener datos suficientes y probar el curso con varios inscritos
const estudiante2 = {
  nombre: "Laura",
  apellido: "Gomez",
  codigo: "2023002",
  programa: "Ingeniería de Sistemas",
  semestre: 5,
  notas: [
    { materia: "Construcción de Software III", calificacion: 4.8 },
    { materia: "Base de Datos", calificacion: 4.6 },
    { materia: "Redes de Computadores", calificacion: 4.9 },
    { materia: "Cálculo Diferencial", calificacion: 4.7 },
  ],
  activo: true,
  calcularPromedio() {
    if (this.notas.length === 0) return 0;
    const suma = this.notas.reduce((acc, n) => acc + n.calificacion, 0);
    return parseFloat((suma / this.notas.length).toFixed(2));
  },
  obtenerNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },
  estaAprobado() {
    return this.calcularPromedio() >= 3.0;
  },
  agregarNota(materia, calificacion) {
    this.notas.push({ materia, calificacion });
  },
};

// Creamos la instancia del curso e inscribimos ambos estudiantes
const curso = new Curso("Construcción de Software III", "CSW301", 3);
curso.inscribirEstudiante(estudiante);
curso.inscribirEstudiante(estudiante2);

console.log("\nListado de inscritos:", curso.obtenerListado());
console.log("Promedio del grupo:", curso.calcularPromedioGrupo());
console.log(
  "Estudiante destacado:",
  curso.estudianteDestacado().obtenerNombreCompleto(),
  "| Promedio:",
  curso.estudianteDestacado().calcularPromedio()
);

// ============================================================
// Object.keys(), Object.values() y Object.entries()
// ============================================================

console.log("\n--- Object.keys(), values() y entries() ---\n");

// Creamos un objeto plano solo con los datos primitivos del estudiante
// para que los métodos del itinerador no aparezcan en la salida
const datosEstudiante = {
  nombre: estudiante.nombre,
  apellido: estudiante.apellido,
  codigo: estudiante.codigo,
  programa: estudiante.programa,
  semestre: estudiante.semestre,
  activo: estudiante.activo,
};

// Object.keys() devuelve un array con los nombres de las propiedades
console.log("Object.keys():", Object.keys(datosEstudiante));

// Object.values() devuelve un array con los valores en el mismo orden
console.log("Object.values():", Object.values(datosEstudiante));

// Object.entries() devuelve un array de pares [clave, valor], util para iterar
console.log("Object.entries() - iteracion:");
Object.entries(datosEstudiante).forEach(([clave, valor]) => {
  console.log(`   ${clave}: ${valor}`);
});

// ============================================================
// Copia por referencia vs copia por valor
// Object.assign() y operador spread (...)
// ============================================================

console.log("\n--- Copia por referencia vs. copia por valor ---\n");

const original = {
  nombre: "Ana",
  apellido: "Torres",
  notas: [4.0, 3.5],
};

// COPIA POR REFERENCIA: no se crea un objeto nuevo, ambas variables
// apuntan a la misma dirección en memoria, así que cualquier cambio
// en una afecta a la otra.
const copiaReferencia = original;
copiaReferencia.nombre = "Cambiado por referencia";
console.log("Original tras modificar copiaReferencia:", original.nombre);
// resultado: "Cambiado por referencia" — el original se ve afectado

original.nombre = "Ana"; // restauramos para la siguiente prueba

// COPIA SUPERFICIAL CON Object.assign(): crea un objeto nuevo con las mismas
// propiedades primitivas, por lo que cambios en strings o numbers no afectan al original.
const copiaAssign = Object.assign({}, original);
copiaAssign.nombre = "Cambiado con assign";
console.log("Original tras modificar copiaAssign:", original.nombre);
// resultado: "Ana" — el original no cambia para propiedades primitivas

// COPIA SUPERFICIAL CON SPREAD: funciona igual que Object.assign para este caso.
// Es la sintaxis más usada hoy en día por ser más concisa.
const copiaSpread = { ...original };
copiaSpread.nombre = "Cambiado con spread";
console.log("Original tras modificar copiaSpread:", original.nombre);
// resultado: "Ana" — el original tampoco cambia

// OJO con las propiedades que son objetos o arrays: tanto assign como spread
// solo copian la referencia del array, no el array en sí (shallow copy).
// Por eso al modificar notas en la copia, el original también cambia.
copiaSpread.notas.push(5.0);
console.log("notas del original tras modificar copiaSpread.notas:", original.notas);
// resultado: el array del original SI cambia — comparten la misma referencia

// COPIA PROFUNDA con JSON.parse + JSON.stringify: serializa el objeto a texto
// y lo vuelve a parsear, generando un objeto completamente independiente.
// Limitacion: no funciona con funciones, Date, undefined, etc.
const copiaDeep = JSON.parse(JSON.stringify(original));
copiaDeep.notas.push(1.0);
console.log("notas del original tras modificar copiaDeep.notas:", original.notas);
// resultado: el array del original NO cambia — es una copia totalmente nueva