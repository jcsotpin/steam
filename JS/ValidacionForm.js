"use strict";

let expRegDNI = /^\d{8}[A-Z]{1}$/;
let expRegNombreCliente = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}$/;
let exRegApellidosCliente = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]{2,48}\s[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]{2,48}$/;
let expRegFecha = /^([0-2][0-9]|[3][0-1])\/([0][1-9]|[1][0-2])\/(19|20)\d{2}$/;
let expRegEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let expRegTitulo = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}$/;
let expRegGenero = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]{2,20}$/;
let expRegPrecio = /^\d{1,3}\,\d{2}$/;
let expRegPegi = /^\d{1,2}$/;

//let expRegPegi = /^[1-9]{1,2}/;

/* function valida_envia() {
    //valido el DNI
    if (document.formAdministracion.txtNIF.value.length == 0) {
        alert("Tiene que escribir su DNI")
        document.fvalida.txtNIF.focus()
        return 0;

    }

    //valido el nombre
    if (document.formAdministracion.txtNombre.value.length == 0) {
        alert("Tiene que escribir su Nombre")
        document.fvalida.txtNombre.focus()
        return 0;
    }

    //valido el apellidos
    if (document.formAdministracion.txtApellidos.value.length == 0) {
        alert("Tiene que escribir su Apellido")
        document.fvalida.txtApellidos.focus()
        return 0;
    }

    //valido el Correo
    if (document.formAdministracion.txtDireccion.value.length == 0) {
        alert("Tiene que escribir su Correo Electronico")
        document.fvalida.txtDireccion.focus()
        return 0;
    }

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}
 */


function validaExpRegUsuario() {

    let sNombre = document.getElementById("txtNombreCliente").value;
    let sApeliidos = document.getElementById("txtApellidosCliente").value;
    let dNacimiento = document.getElementById("txtFechaCliente").value;
    let sEmail = document.getElementById("txtDireccionCliente").value;
    let bError = false;

    if (!expRegNombreCliente.test(sNombre)) {
        document.getElementById("txtNombreCliente").classList.add("error");
        document.getElementById("txtNombreCliente").focus();
        bError = true;
    } else {
        document.getElementById("txtNombreCliente").classList.remove("error");

        if (!exRegApellidosCliente.test(sApeliidos)) {
            document.getElementById("txtApellidosCliente").classList.add("error");
            document.getElementById("txtApellidosCliente").focus();
            bError = true;
        } else {
            document.getElementById("txtApellidosCliente").classList.remove("error");
            if (!expRegFecha.test(dNacimiento)) {
                document.getElementById("txtFechaCliente").classList.add("error");
                document.getElementById("txtFechaCliente").focus();
                bError = true;
            } else {
                document.getElementById("txtFechaCliente").classList.remove("error");
                if (!expRegEmail.test(sEmail)) {
                    document.getElementById("txtDireccionCliente").classList.add("error");
                    document.getElementById("txtDireccionCliente").focus();
                    bError = true;
                } else {
                    document.getElementById("txtDireccionCliente").classList.remove("error");
                }
            }

        }


    }


    return bError;


}


function validaExpRegJuego() {

    let sTitulo = document.getElementById("txtTitulo").value;
    let sGenero = document.getElementById("txtGenero").value;
    let dLanzamiento = document.getElementById("txtFechaJuego").value;
    let iPrecio = document.getElementById("txtPrecio").value;
    let iPegi = document.getElementById("txtPegi").value;
    let bError = false;

    if (!expRegTitulo.test(sTitulo)) {
        document.getElementById("txtTitulo").classList.add("error");
        document.getElementById("txtTitulo").focus();
        bError = true;
    } else {
        document.getElementById("txtTitulo").classList.remove("error");

        if (!expRegGenero.test(sGenero)) {
            document.getElementById("txtGenero").classList.add("error");
            document.getElementById("txtGenero").focus();
            bError = true;
        } else {
            document.getElementById("txtGenero").classList.remove("error");

            if (!expRegFecha.test(dLanzamiento)) {
                document.getElementById("txtFechaJuego").classList.add("error");
                document.getElementById("txtFechaJuego").focus();
                bError = true;
            } else {
                document.getElementById("txtFechaJuego").classList.remove("error");

                if (!expRegPrecio.test(iPrecio)) {
                    document.getElementById("txtPrecio").classList.add("error");
                    document.getElementById("txtPrecio").focus();
                    bError = true;
                } else {
                    document.getElementById("txtPrecio").classList.remove("error");

                    if (!expRegPegi.test(iPegi)) {
                        console.log(iPegi);
                        document.getElementById("txtPegi").classList.add("error");
                        document.getElementById("txtPegi").focus();
                        bError = true;
                    } else {
                        document.getElementById("txtPegi").classList.remove("error");
                    }
                }
            }

        }


    }


    return bError;


}