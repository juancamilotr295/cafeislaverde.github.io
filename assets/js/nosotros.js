function mostrarSeccion(id) {
    // Oculta todas
    document.querySelectorAll(".seccion").forEach((seccion) => {
        seccion.classList.remove("activa");
    });

    // Muestra la seleccionada
    document.getElementById(id).classList.add("activa");
}