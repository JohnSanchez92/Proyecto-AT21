document.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse(localStorage.getItem("productoSeleccionado"));
  
    if (!data) return;
  
    // Reemplaza la imagen
    const imagen = document.querySelector(".imagen");
    if (imagen) imagen.src = data.imagen;
  
    // Reemplaza el título
    const titulo = document.querySelector(".texto-arriba-derecha h1");
    if (titulo) titulo.textContent = data.nombre;
  
    // Reemplaza las características
    const lista = document.querySelector(".texto-arriba-derecha ul");
    if (lista) {
      lista.innerHTML = "";
      const caracteristicas = data.caracteristicas.split(',');
      caracteristicas.forEach(c => {
        const li = document.createElement('li');
        li.textContent = c.trim();
        lista.appendChild(li);
    });
    }

    // Reemplaza la descripción del producto
    const descripcion = document.querySelector(".texto-abajo-izquierda p");
    if (descripcion && data.descripcion) {
    // Usa saltos de línea <br> si la descripción viene separada por comas
    descripcion.innerHTML = data.descripcion.split(',').map(d => d.trim()).join('<br>');
    }    
    // Precio
    const precio = document.querySelector(".texto-arriba-derecha h3");
    if (precio) precio.textContent = `Precio: ${data.precio}`;
  });
  console.log("Datos cargados:", data);
    // Obtener el botón de "Agregar al carrito"