"use strict";
//Creamos el objeto tienda para añadirle datos posteriormente
var tienda = new Tienda();

//-------------------------EVENTSLISTENERS----------------------------------------------//
//-----Botonones de navegacion superior-------------------
document.getElementById("btnInicio").addEventListener("click", muestraInicio);
document.getElementById("btnTienda").addEventListener("click", muestraTienda);
document.getElementById("btnBiblioteca").addEventListener("click", muestraBiblioteca);
/* document.getElementById("btnUsuario").addEventListener("click", muestraUsuario); */
//document.getElementById("btnAdministrar").addEventListener("click", muestraAdministracion);
document.getElementById("btnAltaSuscriptor").addEventListener("click", muestraFormSuscriptor);
document.getElementById("btnAltaCliente").addEventListener("click", muestraFormAltaCliente);
document.getElementById("btnAltaJuego").addEventListener("click", muestraFormAltaJuego);
//-----Fin botones de navegacion superior-------------------
document.getElementById("btnAceptarAltaPersona").addEventListener("click", altaUsuario);
document.getElementById("btnAceptarAltaJuego").addEventListener("click", altaJuego);
document.getElementById("btnDarAltaSuscriptor").addEventListener("click", altaSuscriptor);
document.getElementById("btnCargarDatos").addEventListener("click", cargarDatos);


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


    tienda.listarJuegos();
}

function muestraBiblioteca() {
    ocultarFormularios();


}

function muestraUsuario() {
    ocultarFormularios();
    document.getElementById("formUsuario").style.display = "block";
}

function muestraFormSuscriptor() {

    ocultarFormularios();
    document.getElementById("formAdministracionSuscriptor").style.display = "block";
}

function muestraFormAltaCliente() {
    ocultarFormularios();
    document.getElementById("formAdministracionUsuario").style.display = "block";
}

