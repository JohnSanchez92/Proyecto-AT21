document.addEventListener("DOMContentLoaded", function () {
    const usuarios = JSON.parse(localStorage.getItem("usuariosAT21")) || [];
    const tbody = document.querySelector(".tabla-usuarios tbody");
  
    // Limpiar tbody por si tiene filas de ejemplo
    tbody.innerHTML = "";
  
    usuarios.forEach((usuario, index) => {
      const tr = document.createElement("tr");
  
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${usuario.nombres} ${usuario.apellidos || ""}</td>
        <td>Sin rol</td> <!-- Puedes cambiar esto si defines roles -->
        <td>${usuario.email}</td>
        <td>
          <button class="editar">Editar</button>
          <button class="eliminar">Eliminar</button>
        </td>
      `;
  
      tbody.appendChild(tr);
    });
  });