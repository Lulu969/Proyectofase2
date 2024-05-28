document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    let correo = document.querySelector(".input-field[type='email']").value;
    let contraseña = document.querySelector(".input-field[type='password']").value;

    // Guardar datos en localStorage
    localStorage.setItem("correo", correo);
    localStorage.setItem("contraseña", contraseña);

    // Mostrar mensaje de éxito
    document.getElementById('res2').innerHTML = "Cuenta creada con éxito para " + correo;
});
