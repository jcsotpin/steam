
class Juego{ 
    constructor(id_juego, titulo, genero, año_lanzamiento, precio, pegi){

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
    setId_juego(id_juego){
        this.id_juego= id_juego;
    }
    //Titulo
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo){
        this.titulo= titulo;
    }
    //Genero
    getGenero() {
        return this.id_juego;
    }
    setGenero(genero){
        this.genero= genero;
    }
    //Año lanzamiento
    getAño_lanzamiento() {
        return this.año_lanzamiento;
    }
    setAño_lanzamiento(genero){
        this.año_lanzamiento= año_lanzamiento;
    }
    //Precio
    getPrecioo() {
        return this.precio;
    }
    setPrecio(precio){
        this.precio= precio;
    }

        //Pegi
        getPegi() {
        return this.pegi;
    }
    setPegi(pegi){
        this.pegi= pegi;
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
