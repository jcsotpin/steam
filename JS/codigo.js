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

class Juego{ 
    constructor(id_juego, titulo, genero, año_lanzamiento, precio, pegi){

        this.id_juego = id_juego;
        this.titulo = titulo;
        this.genero = genero;
        this.año_lanzamiento = año_lanzamiento;
        this.precio = precio;
        this.pegi = pegi;
    }   
}

//Clase Tienda
class Tienda{
    constructor(){
        this.juegos = [];
        this.clientes = [];
    }
    //Función para añadir juegos
    registrarJuego(){

    }
    //Función para añadir nuevos clientes
    registrarCliente(){

    }
    //Funcion para listar los juegos
    listarJuegos(){

        //Testing
        
        /*var oTabla = document.createElement("TABLE");
        var oCaption = oTabla.createCaption();
        oCaption.textContent="";

        var oTHead = oTabla.createTHead();
        var oFila = oTHead.insertRow(-1);
        var oCelda = oFila.insertCell(-1);
        oCelda.textContent="";*/

    }
}