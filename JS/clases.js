//Clase Tienda
class Tienda {
    constructor() {
            this.juegos = [];
            this.clientes = [];
            this.subscripciones = [];
            this.compras = [];
        }
        //Función para añadir juegos
    registrarJuego(juego) {

            let oJuegoExistente = null;

            oJuegoExistente = _buscaJuego(juego.titulo, juego.año_lanzamiento);

            if (oJuegoExistente == null) {
                this.juegos.push(juego);
                return true;
            } else {
                return false;
            }



        }
        //Función para añadir nuevos clientes
    registrarCliente(cliente) {

        let oClienteExistente = null;

        oClienteExistente = _buscarCliente(cliente.sEmail);

        if (oClienteExistente == null) {
            this.clientes.push(cliente);
            return true;
        } else {
            return false;
        }

    }
    registrarCompra(compra) {

        let oCompraExistente = null;

        oCompraExistente = _buscarCompra(compra.idJuego, compra.idCliente);

        if (oCompraExistente == null) {
            this.compras.push(compra);
            return true;
        } else {
            return false;
        }
    }
    registrarSubscripcion(subscripcion) {

            let oSubscripcionExistente = null;

            oSubscripcionExistente = _buscarSuscripcion(subscripcion.idCliente, subscripcion.fechaExp);

            if (oSubscripcionExistente == null) {
                this.subscripciones.push(subscripcion);
                return true;
            } else {
                return false;
            }
        }
        //Funcion para listar los juegos
    listarJuegos() {

        ocultarFormularios();
        

        var oLabel = document.createElement("LABEL");
        oLabel.textContent = "Filtre por género: ";
        var oCombo = document.createElement("SELECT");
        oCombo.classList.add("browser-default");
        oCombo.classList.add("custom-select");
        oCombo.setAttribute("id", "comboBoxGenero");
        var oOption = document.createElement("OPTION");
        oOption.setAttribute("selected", "");
        oOption.textContent = "CUALQUIERA";
        oCombo.appendChild(oOption);
        var generos = [];
        for(let i = 0; i<this.juegos.length; i++){

            if(!generos.includes(this.juegos[i]["genero"])){

                oOption = document.createElement("OPTION");
            
                oOption.setAttribute("value", this.juegos[i]["genero"]);
                oOption.textContent = this.juegos[i]["genero"];
                oCombo.appendChild(oOption);

                generos.push(this.juegos[i]["genero"]);

            }
            
        }
        //Creo boton filtrar
        
        var oBtnFiltra = document.createElement("INPUT");
        oBtnFiltra.classList.add("btn");
        oBtnFiltra.classList.add("btn-primary");
        oBtnFiltra.setAttribute("type", "button");
        oBtnFiltra.setAttribute("value", "Filtra");
        oBtnFiltra.setAttribute("id", "btnFiltra");
        oBtnFiltra.style.marginLeft="0.5em";
        oBtnFiltra.addEventListener("click", filtraGenero);

        var oTabla = document.createElement("table");
        
        oTabla.setAttribute('border', '1');
        oTabla.id = "lista";
       var header = oTabla.createTHead();
       var row = header.insertRow(0);
       var cell = row.insertCell(-1);
       cell.textContent = "TITULO";
       cell = row.insertCell(-1);
       cell.textContent = "GENERO";
       cell = row.insertCell(-1);
       cell.textContent = "AÑO";
       cell = row.insertCell(-1);
       cell.textContent = "PRECIO";
       cell = row.insertCell(-1);
       cell.textContent = "PEGI";
       cell = row.insertCell(-1);
       cell.textContent = "Comprar ";

       var tbody = document.createElement("TBODY");
       oTabla.appendChild(tbody);
    
       for(var i = 0; i<this.juegos.length; i++){
           //Filtramos por el genero
            
                row = tbody.insertRow(-1);
               var btnCompra = document.createElement("button");
                btnCompra.textContent = "Comprar";
                //let juegoIndividual = Object.values(this.juegos[i]);

                cell = row.insertCell(-1);
                cell.textContent = this.juegos[i]["titulo"];
                cell = row.insertCell(-1);
                cell.textContent = this.juegos[i]["genero"];
                cell = row.insertCell(-1);
                cell.textContent = this.juegos[i]["año_lanzamiento"].getFullYear();
                cell = row.insertCell(-1);
                cell.textContent = this.juegos[i]["precio"];
                cell = row.insertCell(-1);
                cell.textContent = this.juegos[i]["pegi"];
                cell = row.insertCell(-1);
                cell.appendChild(btnCompra); 
           
       }
       let oDiv = document.createElement("DIV");
       oDiv.setAttribute("id", "listadoJuegos");
       oDiv.appendChild(oLabel);
       oDiv.appendChild(oCombo);
       oDiv.appendChild(oBtnFiltra);
       oDiv.appendChild(oTabla);

       document.body.appendChild(oDiv);

    }

