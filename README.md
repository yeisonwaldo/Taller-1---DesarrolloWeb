# Taller de JavaScript

**Variables, Tipos de Datos, Estructuras de Control, Arrays y Objetos**  
Construcción de Software III — 2026-I  
Docente: Albeiro Zuluaga Duque | Fecha de entrega: Miércoles 25 de febrero

---

## Integrantes del grupo

| #   | Nombre completo    |
| --- | ------------------ |
| 1   | YEISON WALDO CETRE |
| 2   | SEBASTIAN PULGARIN |
| 3   | BRYAN VERA LOPEZ   |

---

## Estructura del proyecto

```
Desarrollo Web/
├── punto1-taller/
│   ├── punto1a.js      ← Tipos de datos y typeof
│   ├── punto1b.js      ← Coerción implícita y explícita
│   └── index.html      ← Abre en el navegador para ejecutar
│
├── punto2-Taller/
│   ├── punto2a.js      ← Sistema de calificaciones
│   ├── punto2b.js      ← Tablas de multiplicar y números primos
│   └── index.html
│
├── punto3-Taller/
│   ├── punto3.js       ← Arrays y métodos funcionales
│   └── index.html
│
└── Punto4-Taller/
    ├── punto4.js       ← Objetos, prototipos y Object Methods
    └── index.html
```

---

## Cómo ejecutar

1. Abre el `index.html` de la carpeta del punto que deseas ver en el navegador.
2. Presiona **F12** para abrir las herramientas de desarrollo.
3. Ve a la pestaña **Console**.
4. Los resultados de todos los `console.log()` y `console.table()` se mostrarán automáticamente.

---

## Descripción de cada punto

### Punto 1 — Variables, Tipos de Datos y Coerción (25 pts)

**`punto1a.js` — Tipos de datos y `typeof`**

- Declara una variable de cada tipo primitivo: `string`, `number`, `boolean`, `null`, `undefined`, `bigint` y `symbol`.
- Implementa `analizarTipo(valor)`: recibe cualquier valor y retorna un objeto con `valor`, `tipo`, `esNulo` y `descripcion`.
- Llama la función con los 7 tipos y muestra los resultados en consola.

**`punto1b.js` — Coerción implícita y explícita**

- Muestra y explica el resultado de operaciones de coerción implícita: `"5" + 3`, `"5" - 3`, `false + "JS"`, `null + 1`, `true + 1`.
- Implementa `convertirDatos(valor)`: convierte explícitamente el valor a número, texto y booleano usando `Number()`, `String()` y `Boolean()`.
- Implementa `compararValores(a, b)`: compara con `==` y `===`, mostrando la diferencia entre igualdad abstracta y estricta.

---

### Punto 2 — Estructuras de Control (25 pts)

**`punto2a.js` — Sistema de calificaciones**

- Implementa `clasificarNota(nota)`: usa `switch(true)` para asignar la letra (A, B, C, D, F) e `if/else` para el estado (`Aprobado` / `Reprobado`) y un mensaje motivacional.
- Recorre un arreglo de 8 notas con un ciclo `for` e imprime el resultado de cada una.
- Al finalizar el ciclo calcula e imprime: promedio del grupo, cantidad de aprobados y reprobados, nota más alta y más baja.

**`punto2b.js` — Generador de tablas y números primos**

- `tablaDeMultiplicar(n, limite)`: genera e imprime la tabla del número `n` hasta el límite indicado usando un ciclo `while`.
- `esPrimo(n)`: determina si un número es primo usando un ciclo `do-while` o `for`. Retorna `true` o `false`.
- `primosMenoresA(limite)`: genera y retorna un array con todos los primos menores al límite dado.
- Llama a las tres funciones con valores representativos.

---

### Punto 3 — Arrays y sus Métodos (25 pts)

**`punto3.js`**

- Declara el array `productos` con 8 objetos (nombre, precio, categoría, stock, disponible).
- **Parte A** (sin métodos de array): con un ciclo `for` calcula el total de productos, suma de precios y cantidad disponibles.
- **Parte B** (métodos funcionales):
  - `filter`: productos con precio > $500.000 y productos de categoría "celulares".
  - `map`: resumen nombre/precio; precios con descuento del 15%.
  - `reduce`: valor total del inventario (precio × stock).
  - `find`: primer producto sin stock.
  - `some` / `every`: verificar si algún producto cuesta más de $2.000.000 y si todos están disponibles.
  - `sort`: ordenar productos de menor a mayor precio.

---

### Punto 4 — Objetos en JavaScript (25 pts)

**`punto4.js`**

- **Parte A — Objeto literal** `estudiante` con propiedades: nombre, apellido, código, programa, semestre, notas (array de objetos), activo. Métodos definidos directamente en el objeto:
  - `calcularPromedio()`: promedio de todas las notas con `reduce`.
  - `obtenerNombreCompleto()`: concatena nombre y apellido.
  - `estaAprobado()`: retorna `true` si el promedio es ≥ 3.0.
  - `agregarNota(materia, calificacion)`: agrega una nueva nota al array.
  - `toString()`: representación legible completa del estudiante.
- **Parte B — Función constructora** `Curso(nombre, codigo, creditos)` con métodos en el prototipo:
  - `inscribirEstudiante(estudiante)`: agrega al array `inscritos`.
  - `obtenerListado()`: retorna un array con los nombres de todos los inscritos.
  - `calcularPromedioGrupo()`: promedio de los promedios individuales.
  - `estudianteDestacado()`: retorna el estudiante con mayor promedio.
- **`Object.keys()`, `Object.values()`, `Object.entries()`**: itera e imprime propiedades de un objeto plano.
- **Copia por referencia vs. por valor**: demuestra la diferencia entre asignación directa, `Object.assign()`, spread (`...`) y copia profunda con `JSON.parse(JSON.stringify(...))`.

---

## Integrantes del grupo

| #   | Nombre completo |
| --- | --------------- |
| 1   |                 |
| 2   |                 |
| 3   |                 |
| 4   |                 |
