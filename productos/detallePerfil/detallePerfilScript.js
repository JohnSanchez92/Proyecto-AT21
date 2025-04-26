/* ============================================================
   FUNCIONES UTILITARIAS
=============================================================== */

/**
 * Obtiene todos los productos visibles en la página.
 * @returns {Array} Lista de elementos <li> de productos.
 */
function obtenerProductos() {
  return Array.from(document.querySelectorAll('.productos li'));
}

/* ============================================================
   CAPTURAR CLIC EN PRODUCTOS Y GUARDAR EN LOCALSTORAGE
=============================================================== */

/**
 * Asigna eventos de clic a cada producto.
 * Al hacer clic, guarda la información en localStorage
 * y redirige a la página de detalles del producto.
 */
function configurarEventosClickProductos() {
  const productos = obtenerProductos();

  productos.forEach(item => {
    item.addEventListener('click', () => {
      const producto = {
        nombre: item.dataset.nombre,
        imagen: item.dataset.img,
        precio: item.dataset.precio,
        caracteristicas: item.dataset.caracteristicas,
        descripcion: item.dataset.descripcion,
      };

      if (producto.nombre && producto.imagen && producto.precio && producto.caracteristicas && producto.descripcion) {
        localStorage.setItem('productoSeleccionado', JSON.stringify(producto));
        window.location.href = '../infoProducto/infoProducto.html';
      } else {
        alert("Faltan datos del producto. No se puede mostrar la vista.");
      }
    });
  });
}

/* ============================================================
   FILTRAR PRODUCTOS POR MARCA
=============================================================== */

// Seleccionamos todos los checkboxes de marca
const checkboxesMarca = document.querySelectorAll('.filtros input[type="checkbox"]');

/**
 * Filtra productos basándose en las marcas seleccionadas.
 */
function filtrarProductos() {
  const marcasSeleccionadas = Array.from(checkboxesMarca)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value.toLowerCase());

  const productos = obtenerProductos();

  productos.forEach(producto => {
    const nombreProducto = producto.dataset.nombre.toLowerCase();

    if (marcasSeleccionadas.length === 0) {
      producto.style.display = 'block'; // Mostrar todos si no hay filtro
    } else {
      const pertenece = marcasSeleccionadas.some(marca => nombreProducto.includes(marca));
      producto.style.display = pertenece ? 'block' : 'none';
    }
  });
}

// Escuchar cambios en los checkboxes
checkboxesMarca.forEach(checkbox => {
  checkbox.addEventListener('change', filtrarProductos);
});

/* ============================================================
   ORDENAR PRODUCTOS POR PRECIO
=============================================================== */

// Seleccionamos el primer <select> (Precio)
const selectPrecio = document.querySelector('.filtros select:nth-of-type(1)');

/**
 * Ordena productos por precio (ascendente o descendente).
 */
function ordenarProductosPorPrecio() {
  const orden = selectPrecio.value; // "menor" o "mayor"
  const productosArray = obtenerProductos();

  productosArray.sort((a, b) => {
    const precioA = parseFloat(a.dataset.precio);
    const precioB = parseFloat(b.dataset.precio);

    return orden === "menor" ? precioA - precioB : precioB - precioA;
  });

  const contenedorProductos = document.querySelector('.productos');
  contenedorProductos.innerHTML = "";

  productosArray.forEach(producto => {
    contenedorProductos.appendChild(producto);
  });

  configurarEventosClickProductos(); // Reasignar eventos después de reordenar
}

// Escuchar cambios en el select de precio
selectPrecio.addEventListener('change', ordenarProductosPorPrecio);

/* ============================================================
   ORDENAR PRODUCTOS ALFABÉTICAMENTE
=============================================================== */

// Seleccionamos el segundo <select> (Alfabético)
const selectAlfabetico = document.querySelector('.filtros select:nth-of-type(2)');

/**
 * Ordena productos alfabéticamente (A-Z o Z-A).
 */
function ordenarProductosAlfabeticamente() {
  const orden = selectAlfabetico.value; // "az" o "za"
  const productosArray = obtenerProductos();

  productosArray.sort((a, b) => {
    const nombreA = a.dataset.nombre.toLowerCase();
    const nombreB = b.dataset.nombre.toLowerCase();

    if (nombreA < nombreB) return orden === "az" ? -1 : 1;
    if (nombreA > nombreB) return orden === "az" ? 1 : -1;
    return 0;
  });

  const contenedorProductos = document.querySelector('.productos');
  contenedorProductos.innerHTML = "";

  productosArray.forEach(producto => {
    contenedorProductos.appendChild(producto);
  });

  configurarEventosClickProductos(); // Reasignar eventos después de reordenar
}

// Escuchar cambios en el select de orden alfabético
selectAlfabetico.addEventListener('change', ordenarProductosAlfabeticamente);

/* ============================================================
   INICIALIZACIÓN
=============================================================== */

// Configurar eventos iniciales al cargar la página
configurarEventosClickProductos();
