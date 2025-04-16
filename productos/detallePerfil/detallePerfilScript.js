document.querySelectorAll('.productos li').forEach(item => {
    item.addEventListener('click', () => {
      const producto = {
        nombre: item.dataset.nombre,
        imagen: item.dataset.img,
        precio: item.dataset.precio,
        caracteristicas: item.dataset.caracteristicas,
        descripcion: item.dataset.descripcion,
      };
  
      if (producto.nombre && producto.imagen && producto.precio && producto.caracteristicas && producto.descripcion) {
        // Guardar el producto en localStorage y redirigir a la página de información del producto
        localStorage.setItem('productoSeleccionado', JSON.stringify(producto));
        window.location.href = '../infoProducto/infoProducto.html';
      } else {
        alert("Faltan datos del producto. No se puede mostrar la vista.");
      }
    });
  });
 
  