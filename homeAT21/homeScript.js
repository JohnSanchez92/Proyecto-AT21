document.addEventListener("DOMContentLoaded", function () {
    const nombreUsuario = localStorage.getItem("nombreUsuario");

    // Cambiar solo el texto del span si hay un usuario logueado
    if (nombreUsuario) {
        const nav = document.querySelector(".menu-botones");
        const loginLink = nav.querySelector("a[href*='loginRegistro.html']");

        if (loginLink) {
            const span = loginLink.querySelector("span");
            if (span) {
                span.textContent = nombreUsuario;
            }
        }
    }

    // Lógica de cerrar sesión
    const cerrarSesion = document.getElementById("cerrarSesion");
    if (cerrarSesion) {
        cerrarSesion.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.removeItem("nombreUsuario");
            location.reload(); // También puedes usar window.location.href = 'loginRegistro.html'
        });
    }
});