// Función para validar el formulario
function validarFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores de los campos del formulario
    var nombre = document.forms["form"]["nombre"].value;
    var email = document.forms["form"]["email"].value;
    var asunto = document.forms["form"]["asunto"].value;
    var mensaje = document.forms["form"]["mensaje"].value;

    // Validar que los campos no estén vacíos
    if (nombre == "" || email == "" || asunto == "" || mensaje == "") {
        alert("Por favor, completa todos los campos del formulario.");
        return false; // Evitar que el formulario se envíe si hay campos vacíos
    }

    // Validar el formato del correo electrónico utilizando una expresión regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, introduce una dirección de correo electrónico válida.");
        return false; // Evitar que el formulario se envíe si el correo electrónico no es válido
    }

    // Si todas las validaciones son exitosas, puedes enviar el formulario aquí
    // Por ejemplo, puedes usar AJAX para enviar los datos del formulario a un servidor
}

// Obtener el formulario y agregar un event listener para el evento submit
var formulario = document.forms["form"];
formulario.addEventListener("submit", validarFormulario);

