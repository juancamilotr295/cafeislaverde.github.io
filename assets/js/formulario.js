const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Enviando...";

    const serviceID = "default_service";
    const templateID = "template_u773bj7";

    emailjs.sendForm(serviceID, templateID, this).then(
        () => {
            btn.value = "Enviar";
            console.log("Se envio correctamente");
            this.reset();
        },
        (err) => {
            btn.value = "Enviar";
            alert(JSON.stringify(err));
        },
    );
});
