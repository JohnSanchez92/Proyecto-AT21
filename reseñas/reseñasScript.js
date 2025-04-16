let calificacionSeleccionada = "";

// Función para establecer la calificación seleccionada y marcar visualmente el botón
function setCalificacion(valor) {
  calificacionSeleccionada = valor;

  // Remueve la clase 'selected' de todos los botones
  const botones = document.querySelectorAll('.calificacion-btn');
  botones.forEach(btn => btn.classList.remove('selected'));

  // Agrega la clase 'selected' al botón correspondiente
  if (valor === 'Conforme') {
    document.getElementById('btnConforme').classList.add('selected');
  } else if (valor === 'Inconforme') {
    document.getElementById('btnInconforme').classList.add('selected');
  }

  console.log("Calificación seleccionada:", calificacionSeleccionada);
}

// Manejador del envío del formulario
document.getElementById("formResena").addEventListener("submit", function(event) {
  event.preventDefault();

  const comentario = document.getElementById("comentario").value;

  if (!calificacionSeleccionada || comentario.trim() === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const reseña = document.createElement("div");
  reseña.classList.add("resena");
  reseña.innerHTML = `<p><strong>Calificación:</strong> ${calificacionSeleccionada}</p><p>${comentario}</p>`;

  document.getElementById("listaResenas").appendChild(reseña);

  // Limpiar el formulario y la selección
  document.getElementById("formResena").reset();
  const botones = document.querySelectorAll('.calificacion-btn');
  botones.forEach(btn => btn.classList.remove('selected'));
  calificacionSeleccionada = "";
});