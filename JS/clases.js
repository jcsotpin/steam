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

class Compra{

    constructor(sIdCompra, sIdCliente, sIdJuego, dFecha, dCosteCompra){

        this.idCompra = sIdCompra;
        this.idCliente = sIdCliente;
        this.idJuego = sIdJuego;
        this.fecha = dFecha;
        this.costeCompra = dCosteCompra;


    }

}
Compra.prototype.toHTMLRow = function (){
    let sFila = "<tr>";
    sFila +="<td>" + this.idCompra + "</td>";
    sFila +="<td>" + this.idCliente + "</td>";
    sFila +="<td>" + this.idJuego + "</td>";
    sFila +="<td>" + this.fecha + "</td>";
    sFila +="<td>" + this.costeCompra + "</td>";

    return sFila;
}

class Subscripcion{

    constructor(sIdSubscripcion, dFechaExp, dPrecio){

        this.idSubscripcion = sIdSubscripcion;
        this.fechaExp = dFechaExp;
        this.precio = dPrecio;
    }
}

Subscripcion.prototype.toHTMLRow = function(){

    let sFila = "<tr>";
    sFila +="<td>" + this.idSubscripcion + "</td>";
    sFila +="<td>" + this.fechaExp + "</td>";
    sFila +="<td>" + this.precio + "</td>";
   

    return sFila;  
}