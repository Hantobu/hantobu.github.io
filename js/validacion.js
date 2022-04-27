$(document).ready(function(){

    var formulario = $('#formulario');
    var nombre = $('#nombre');
    var email = $('#email');
    var mensaje = $('#mensaje');

    // Validación de campos

    function valNombre(e){

        if (nombre.val() == '' || nombre.val() == null){
            e.preventDefault();
            $('input[type="text"] + .error').css('display', 'block');
        } else {
            $('input[type="text"] + .error').css('display', 'none');
        }
    }

    function valEmail(e){

        if (email.val() == '' || email.val() == null){
            e.preventDefault();
            $('input[type="email"] + .error').css('display', 'block');
        } else {
            $('input[type="email"] + .error').css('display', 'none');
        }
    }

    function valMensaje(e){

        if (mensaje.val() == '' || mensaje.val() == null){
            e.preventDefault();
            $('textarea + .error').css('display', 'block');
        } else {
            $('textarea + .error').css('display', 'none');
        }
    }

    // Obtenemos el valor del campo de nombre

    var resultName = '';
    var nombreUsuario = $('#nombreUsuario');
    setInterval(mostrarNombre, 500);
    function mostrarNombre(){
        if(nombre.val() != '' || nombre.val() != null){
            resultName = nombre.val();
        }
        nombreUsuario.html(" " + resultName);
    }

    // Validación y Mensaje exitoso

    var btnEnviar = $('#btnEnviar');
    var modalContactoPadre = $('.modal-contacto')
    var modalContacto = $('#modalContacto');
    var btnCierreModal = $('#btnCierreMContacto');

    function validacion(e){
        valNombre(e);
        valEmail(e);
        valMensaje(e);
        btnEnviar.on('click', function(e){
            e.preventDefault();
            modalContactoPadre.addClass('active');
            modalContacto.fadeIn();
        });
    }

    formulario.on('click', validacion);

    if(validacion != true) {
        modalContactoPadre.removeClass('active');
    } else {

    }

    btnCierreModal.on('click', function(){
        modalContacto.fadeOut();
    });

    modalContacto.on('click', function(){
        modalContacto.fadeOut();
    });
});