    listarJuegosPorGenero(generoFiltrado){


        //Elimino todos los juegos
        document.querySelector("#listadoJuegos").remove();
        

        if(generoFiltrado == "CUALQUIERA"){
            tienda.listarJuegos();
        }else{

            var oLabel = document.createElement("LABEL");
        oLabel.textContent = "Filtre por género: ";
        var oCombo = document.createElement("SELECT");
        oCombo.classList.add("browser-default");
        oCombo.classList.add("custom-select");
        oCombo.setAttribute("id", "comboBoxGenero");
        var oOption = document.createElement("OPTION");
        
        oOption.textContent = "CUALQUIERA";
        oCombo.appendChild(oOption);
        
        
        var generos = [];
        for(let i = 0; i<this.juegos.length; i++){
            
            
            if(!generos.includes(this.juegos[i]["genero"])){

                
                oOption = document.createElement("OPTION");
            
                oOption.setAttribute("value", this.juegos[i]["genero"]);
                oOption.textContent = this.juegos[i]["genero"];
                
                if(generoFiltrado == this.juegos[i]["genero"]){
                    oOption.setAttribute("selected", "");
                }
                oCombo.appendChild(oOption);

                generos.push(this.juegos[i]["genero"]);

            }
        }
        //Creo boton filtrar
        
        var oBtnFiltra = document.createElement("INPUT");
        oBtnFiltra.classList.add("btn");
        oBtnFiltra.classList.add("btn-primary");
        oBtnFiltra.setAttribute("type", "button");
        oBtnFiltra.setAttribute("value", "Filtra");
        oBtnFiltra.setAttribute("id", "btnFiltra");
        oBtnFiltra.style.marginLeft="0.5em";
        oBtnFiltra.addEventListener("click", filtraGenero);

        var oTabla = document.createElement("table");
        
        oTabla.setAttribute('border', '1');
        oTabla.id = "lista";
       var header = oTabla.createTHead();
       var row = header.insertRow(0);
       var cell = row.insertCell(-1);
       cell.textContent = "TITULO";
       cell = row.insertCell(-1);
       cell.textContent = "GENERO";
       cell = row.insertCell(-1);
       cell.textContent = "AÑO";
       cell = row.insertCell(-1);
       cell.textContent = "PRECIO";
       cell = row.insertCell(-1);
       cell.textContent = "PEGI";
       cell = row.insertCell(-1);
       cell.textContent = "Comprar ";

       var tbody = document.createElement("TBODY");
       oTabla.appendChild(tbody);
    
       for(var i = 0; i<this.juegos.length; i++){
           //Filtramos por el genero
            if(generoFiltrado == this.juegos[i]["genero"]){

                row = tbody.insertRow(-1);
                var btnCompra = document.createElement("button");
                 btnCompra.textContent = "Comprar";
                 //let juegoIndividual = Object.values(this.juegos[i]);
 
                 cell = row.insertCell(-1);
                 cell.textContent = this.juegos[i]["titulo"];
                 cell = row.insertCell(-1);
                 cell.textContent = this.juegos[i]["genero"];
                 cell = row.insertCell(-1);
                 cell.textContent = this.juegos[i]["año_lanzamiento"].getFullYear();
                 cell = row.insertCell(-1);
                 cell.textContent = this.juegos[i]["precio"];
                 cell = row.insertCell(-1);
                 cell.textContent = this.juegos[i]["pegi"];
                 cell = row.insertCell(-1);
                 cell.appendChild(btnCompra); 
            }   
       }
       let oDiv = document.createElement("DIV");
       oDiv.setAttribute("id", "listadoJuegos");
       oDiv.appendChild(oLabel);
       oDiv.appendChild(oCombo);
       oDiv.appendChild(oBtnFiltra);
       oDiv.appendChild(oTabla);

       document.body.appendChild(oDiv);

        }
       // document.body.appendChild(oTabla);

    }
}
class Juego {
    constructor(id_juego, titulo, genero, año_lanzamiento, precio, pegi) {

        this.id_juego = id_juego;
        this.titulo = titulo;
        this.genero = genero;
        this.año_lanzamiento = año_lanzamiento;
        this.precio = precio;
        this.pegi = pegi;
    }

