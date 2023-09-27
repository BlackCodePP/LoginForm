// Espera a que se cargue el DOM antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del formulario de inicio de sesión y registro
    const loginForm = document.querySelector(".wrapper");
    const registerForm = document.querySelector(".wrapper-sign-up");
    
    // Obtener enlaces para cambiar entre registro e inicio de sesión
    const registerLink = document.getElementById("registerLink");
    const loginLink = document.getElementById("loginLink");
    
    // Obtener elementos para mostrar u ocultar la contraseña
    const viewPasswordIcon = document.getElementById("viewPassword");
    const viewPasswordOutValidate = document.getElementById("viewPasswordOutValidate");
    
    // Obtener campos de contraseña
    const passwordInput = document.getElementById("inputPassword");
    const inputPasswordOutValidate = document.getElementById("inputPasswordOutValidate");

    // Agregar un evento de clic al icono "viewPassword" para mostrar/ocultar la contraseña
    viewPasswordIcon.addEventListener("mousedown", function() {
        // Verificar el tipo actual del campo de contraseña
        if (passwordInput.type === "password") {
            // Cambiar el tipo a "text" para mostrar la contraseña
            passwordInput.type = "text";
        } else {
            // Cambiar el tipo a "password" para ocultar la contraseña
            passwordInput.type = "password";
        }
    });
    viewPasswordIcon.addEventListener("touchstart", function() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });

    // Agregar eventos para mostrar/ocultar contraseña al hacer clic fuera del campo
    viewPasswordOutValidate.addEventListener("mousedown", function() {
        // Verificar el tipo actual del campo de contraseña
        if (inputPasswordOutValidate.type === "password") {
            // Cambiar el tipo a "text" para mostrar la contraseña
            inputPasswordOutValidate.type = "text";
        } else {
            // Cambiar el tipo a "password" para ocultar la contraseña
            inputPasswordOutValidate.type = "password";
        }
    });
    viewPasswordOutValidate.addEventListener("touchstart", function() {
        if (inputPasswordOutValidate.type === "password") {
            inputPasswordOutValidate.type = "text";
        } else {
            inputPasswordOutValidate.type = "password";
        }
    });

    // Restaurar el tipo de contraseña al quitar el clic fuera del campo
    viewPasswordIcon.addEventListener("mouseout", function() {
        passwordInput.type = "password";
    });
    viewPasswordOutValidate.addEventListener("mouseout", function() {
        inputPasswordOutValidate.type = "password";
    });

    // Cambiar tipo de contraseña al soltar el clic fuera del campo
    viewPasswordIcon.addEventListener("mouseup", function() {
        // Verificar el tipo actual del campo de contraseña
        if (passwordInput.type === "text") {
            // Cambiar el tipo a "text" para mostrar la contraseña
            passwordInput.type = "password";
        } else {
            // Cambiar el tipo a "password" para ocultar la contraseña
            passwordInput.type = "text";
        }
    });
    viewPasswordOutValidate.addEventListener("mouseup", function() {
        if (inputPasswordOutValidate.type === "text") {
            inputPasswordOutValidate.type = "password";
        } else {
            inputPasswordOutValidate.type = "text";
        }
    });

    // Agregar evento para cambiar al formulario de registro
    registerLink.addEventListener("click", function(e) {
        e.preventDefault();

        // Ocultar el formulario de inicio de sesión y mostrar el formulario de registro
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    // Agregar evento para cambiar al formulario de inicio de sesión
    loginLink.addEventListener("click", function(e) {
        e.preventDefault();

        // Ocultar el formulario de registro y mostrar el formulario de inicio de sesión
        loginForm.style.display = "block";
        registerForm.style.display = "none";

        // Agregar la clase animate-on-show con un pequeño retraso para animación
        setTimeout(function() {
            loginForm.classList.add("animate-on-show");
        }, 10);
    });
});

// Función para validar el formulario de registro
function validate() {
    var password = document.getElementById("inputPassword").value;
    var passwordLength = password.length;
    var number = 0;
    var upperCase = 0;
    var lowerCase = 0;
    var mail = document.getElementById("inputMail").value;
    var at = 0;
    var dot = 0;

    for (var i = 0; i < mail.length; i++) {
        counterMail = mail.substr(i, 1);
        if ("@".lastIndexOf(counterMail) >= 0) {
            at = 1;
        }
        if (".".lastIndexOf(counterMail) >= 0) {
            dot = 1;
        }
    }

    for (var i = 0; i < passwordLength; i++) {
        var char = password.charAt(i);

        if ("0123456789".indexOf(char) >= 0) {
            number = 1;
        } else if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(char) >= 0) {
            upperCase = 1;
        } else if ("abcdefghijklmnopqrstuvwxyz".indexOf(char) >= 0) {
            lowerCase = 1;
        }
    }

    if (at < 1 || dot < 1 || mail.length < 7) {
        displayModal("Introduce una dirección de correo válida");
        document.getElementById("inputMail").value = "";
    } else if (document.getElementById("inputUser").value.length < 5) {
        displayModal("El nombre de usuario debe contener como mínimo 5 caracteres");
        document.getElementById("inputUser").value = "";
    } else if (number < 1 || upperCase < 1 || lowerCase < 1 || passwordLength < 5) {
        displayModal("La contraseña debe contener (5 o mas caracteres, al menos 1 mayúscula, 1 minúscula, 1 número)");
        document.getElementById("inputPassword").value = "";
    } else {
        displayModal("Registro correcto");
        setTimeout(function () {
            location.reload();
            document.getElementById("inputMail").value = "";
            document.getElementById("inputUser").value = "";
            document.getElementById("inputPassword").value = "";
        }, 2000); // 2000 milisegundos (2 segundos) 
    }
}

function displayModal(message) {
    var modal = document.getElementById("modal");
    var modalMessage = document.getElementById("modalMessage");
    modal.style.display = "block";
    modalMessage.textContent = message;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
