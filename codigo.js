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

//Juego

function Juego (id_juego, titulo, genero, año_lanzamiento, precio, pegi){

    this.id_juego = id_juego;
    this.titulo = titulo;
    this.genero = genero;
    this.año_lanzamiento = año_lanzamiento;
    this.precio = precio;
    this.pegi = pegi;
}
