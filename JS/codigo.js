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
document.getElementById("btnDarAltaSuscriptor").addEventListener("click", altaSuscriptor);

//--------------------------------------------------------------------------------------//


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

    let res = validaExpRegUsuario();

    if (res == true) {
        alert("noooo");

    } else {
        let iPosicion = tienda.clientes.length;

        let oUsuario = new Cliente(iPosicion + 1, sNombre, sApellidos, dFecha, sEmail);

        if (tienda.registrarCliente(oUsuario)) {
            alert("Cliente dado de alta correctamente");
            limpiarInputs(inputs);
            ocultarFormularios();
        } else {
            alert("Ya existe un cliente con ese correo");
        }



    }




}


function altaJuego() {
    let form = document.getElementById("formAdministracionJuegos");
    let inputs = form.getElementsByTagName("input");

    let sTitulo = inputs[0].value;
    let sGenero = inputs[1].value;
    let dFechaLanzamiento = inputs[2].value;
    let iPrecio = inputs[3].value;
    let iPegi = inputs[4].value;

    let res = validaExpRegJuego();

    if (res == true) {
        alert("nooJuegoNooo");
    } else {
        let iPosicion = tienda.juegos.length;

        let oJuego = new Juego(iPosicion + 1, sTitulo, sGenero, dFechaLanzamiento, iPrecio, iPegi);

        if (tienda.registrarJuego(oJuego)) {
            alert("Juego dado de alta correctamente");
            limpiarInputs(inputs);
            ocultarFormularios();
        } else {
            alert("Ya existe ese juego");
        }


    }



}

function altaSuscriptor() {
    let form = document.getElementById("formAdministracionSuscriptor");
    let inputs = form.getElementsByTagName("input");

    let sNIF = inputs[0];
    let iPosicion = tienda.suscriptores.length;

    //TO DO devuelve el id del tio que existe usando el nif para la busqueda
    let iID = buscaNIF(sNIF);

    if (iID != 0) {
        let oSuscriptor = new Subscripcion(iPosicion + 1, iID);
    }

}


//-----------------------------FIN REGISTRAR USUARIOS Y JUEGOS (ADMINISTRACION)---------------------//

//-----------------------------METODOS AUXILIARES---------------------------------------------------//
function _buscarCliente(emailBuscado) {
    let oClienteExistente = null;
    oClienteExistente = tienda.clientes.find(oCliente => oCliente.sEmail == emailBuscado);

    return oClienteExistente;
}

function _buscaJuego(titulo, añoLanzamiento) {

    let oJuegoExistente = null;
    oJuegoExistente = tienda.juegos.find(oJuego => oJuego.titulo == titulo && oJuego.año_lanzamiento == añoLanzamiento);

    return oJuegoExistente;

}
//------------------------------FIN METODOS AUXILIARES-----------------------------------------------//

//------------------------------AÑADIDO DE DATOS CON XML----------------------------------------------//

function loadXMLDoc(filename) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);
    xhttp.send();

    return xhttp.responseXML;
}

function añadeDatos() {

    var oXML = loadXMLDoc("steam.xml");
    var oJuegos = oXML.querySelectorAll("juego");
    var oClientes = oXML.querySelectorAll("cliente");
    var oCompras = oXML.querySelectorAll("compra");
    var oSubscripciones = oXML.querySelectorAll("subscripcion");

    //Introduzco los juegos
    for (i = 0; i < oJuegos.length; i++) {

        console.log(oJuegos);
    }
}

//------------------------------FIN AÑADIDO DE DATOS CON XML----------------------------------------------//