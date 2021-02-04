"use strict";
function valida_envia(){
        //valido el DNI
        if (document.formAdministracion.txtNIF.value.length==0){
              alert("Tiene que escribir su DNI")
              document.fvalida.txtNIF.focus()
              return 0;

        }

        //valido el nombre
        if (document.formAdministracion.txtNombre.value.length==0){
              alert("Tiene que escribir su Nombre")
              document.fvalida.txtNombre.focus()
              return 0;
        }

        //valido el apellidos
        if (document.formAdministracion.txtApellidos.value.length==0){
              alert("Tiene que escribir su Apellido")
              document.fvalida.txtApellidos.focus()
              return 0;
        }

        //valido el Correo
        if (document.formAdministracion.txtDireccion.value.length==0){
              alert("Tiene que escribir su Correo Electronico")
              document.fvalida.txtDireccion.focus()
              return 0;
        }

        	//el formulario se envia
          alert("Muchas gracias por enviar el formulario");
          document.fvalida.submit();
    }
