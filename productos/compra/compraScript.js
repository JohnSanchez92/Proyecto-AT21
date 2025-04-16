// Simulación de datos: reemplaza por localStorage o datos reales
const usuario = {
  nombre: "Juan Pérez",
  correo: "juan.perez@email.com",
  celular: "3001234567"
};

const productosSeleccionados = [
  { nombre: "SSD 1TB", precio: 180000 },
  { nombre: "DDR4 32G", precio: 280000 }
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nombreUsuario").textContent = usuario.nombre;
  document.getElementById("correoUsuario").textContent = usuario.correo;
  document.getElementById("celularUsuario").textContent = usuario.celular;

  const lista = document.getElementById("listaProductos");
  let total = 0;

  productosSeleccionados.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio.toLocaleString()}`;
    lista.appendChild(li);
    total += producto.precio;
  });

  document.getElementById("totalCompra").textContent = total.toLocaleString();

   // Asignar función al botón de finalizar
   const botonFinalizar = document.getElementById("btnFinalizar");
   botonFinalizar.addEventListener("click", finalizarCompra);
});

function redirigirACompra() {
  window.location.href = "../detallePerfil/detallePerfil.html"; // Cambié esta línea para que redirija a detallePerfil.html
}

function finalizarCompra() {
  alert("¡Compra exitosa!");
  redirigirACompra();
  // Aquí puedes agregar redirección o limpiar el carrito
}
  
  