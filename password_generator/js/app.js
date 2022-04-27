(function(){
    /*---------------------------------*/
    /* Variables y Objetos Generales */
    /*---------------------------------*/

    var app = document.getElementById('app');
    var inputCaracteres = document.getElementById('numero-caracteres');

    var configuracion = {
        caracteres: parseInt(inputCaracteres.value),
        simbolos: true,
        numeros: true,
        mayusculas: true,
        minusculas: true
    }

    var caracteres = {
        numeros: '0 1 2 3 4 5 6 7 8 9',
        simbolos: '! @ # $ % & / ( ) = ? ¡ , . ; : _ [ ] * ─ | ° + { } ¿ < >',
        mayusculas: 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z',
        minusculas: 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z'
    }

    /*---------------------------------*/
    /* Eventos */
    /*---------------------------------*/

    // Evento para evitar que app haga un submit
    app.addEventListener('submit', function(e){
        e.preventDefault();
    });

    // Evento para incrementar el número de caracteres
    app.elements.namedItem('btn-mas-uno').addEventListener('click', function(){
        configuracion.caracteres++;
        inputCaracteres.value = configuracion.caracteres;
    });

    // Evento para decrementar el número de caracteres si es mayor a 1
    app.elements.namedItem('btn-menos-uno').addEventListener('click', function(){
        if(configuracion.caracteres > 1){
            configuracion.caracteres--;
            inputCaracteres.value = configuracion.caracteres;
        }
    });

    // Evento para encender o apagar simbolos
    app.elements.namedItem('btn-simbolos').addEventListener('click', function(){
        btnToggle(this);
        configuracion.simbolos = !configuracion.simbolos;
    });

    // Evento para enecender o apagar numeros
    app.elements.namedItem('btn-numeros').addEventListener('click', function(){
        btnToggle(this);
        configuracion.numeros = !configuracion.numeros;
    });

    // Evento para encender o apagar mayusculas
    app.elements.namedItem('btn-mayusculas').addEventListener('click', function(){
        btnToggle(this);
        configuracion.mayusculas = !configuracion.mayusculas;
    });

    app.elements.namedItem('btn-generar').addEventListener('click', function(){
        generarPassword();
    });

    app.elements.namedItem('input-password').addEventListener('click', function(){
        copiarPassword();
    })

    /*---------------------------------*/
    /* Funciones */
    /*---------------------------------*/

    // Función para encender o apagar
    function btnToggle(element){
        element.classList.toggle('false');
        element.childNodes[0].classList.toggle('fa-check');
        element.childNodes[0].classList.toggle('fa-xmark');
    }

    // Función para generar contraseña
    function generarPassword(){
        var caracteresFinales = '';
        var password = '';

        for(propiedad in configuracion){
            if(configuracion[propiedad] == true){
                caracteresFinales += caracteres[propiedad] + ' ';
            }
        }

        // El método .trim() elimina los espacios del inicio y final de  un string
        caracteresFinales = caracteresFinales.trim();
        // El método .split() convierte el string en un array dependiendo el parametro al cual exortar
        caracteresFinales = caracteresFinales.split(' ');

        // Ciclo que genera un número a azar multiplicado por lel número de caracteres
        for(var i = 0; i < configuracion.caracteres;i++){
            password += caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];
        }

        app.elements.namedItem('input-password').value = password;
    }

    // Función que copia el password
    function copiarPassword(){
        app.elements.namedItem('input-password').select();
        document.execCommand("copy");
        document.getElementById('alerta-copiado').classList.add('active');

        setTimeout(function(){
            document.getElementById('alerta-copiado').classList.remove('active'); 
        }, 2000);
    }

    generarPassword();



}())