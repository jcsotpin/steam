class Juego {
    constructor(id_juego, titulo, genero, año_lanzamiento, precio, pegi) {

        this.id_juego = id_juego;
        this.titulo = titulo;
        this.genero = genero;
        this.año_lanzamiento = año_lanzamiento;
        this.precio = precio;
        this.pegi = pegi;
    }
}
class Cliente {
    constructor(iID, sNombre, sApellidos, dFecha, sEmail) {

        this.iId = iID;
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