function muestraFormAltaJuego() {
    ocultarFormularios();
    document.getElementById("formAdministracionJuegos").style.display = "block";
}
//Función para Ocultar los Formularios y el Área de Listado
function ocultarFormularios() {

    let oTabla = document.getElementsByTagName("table");
    if (oTabla != null) {
        //    oTabla.remove();
        // document.querySelector("label").remove();
        // document.querySelector("#comboBoxGenero").remove();

        for (let index = 0; index < oTabla.length; index++) {
            oTabla[index].remove();

        }

    }


    let oDiv = document.querySelector("#listadoJuegos");
    if (oDiv != null) {
        oDiv.remove();
    }



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
    let sNIF = inputs[3].value;
    let sEmail = inputs[4].value;

    let res = validaExpRegUsuario();

    if (res != "") {
        alert(res);


    } else {
        let iPosicion = tienda.clientes.length;


        let arrayFecha = dFecha.split("/");

        let dFechaCambiada = new Date(arrayFecha[2], arrayFecha[1] - 1, arrayFecha[0]);



        let oUsuario = new Cliente(iPosicion + 1, sNIF, sNombre, sApellidos, dFechaCambiada, sEmail);

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

    if (res != "") {
        alert(res);

    } else {
        let iPosicion = tienda.juegos.length;


        let arrayFecha = dFechaLanzamiento.split("/");

        let dFechaCambiada = new Date(arrayFecha[2], arrayFecha[1] - 1, arrayFecha[0]);

        console.log(dFechaCambiada);

        let oJuego = new Juego(iPosicion + 1, sTitulo, sGenero, dFechaCambiada, parseFloat(iPrecio), parseInt(iPegi));

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

    let res = validarNIF();
    if (res != "") {
        alert(res);
    } else {

        let iPosicion = tienda.subscripciones.length;
        let dFechaActual = new Date();
        let dFechaExpiracion = new Date();
        dFechaExpiracion.setMonth(dFechaActual.getMonth() + 1);


        let iIdCliente = buscaIdCliente(sNIF);

        if (iIdCliente != 0) {
            let oSubcriptorNuevo = new Subscripcion(iPosicion, parseInt(iIdCliente), dFechaExpiracion);
            console.log(oSubcriptorNuevo);

            if (tienda.registrarSubscripcion(oSubcriptorNuevo)) {
                alert("Subscriptor dado de alta");
                limpiarInputs(inputs);
                ocultarFormularios();
            } else {
                alert("Ya existe esa subscripción");
            }
        } else {
            alert("El cliente no existe para suscribirse");
        }





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

function _buscarCompra(idJuego, idCliente) {

    let oCompraExistente = null;
    oCompraExistente = tienda.compras.find(oCompra => oCompra.idCliente == idCliente && oCompra.idJuego == idJuego);

    return oCompraExistente;
}

function _buscarSuscripcion(idCliente, fechaExp) {

    let oSubscripcionExistente = null;

    //Obtenemos la fecha de realización
    //TODO: fechaExp
    oSubscripcionExistente = tienda.subscripciones.find(oSubscripcion => oSubscripcion.idCliente == idCliente && oSubscripcion.fechaExp > (fechaExp));
    return oSubscripcionExistente;
}

function buscaIdCliente(sNIF) {
    let iIdDevuelto = 0;
    console.log(sNIF);
    for (let index = 0; index < tienda.clientes.length; index++) {
        console.log(tienda.clientes[index]);
        if (tienda.clientes[index].sNIF == sNIF) {

            iIdDevuelto = tienda.clientes[index].iId;
        }

    }
    return iIdDevuelto;
}

function _buscarJuegoId(id) {

    let oJuegoADevolver = null;

    oJuegoADevolver = tienda.juegos.find(oJuego => oJuego.id_juego == id);

    return oJuegoADevolver;

}
//------------------------------FIN METODOS AUXILIARES-----------------------------------------------//

//------------------------------AÑADIDO DE DATOS CON XML----------------------------------------------//

function loadXMLDoc(filename) {
    if (window.XMLHttpRequest) {
        var xhttp = new XMLHttpRequest();
    } else // code for IE5 and IE6
    {
        var xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);

    xhttp.send();

    return xhttp.responseXML;
}

function cargarDatos() {


    var oXML = loadXMLDoc("../steam.xml");
    var oJuegos = oXML.getElementsByTagName("juego");
    var oClientes = oXML.getElementsByTagName("cliente");
    var oCompras = oXML.getElementsByTagName("compra");
    var oSubscripciones = oXML.getElementsByTagName("subscripcion");



    //Introduzco los juegos
    for (var i = 0; i < oJuegos.length; i++) {

        // console.log(oJuegos[i]);
        var titulo = oJuegos[i].getElementsByTagName("titulo")[0].textContent;
        var genero = oJuegos[i].getElementsByTagName("genero")[0].textContent;
        var anyo = oJuegos[i].getElementsByTagName("anyo_lanzamiento")[0].textContent;
        var precio = oJuegos[i].getElementsByTagName("precio")[0].textContent;
        var pegi = oJuegos[i].getElementsByTagName("pegi")[0].textContent;


        let arrayFecha = anyo.split("/");

        let dFecha = new Date(arrayFecha[0], arrayFecha[1] - 1, arrayFecha[2]);

        var juego = new Juego(i + 1, titulo, genero, dFecha, parseFloat(precio), parseInt(pegi));

        tienda.registrarJuego(juego);

    }
    //Introduzco los usuarios

    for (var i = 0; i < oClientes.length; i++) {

        var id = oClientes[i].getElementsByTagName("id")[0].textContent;
        var nif = oClientes[i].getElementsByTagName("nif")[0].textContent;
        var nombre = oClientes[i].getElementsByTagName("nombre")[0].textContent;
        var apellidos = oClientes[i].getElementsByTagName("apellidos")[0].textContent;
        var fecha_nac = oClientes[i].getElementsByTagName("fecha_nac")[0].textContent;
        var correo = oClientes[i].getElementsByTagName("email")[0].textContent;

        let arrayFecha = fecha_nac.split("/");

        let dFecha = new Date(arrayFecha[0], arrayFecha[1] - 1, arrayFecha[2]);

        var usuario = new Cliente(parseInt(id), nif, nombre, apellidos, dFecha, correo);

        tienda.registrarCliente(usuario);
    }

    //Introduzco las compras

    for (var i = 0; i < oCompras.length; i++) {

        var id_cliente = oCompras[i].getElementsByTagName("id_cliente")[0].textContent;
        var id_juego = oCompras[i].getElementsByTagName("id_juego")[0].textContent;
        var fecha = oCompras[i].getElementsByTagName("fecha")[0].textContent;
        var coste = oCompras[i].getElementsByTagName("coste_compra")[0].textContent;

        let arrayFecha = fecha.split("/");

        let dFecha = new Date(arrayFecha[0], arrayFecha[1] - 1, arrayFecha[2]);

        var compra = new Compra(i + 1, parseInt(id_cliente), parseInt(id_juego), dFecha, parseFloat(coste));

        tienda.registrarCompra(compra);
    }

    for (var i = 0; i < oSubscripciones.length; i++) {
        var idCliente = oSubscripciones[i].getElementsByTagName("id")[0].textContent;
        var fechaExp = oSubscripciones[i].getElementsByTagName("fechaExpiracion")[0].textContent;

        let arrayFecha = fechaExp.split("/");

        let fecha = new Date(arrayFecha[0], arrayFecha[1] - 1, arrayFecha[2]);

        var subscripcion = new Subscripcion(i + 1, parseInt(idCliente), fecha);

        tienda.registrarSubscripcion(subscripcion);
    }

    alert("Se han cargado los datos correctamente.");
}

function filtraGenero() {

    let genero = document.querySelector("#comboBoxGenero").value;

    tienda.listarJuegosPorGenero(genero);

}


//------------------------------FIN AÑADIDO DE DATOS CON XML----------------------------------------------//