    //Id Juego
    getId_juego() {
        return this.id_juego;
    }
    setId_juego(id_juego) {
            this.id_juego = id_juego;
        }
        //Titulo
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
            this.titulo = titulo;
        }
        //Genero
    getGenero() {
        return this.id_juego;
    }
    setGenero(genero) {
            this.genero = genero;
        }
        //Año lanzamiento
    getAño_lanzamiento() {
        return this.año_lanzamiento;
    }
    setAño_lanzamiento(genero) {
            this.año_lanzamiento = año_lanzamiento;
        }
        //Precio
    getPrecioo() {
        return this.precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }


    setPrecio(precio) {
        this.precio = precio;
    }

    //Pegi
    getPegi() {
        return this.pegi;
    }
    setPegi(pegi) {
        this.pegi = pegi;
    }

    toHTMLRow() {

        let sCadena = "";
        sCadena += "<tr>";
        sCadena += "<td>";
        sCadena += this.getId_juego();
        sCadena += "</td>";
        sCadena += "<td>";
        sCadena += this.getTitulo();
        sCadena += "</td>";
        sCadena += "<td>";
        sCadena += this.getGenero();
        sCadena += "</td>";
        sCadena += "<td>";
        sCadena += this.getPrecioo();
        sCadena += "</td>";
        sCadena += "<td>";
        sCadena += this.getAño_lanzamiento();
        sCadena += "</td>";
        sCadena += "</tr>";
        return sCadena;

    }

}



class Cliente {
    constructor(iID, sNIF, sNombre, sApellidos, dFecha, sEmail) {

        this.iId = iID;
        this.sNIF = sNIF;
        this.sNombre = sNombre;
        this.sApellidos = sApellidos;
        this.dFecha = dFecha;
        this.sEmail = sEmail;

    }

    getID() {
        return this.iId;
    }
    setID(iID) {
        this.iId = iID;
    }
    getNombre() {
        return this.sNombre;
    }
    setNombre(sNombre) {
        this.sNombre = sNombre;
    }
    getApellidos() {
        return this.sApellidos;
    }
    setApellidos(sApellidos) {
        this.sApellidos = sApellidos;
    }
    getFecha() {
        return this.dFecha;
    }
    setFecha(dFecha) {
        this.dFecha = dFecha;
    }
    getEmail() {
        return this.sEmail;
    }
    setEmail(sEmail) {
        this.sEmail = sEmail;
    }

    toHTMLRow() {

        let sCadena = "";
        sCadena += "<tr>";
        sCadena += "<td>";
        sCadena += this.getID();
        sCadena += "</td>";
        sCadena += "<td>";
        sCadena += this.getNombre();
        sCadena += "</td>";
        sCadena += "<td>";
        sCadena += this.getApellidos();
        sCadena += "</td>";
        sCadena += "<td>";
        sCadena += this.getFecha();
        sCadena += "</td>";
        sCadena += "<td>";
        sCadena += this.getEmail();
        sCadena += "</td>";
        sCadena += "</tr>";
        return sCadena;

    }

}


class Compra {

    constructor(sIdCompra, sIdCliente, sIdJuego, dFecha, dCosteCompra) {

        this.idCompra = sIdCompra;
        this.idCliente = sIdCliente;
        this.idJuego = sIdJuego;
        this.fecha = dFecha;
        this.costeCompra = dCosteCompra;


    }

}
Compra.prototype.toHTMLRow = function() {
    let sFila = "<tr>";
    sFila += "<td>" + this.idCompra + "</td>";
    sFila += "<td>" + this.idCliente + "</td>";
    sFila += "<td>" + this.idJuego + "</td>";
    sFila += "<td>" + this.fecha + "</td>";
    sFila += "<td>" + this.costeCompra + "</td>";

    return sFila;
}

class Subscripcion {

    constructor(sIdSubscripcion, sIdCliente, dFechaExp) {

        this.idSubscripcion = sIdSubscripcion;
        this.idCliente = sIdCliente;
        this.fechaExp = dFechaExp;
        this.precio = parseFloat("10,00");
    }
}

Subscripcion.prototype.toHTMLRow = function() {

    let sFila = "<tr>";
    sFila += "<td>" + this.idSubscripcion + "</td>";
    sFila += "<td>" + this.idCliente + "</td>";
    sFila += "<td>" + this.fechaExp + "</td>";
    sFila += "<td>" + this.precio + "</td>";

    return sFila;
}