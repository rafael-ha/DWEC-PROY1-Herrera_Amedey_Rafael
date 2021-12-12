"use strict";
// Funcion que se ejecuta cuando el DOM del HTML esta completamente cargado.
document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector('.hamburger');
    let nav1 = document.querySelector(".nav__movil");

    btn.addEventListener('click', () => {
        nav1.classList.toggle('show');
    });
});

// Funcion que recoge datos del contacto.
function enviardatos(){
    let email = document.querySelector("#email").value;
    if (email=="") {
        console.log("Introduce un correo.")
    }else{
        console.log(email);
    }
    
    let asunto = document.querySelector("#asunto").value;
    if (asunto=="") {
        console.log("Introduce un asunto.")
    }else{
        console.log(asunto);
    }
    let descripcion = document.querySelector("#descripcion").value;
    if (descripcion=="") {
        console.log("Introduce una descripcion.")
    }else{
        console.log(descripcion);
    }
}
// Funcion valida longitud contraseña.
function valida_acceso(){
    let usuario = document.querySelector("#usuario").value;
    let passwd = document.querySelector("#passwd");

    console.log()
    if(passwd.value.length>8){
        passwd.insertAdjacentHTML("afterend","<p>Contraseña valida</p>");
        console.log(usuario);
    }else{
        passwd.insertAdjacentHTML("afterend","<p>Contraseña no valida</p>");
    }
}

// Funcion valida ambas contraseñas.
function valida_registro(){
    let usuario = document.querySelector("#usuario").value;
    let passwd = document.querySelector("#passwd");
    let repasswd = document.querySelector("#repasswd");

    console.log(usuario);
    if(passwd.value == repasswd.value){
        repasswd.insertAdjacentHTML("afterend","<p>Registro correcto.</p>");
    }else{
        repasswd.insertAdjacentHTML("afterend","<p>Las contraseñas no coinciden.</p>");
    }
}