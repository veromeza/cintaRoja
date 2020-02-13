class Largometraje{
    constructor(titulo){
        this.titulo = titulo
    }

    getTitulo(){
        return this.titulo
    }
}

class Pelicula extends Largometraje{
    constructor(titulo,genero,duracion){
        super(titulo);
        this.genero = genero
        this.duracion = duracion
    }

    getDuracion(){
        return this.duracion
    }

}

class Documental extends Largometraje{
    constructor(titulo,director){
        super(titulo);
        this.director = director
    }

    getDirector(){
        return this.director
    }
}

class Cine{
    constructor(sala){
        this.sala = sala
    }

    reproducir(largometraje){
        console.log(`Se está reproduciendo ${largometraje.getTitulo()}`);
    }
}


const rapunzel = new Pelicula('Rapunzel','90 min','Infantil');
const whatTheHealth = new Documental('What The Health','Kip Andersen');

const cinetecaNacional = new Cine(5);
cinetecaNacional.reproducir(whatTheHealth)

console.log(whatTheHealth);