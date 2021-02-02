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
}
