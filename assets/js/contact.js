// Seleccionar los divs de información
var emailInfoBox = document.getElementById('my-email');
var phoneInfoBox = document.getElementById('my-phone');

// Agregar un listener para el evento click en el div de correo electrónico
emailInfoBox.addEventListener('click', function () {
    // Obtener la dirección de correo electrónico
    var email = emailInfoBox.querySelector('p').textContent.trim();
    var cleanEmail = email.replace(/<wbr>/gi, "");

    // Crear la URL de correo electrónico con la dirección
    var emailUrl = 'mailto:' + cleanEmail;

    // Abrir la URL de correo electrónico en una nueva ventana
    window.open(emailUrl, '_blank');
});

// Agregar un listener para el evento click en el div de teléfono
phoneInfoBox.addEventListener('click', function () {
    // Obtener el número de teléfono
    var phone = phoneInfoBox.querySelector('p').textContent.trim();

    // Crear la URL de teléfono con el número
    var phoneUrl = 'tel:' + phone;

    // Abrir la URL de teléfono en una nueva ventana
    window.open(phoneUrl, '_blank');
});

//======== FORMULARIO ===============
// Seleccionar el botón de envío del formulario
var sendButton = document.getElementById('send-whatsapp');

// Agregar un listener para el evento click
sendButton.addEventListener('click', function () {

    // Obtener los valores de los campos de entrada
    var name = document.getElementById('name').value;
    var company = document.getElementById('company').value;
    var category = document.getElementById('category').value;
    var message = document.getElementById('message').value;

    if (name && company) {
        // Crear la URL de WhatsApp con los valores de los campos como argumentos
        var whatsappUrl = 'https://wa.me/51925214315?text=' + encodeURIComponent('Nombre: ' + name + '\nEmpresa: ' + company + '\nRubro: ' + category + '\nMensaje: ' + message);
        console.log(whatsappUrl);

        // Abrir la URL de WhatsApp en una nueva ventana
        window.open(whatsappUrl, '_blank');
    }

});