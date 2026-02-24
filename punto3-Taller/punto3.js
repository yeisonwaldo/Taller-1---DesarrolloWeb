// ============================================================
// PUNTO 3 - Arrays y sus Métodos
// Inventario de tienda de tecnología
// Construcción de Software III - 2026-I
// ============================================================

// Declaramos el array de productos con 8 objetos.
// Cada producto tiene: nombre, precio, categoria, stock y disponible.
// Las categorias posibles son: 'computadores', 'celulares', 'accesorios'
const productos = [
  { nombre: "MacBook Air M2",         precio: 4500000, categoria: "computadores", stock: 5,  disponible: true  },
  { nombre: "iPhone 15",              precio: 3800000, categoria: "celulares",    stock: 12, disponible: true  },
  { nombre: "Samsung Galaxy S24",     precio: 3200000, categoria: "celulares",    stock: 8,  disponible: true  },
  { nombre: "Lenovo IdeaPad 3",       precio: 1800000, categoria: "computadores", stock: 3,  disponible: true  },
  { nombre: "Audífonos Sony WH-1000", precio: 850000,  categoria: "accesorios",   stock: 0,  disponible: false },
  { nombre: "Teclado Logitech MX",    precio: 420000,  categoria: "accesorios",   stock: 15, disponible: true  },
  { nombre: "iPad Air",               precio: 2600000, categoria: "celulares",    stock: 6,  disponible: true  },
  { nombre: "Mouse Inalámbrico HP",   precio: 95000,   categoria: "accesorios",   stock: 0,  disponible: false },
];

// ============================================================
// PARTE A: Creación y manipulación básica (sin métodos de array)
// ============================================================

console.log("===== PARTE A: MANIPULACION BASICA CON CICLOS =====\n");

// Iniciamos los acumuladores antes del ciclo
let totalProductos = 0;
let sumaPrecios = 0;
let cantidadDisponibles = 0;

// Recorremos el array con un for clásico para acumular los datos.
// El enunciado pide no usar métodos de array en esta parte, solo ciclos.
for (let i = 0; i < productos.length; i++) {
  totalProductos++;                   // contamos cada producto

  sumaPrecios += productos[i].precio; // acumulamos el precio de cada uno

  // solo contamos los que tienen disponible en true
  if (productos[i].disponible) {
    cantidadDisponibles++;
  }
}

console.log("Total de productos en inventario:", totalProductos);
console.log("Suma de todos los precios: $" + sumaPrecios.toLocaleString("es-CO"));
console.log("Cantidad de productos disponibles:", cantidadDisponibles);

// ============================================================
// PARTE B: Métodos funcionales de array
// ============================================================

console.log("\n===== PARTE B: METODOS FUNCIONALES DE ARRAY =====\n");

// -------------------------------------------------------
// Punto 17: filter
// filter recorre el array y retorna uno nuevo solo con los elementos
// que cumplan la condicion del callback (los que devuelven true)
// -------------------------------------------------------

const productosCaros = productos.filter((p) => p.precio > 500000);
console.log("--- Productos con precio > $500.000 ---");
productosCaros.forEach((p) =>
  console.log(`  ${p.nombre}: $${p.precio.toLocaleString("es-CO")}`)
);

const celulares = productos.filter((p) => p.categoria === "celulares");
console.log("\n--- Productos de categoria 'celulares' ---");
celulares.forEach((p) => console.log(`  ${p.nombre}`));

// -------------------------------------------------------
// Punto 18: map
// map transforma cada elemento del array y retorna un nuevo array
// del mismo tamaño pero con los valores que retorne el callback
// -------------------------------------------------------

// Nuevo array con solo nombre y precio de cada producto
const resumenProductos = productos.map((p) => ({
  nombre: p.nombre,
  precio: p.precio,
}));
console.log("\n--- Resumen: nombre y precio ---");
resumenProductos.forEach((p) =>
  console.log(`  ${p.nombre}: $${p.precio.toLocaleString("es-CO")}`)
);

// Aplicamos un descuento del 15% a todos los precios.
// Math.round evita que queden decimales raros por el porcentaje
const conDescuento = productos.map((p) => ({
  nombre: p.nombre,
  precioOriginal: p.precio,
  precioConDescuento: Math.round(p.precio * 0.85),
}));
console.log("\n--- Precios con descuento del 15% ---");
conDescuento.forEach((p) =>
  console.log(
    `  ${p.nombre}: $${p.precioOriginal.toLocaleString("es-CO")} -> $${p.precioConDescuento.toLocaleString("es-CO")}`
  )
);

// -------------------------------------------------------
// Punto 19: reduce
// reduce acumula un valor a partir de todos los elementos del array.
// El acumulador va guardando el resultado parcial en cada iteracion.
// precio * stock nos da el valor total de ese producto en inventario.
// -------------------------------------------------------

const valorTotalInventario = productos.reduce(
  (acumulador, p) => acumulador + p.precio * p.stock,
  0 // valor inicial del acumulador
);
console.log("\n--- Valor total del inventario (precio * stock) ---");
console.log(`  Total: $${valorTotalInventario.toLocaleString("es-CO")}`);

// -------------------------------------------------------
// Punto 20: find
// find retorna el primer elemento que cumpla la condicion,
// o undefined si no encuentra ninguno.
// -------------------------------------------------------

const sinStock = productos.find((p) => p.stock === 0);
console.log("\n--- Primer producto sin stock ---");
if (sinStock) {
  console.log(`  ${sinStock.nombre} | Stock: ${sinStock.stock}`);
} else {
  console.log("  Todos los productos tienen stock disponible.");
}

// -------------------------------------------------------
// Punto 21: some y every
// some: retorna true si AL MENOS UN elemento cumple la condicion
// every: retorna true solo si TODOS los elementos cumplen la condicion
// -------------------------------------------------------

const hayProductoCaro = productos.some((p) => p.precio > 2000000);
console.log("\n--- some: algun producto cuesta mas de $2.000.000? ---");
console.log(`  ${hayProductoCaro}`);

const todosDisponibles = productos.every((p) => p.disponible === true);
console.log("\n--- every: todos los productos estan disponibles? ---");
console.log(`  ${todosDisponibles}`);
// Esperamos false porque hay productos con disponible: false

// -------------------------------------------------------
// Punto 22: sort
// sort ordena el array original (lo muta), comparando pares de elementos.
// Si el callback retorna negativo, 'a' va antes que 'b'.
// Si retorna positivo, 'b' va antes que 'a'.
// Para ordenar de menor a mayor precio hacemos a.precio - b.precio.
// Usamos spread para crear una copia y no mutar el array original.
// -------------------------------------------------------

const ordenadosPorPrecio = [...productos].sort((a, b) => a.precio - b.precio);
console.log("\n--- Productos ordenados de menor a mayor precio ---");
ordenadosPorPrecio.forEach((p) =>
  console.log(`  $${p.precio.toLocaleString("es-CO")} - ${p.nombre}`)
);