// Cargar usuarios desde localStorage o iniciar vacío si no hay
let usuarios = JSON.parse(localStorage.getItem("usuariosAT21")) || [];

// FORMULARIO DE LOGIN
const formLogin = document.getElementById("loginForm");

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const usuarioEncontrado = usuarios.find(
    (user) => user.email === email && user.password === password
  );

  if (usuarioEncontrado) {
    alert(`¡Bienvenido, ${usuarioEncontrado.nombres}!`);
    localStorage.setItem("nombreUsuario", usuarioEncontrado.nombres); // Cambiar el texto del span en el home 
    window.location.href = "../homeAT21/home.html"; // Redirección
  } else {
    alert("Correo o contraseña incorrectos.");
  }
});

// FORMULARIO DE REGISTRO
const formRegistro = document.querySelector("form[action='../homeAT21/home.html']");

formRegistro.addEventListener("submit", function (e) {
  e.preventDefault(); // Detener redirección por el method GET

  const nuevoUsuario = {
    nombres: document.getElementById("nombres").value,
    apellidos: document.getElementById("apellidos").value,
    celular: document.getElementById("celular").value,
    email: document.getElementById("registroEmail").value,
    password: document.getElementById("registroPassword").value,
  };

  // Verificamos si el email ya está registrado
  const existe = usuarios.some((user) => user.email === nuevoUsuario.email);
  if (existe) {
    alert("Ya existe un usuario con ese correo electrónico.");
    return;
  }

  // Guardamos el usuario
  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuariosAT21", JSON.stringify(usuarios));

  alert("Usuario registrado exitosamente. Ahora puedes iniciar sesión.");
  formRegistro.reset();
});