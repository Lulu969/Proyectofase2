let intentosFallidos = 0;

function validar(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    let correo = document.querySelector(".input-field[type='email']").value;
    let contraseña = document.querySelector(".input-field[type='password']").value;

    // Obtener los datos almacenados en localStorage
    let correoCorrecto = localStorage.getItem("correo");
    let contraseñaCorrecta = localStorage.getItem("contraseña");

    if (correo === correoCorrecto && contraseña === contraseñaCorrecta) {
        document.getElementById('res1').innerHTML = "Inicio de sesión correcto";
    } else {
        intentosFallidos++;

        // Verificar si se superó el límite de intentos fallidos
        if (intentosFallidos >= 3) {
            // Bloquear inicio de sesión durante 10 segundos
            document.getElementById('res1').innerHTML = "Demasiados intentos fallidos. Espere 10 segundos.";
            document.querySelector(".submit-btn").disabled = true; // Deshabilitar el botón de inicio de sesión

            // Desbloquear después de 10 segundos
            setTimeout(() => {
                document.getElementById('res1').innerHTML = ""; // Limpiar el mensaje
                document.querySelector(".submit-btn").disabled = false; // Habilitar el botón de inicio de sesión
                intentosFallidos = 0; // Reiniciar el contador de intentos fallidos
            }, 10000);
        } else {
            document.getElementById('res1').innerHTML = "Correo electrónico o contraseña incorrecta";
        }
    }
}

document.getElementById("loginForm").addEventListener("submit", validar);
