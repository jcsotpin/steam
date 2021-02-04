"use strict";
//Creamos el objeto tienda para añadirle datos posteriormente
let tienda = new Tienda();

//-------------------------EVENTSLISTENERS----------------------------------------------//
//-----Botonones de navegacion superior-------------------
document.getElementById("btnInicio").addEventListener("click", muestraInicio);
document.getElementById("btnTienda").addEventListener("click", muestraTienda);
document.getElementById("btnBiblioteca").addEventListener("click", muestraBiblioteca);
document.getElementById("btnUsuario").addEventListener("click", muestraUsuario);
document.getElementById("btnAdministrar").addEventListener("click", muestraAdministracion);
//-----Fin botones de navegacion superior-------------------
document.getElementById("btnAceptarAltaPersona").addEventListener("click", altaUsuario);
document.getElementById("btnAceptarAltaJuego").addEventListener("click", altaJuego);

//--------------------------------------------------------------------------------------//

//Contadores provisionales id cliente y id juego
let iContadorCliente = 0;
let iContadorJuego = 0;

//Llamada a la Función de Ocultar Formularios para que comiencen ocultos
ocultarFormularios();

//---------------------------CONTROL VISUAL UI--------------------------------------------//



//Mostrar los formularios

function muestraInicio() {
    
    ocultarFormularios();
}

function muestraTienda() {
    ocultarFormularios();
}

function muestraBiblioteca() {
    ocultarFormularios();
}

function muestraUsuario() {
    ocultarFormularios();
}

function muestraAdministracion() {

    ocultarFormularios();

    let form = document.getElementsByName("formAdministracion");

    for (let index = 0; index < form.length; index++) {
        form[index].style.display = "block";

    }
}


//Función para Ocultar los Formularios y el Área de Listado
function ocultarFormularios() {

    let arrayFormularios = document.getElementsByTagName("form");

    //Oculta los formularios
    for (let index = 0; index < arrayFormularios.length; index++) {
        arrayFormularios[index].style.display = "none";
    }

    let arrayInputs = document.getElementsByTagName("input");

    //Vacía los campos de texto de los inputs
    limpiarInputs(arrayInputs);

}



//Limpia todos los inputs menos los botones
function limpiarInputs(inputs) {

    for (let index = 0; index < inputs.length; index++) {
        if (inputs[index].type != "button") {
            inputs[index].value = "";
        }
    }
}


//--------------------------- FIN CONTROL VISUAL UI--------------------------------------------//





//-----------------------------REGISTRAR USUARIOS Y JUEGOS (ADMINISTRACION)---------------------//

function altaUsuario() {

    let form = document.getElementById("formAdministracionUsuario");
    let inputs = form.getElementsByTagName("input");

    let sNombre = inputs[0].value;
    let sApellidos = inputs[1].value;
    let dFecha = inputs[2].value;
    let sEmail = inputs[3].value;
    iContadorCliente++;

    let usuario = new Cliente(iContadorCliente, sNombre, sApellidos, dFecha, sEmail);

    if(tienda.registrarCliente(usuario)){
        alert("Cliente dado de alta correctamente");
        ocultarFormularios();
    }else{
        alert("Ya existe un cliente con ese correo");
    }

    limpiarInputs(inputs);


}


function altaJuego() {
    let form = document.getElementById("formAdministracionJuegos");
    let inputs = form.getElementsByTagName("input");

    let sTitulo = inputs[0].value;
    let sGenero = inputs[1].value;
    let dFechaLanzamiento = inputs[2].value;
    let iPrecio = inputs[3].value;
    let iPegi = inputs[4].value;
    iContadorJuego++;

    let juego = new Juego(iContadorJuego, sTitulo, sGenero, dFechaLanzamiento, iPrecio, iPegi);

    tienda.registrarJuego(juego);

    limpiarInputs(inputs);

}

//-----------------------------FIN REGISTRAR USUARIOS Y JUEGOS (ADMINISTRACION)---------------------//

//-----------------------------METODOS AUXILIARES---------------------------------------------------//
function _buscarCliente(emailBuscado){
    let oClienteExistente = null; 
    oClienteExistente = tienda.clientes.find(oCliente => oCliente.sEmail == emailBuscado);

    return oClienteExistente;
}
//------------------------------FIN METODOS AUXILIARES-----------------------------------------------//

//------------------------------AÑADIDO DE DATOS CON XML----------------------------------------------//

function loadXMLDoc(filename){
    if(window.XMLHttpRequest){
        xhttp = new XMLHttpRequest();
    }else{
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);
    xhttp.send();

    return xhttp.responseXML;
}
function añadeDatos(){

    var oXML = loadXMLDoc("steam.xml");
    var oJuegos = oXML.querySelectorAll("juego");
    var oClientes = oXML.querySelectorAll("cliente");
    var oCompras = oXML.querySelectorAll("compra");
    var oSubscripciones = oXML.querySelectorAll("subscripcion");

    //Introduzco los juegos
    for(i=0; i<oJuegos.length; i++){

        console.log(oJuegos);
    }
}

//------------------------------FIN AÑADIDO DE DATOS CON XML----------------------------------------------//

