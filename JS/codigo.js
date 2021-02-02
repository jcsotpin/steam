"use strict";

//-------------------------EVENTSLISTENERS----------------------------------------------
document.getElementById("btnAdministrar").addEventListener("click", mostrarAdministracion);
document.getElementById("btnAceptarAltaPersona").addEventListener("click", altaUsuario);
document.getElementById("btnAceptarAltaJuego").addEventListener("click", altaJuego);



//Llamada a la Función de Ocultar Formularios para que comiencen ocultos
ocultarFormularios();

//---------------------------CONTROL VISUAL UI--------------------------------------------//

//Función para Ocultar los Formularios y el Área de Listado
function ocultarFormularios() {

    let arrayFormularios = document.getElementsByTagName("form");

    //Oculta los formularios
    for (let index = 0; index < arrayFormularios.length; index++) {
        arrayFormularios[index].style.display = "none";
    }

    let arrayInputs = document.getElementsByTagName("input");

    //Vacía los campos de texto de los inputs
    for (let index = 0; index < arrayInputs.length; index++) {
        if (arrayInputs[index].type == "text") {
            arrayInputs[index].value = "";
        }

    }
}


//Muestra los formularios de administración
function mostrarAdministracion() {

    ocultarFormularios();

    let form = document.getElementsByName("formAdministracion");

    for (let index = 0; index < form.length; index++) {
        form[index].style.display = "block";

    }
}


//Mostrar Formulario de Alta Subcripción
function mostrarAltaSubcripcion() {
    ocultarFormularios();
    formAltaSubcripcion.style.display = "block";
}



//--------------------------- FIN CONTROL VISUAL UI--------------------------------------------//


function altaUsuario() {

}

function altaJuego() {

}