var campos = {};

document.addEventListener("DOMContentLoaded", function () {
    campos.nombre = document.getElementById('nombre');
    campos.apellido = document.getElementById('apellido');
    campos.email = document.getElementById('email');
    campos.mensaje = document.getElementById('mensaje');

});



class Contact {
    constructor(nombre, apellido, email, mensaje) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.mensaje = mensaje;

    }
}

function enviarMensaje() {
    console.log("Click!");
    let contact = new Contact(nombre.value, apellido.value, email.value, mensaje.value);
    alert(`${contact.nombre} gracias por su mensaje, nos pondremos en contacto a la brevedad.`);

}
