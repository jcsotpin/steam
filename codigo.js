"use strict";


//Llamada a la Función de Ocultar Formularios
ocultarFormularios();

//Función para Ocultar los Formularios y el Área de Listado
function ocultarFormularios() {
    formAltaSubcripcion.style.display = "none";
   
    document.getElementById("titulo").textContent = "";
    document.getElementById("areaListado").textContent = "";
}

//Mostrar Formulario de Alta Subcripción
function mostrarAltaSubcripcion() {
    ocultarFormularios();
    formAltaSubcripcion.style.display = "block";
}


