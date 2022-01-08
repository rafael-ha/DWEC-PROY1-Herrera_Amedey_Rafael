"use strict";
// Variables
let captcha = [];
const user = /^[a-zA-Z0-9]{4,16}$/
const pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const mail = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
// Funcion que se ejecuta cuando el DOM del HTML esta completamente cargado.
document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector('.hamburger');
    let nav1 = document.querySelector(".nav__movil");

    btn.addEventListener('click', () => {
        nav1.classList.toggle('show');
    });
});

// Funcion que recoge datos del contacto.
function enviardatos() {
    let email = document.querySelector("#email").value;
    let descripcion = document.querySelector("#descripcion").value;
    let asunto = document.querySelector("#asunto").value;
    if (email == "") {
        alert("Introduce un correo.")
    } else if (mail.test(email.value)) {
        alert("Correo no válido.");
        return;
    } else {
        console.log(email);
    }

    if (asunto == "") {
        alert("Introduce un asunto.");
        return;
    } else {
        console.log(asunto);
    }

    if (descripcion == "") {
        alert("Introduce una descripcion.")
        return;
    } else {
        console.log(descripcion);
    }
}
// Funcion valida longitud contraseña.
function valida_acceso() {
    let usuario = document.querySelector("#usuario").value;
    let passwd = document.querySelector("#passwd");
    if (!(user.test(usuario))) {
        alert("El usuario introducido no es correcto.");
        return;
    } else if (passwd.value.length > 8 && usuario.length != 0) {
        alert("Acceso correcto.");
        console.log(usuario);
        return;
    } else {
        alert("Usuario o contraseña incorrectos.");
        return;
    }
}

// Funcion valida ambas contraseñas.
function valida_registro() {
    let usuario = document.querySelector("#usuario").value;
    let passwd = document.querySelector("#passwd");
    let repasswd = document.querySelector("#repasswd");
    if (!(user.test(usuario))) {
        alert("El usuario introducido no es válido.");
        return;
    } else if (!(pass.test(passwd.value))) {
        alert("La contraseña introducida no es válida.")
        return;
    } else if ((passwd.value == repasswd.value) && usuario.length != 0) {
        alert("Registro correcto.")
        console.log(usuario);
        return;
    } else if (passwd.value != repasswd.value) {
        alert("Las contraseñas no coinciden.");
        return;
    } else {
        alert("Rellene los campos.");
        return;
    }
}
// Función para crear captcha.
function crear_captcha() {
    let captchaHTML = document.querySelector('.captcha');
    for (let i = 0; i < 8; i++) {
        if (i % 2 == 0) {
            captcha[i] = String.fromCharCode(Math.floor(Math.random() * 26 + 65)); // Letra aleatoria.
        } else {
            captcha[i] = Math.floor((Math.random() * 9) + 1); // Número aleatorio entre 1 y 9.
        }
    }
    let captchaTexto = captcha.join("");
    captchaHTML.innerHTML = `${captchaTexto}`;
}
// Función que valida el captcha introducido por el usuario.
function valida_captcha() {
    let input_captcha = document.querySelector("#captcha");
    let input_captcha_formateado = input_captcha.value.toUpperCase(); // Formateamos los caracteres introducidos por el usuario a todo mayusculas.
    let error = document.querySelector(".error");
    let last_input = document.querySelector(".btn:last-child");
    let captchaTexto = captcha.join("");
    // Comprobamos que el usuario a introducido caracteres.
    if (input_captcha.value.length == 0) {
        error.innerHTML = "Introduce los caracteres del captcha.";
        input_captcha.focus();
        return;
    // Comprobamos si los caracteres introducidos coinciden con el captcha pregenerado.
    } else if (input_captcha_formateado != captchaTexto) {
        error.innerHTML = "Los caracteres no coinciden.";
        input_captcha.focus();
        return;
    } else {
        error.innerHTML = "Captcha correcto."; // Escribimos que el captcha introducido es correcto.
        console.log("Captcha correcto.");
        // Comprobamos si el boton para enviar los datos es el de contacto.html o registro.html
        if (last_input.value == "ENVIAR") { 
            enviardatos();
        } else {
            valida_registro();
        }
    }
}