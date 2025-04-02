        // Capturar el formulario de login
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Evita el envío del formulario
            alert("Inicio de sesión exitoso"); // Mensaje de alerta
            window.location.href = "../homeAT21/home.html"; // Redirige a home
        });

        // Capturar el formulario de registro
        document.getElementById("registerForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Evita el envío del formulario
            alert("Registro exitoso"); // Mensaje de alerta
            window.location.href = "../homeAT21/home.html"; // Redirige a home
        });