function cargarComponente(id, archivo) {
    fetch(archivo)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById(id).innerHTML = data;
        })
        .catch((error) => console.error("Error cargando:", archivo, error));
}

cargarComponente("header", "components/header.html");
cargarComponente("footer", "components/footer.html");