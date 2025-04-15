document.addEventListener("DOMContentLoaded", function () {
    const nombreUsuario = localStorage.getItem("nombreUsuario");

    // Cambiar el texto del span si hay un usuario logueado
    if (nombreUsuario) {
        const nav = document.querySelector(".menu-botones");
        const loginLink = nav.querySelector("a[href*='loginRegistro.html']");

        if (loginLink) {
            const span = loginLink.querySelector("span");
            if (span) {
                span.textContent = nombreUsuario;
            }
            loginLink.href = "../loginRegistro/adminUsuarios/adminUsuarios.html"; // ya no es loginRegistro.html, ahora es adminUsuarios.html
        }
    }

    // Lógica de cerrar sesión
    const cerrarSesion = document.getElementById("cerrarSesion");
    if (cerrarSesion) {
        cerrarSesion.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.removeItem("nombreUsuario");
            location.reload(); // si quiero permanecer en mi vista actual puedo usar window.location.href = 'loginRegistro.html'
        });
    }
});