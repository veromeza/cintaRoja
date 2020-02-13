/* let usuarios = []
let i = 0

const registro = () => {
    let name = prompt ("Da  el nombre: ");
    let mail = prompt ("Da el correo: ");
    let pass = prompt ("Da un password: ");
    let usuario = {}
   usuario.name = name;
   usuario.mail = mail;
   usuario.pass = pass;
   usuarios[i] = usuario ;
   console.log(usuarios); 
   i++;
}

registro ()

usuarioNuevo.addEventListener ('click' , registro);

let myPenguin = {
    character: "Tootsie the Penguin",
    origin: "Donald Duck",
    notes: "A baby penguin in the classic 1939 cartoon \"Donald's Penguin\"."
};

console.log("¡Hola, soy un pingüino y mi nombre es " + myPenguin.character + "!");

myPenguin.puedeVolar = false;

myPenguin.graznar = function () {
    console.log("kaww kaww!");
};

myPenguin.graznar(); */

// class Perro{
//     constructor(raza,color,nombre){
//         //Definicion de los primeros atributos
//         this.color = color
//         this.raza = raza
//         this.nombre = nombre
//     }

//     //Definición de los metodos del Perro
//     ladrar(){
//         return 'Waau'
//     }

//     comer(comida){
//         return `${this.nombre} está comiendo ${comida}`
//     }

//     getColor(){
//         return this.color
//     }

//     setColor(newColor){
//         this.color = newColor
//     }
 
//     setPatas(numPatas){
//         this.patas = numPatas
//     }
// }

// const ayudanteSanta = new Perro('Galgo','Cafe','Ayudante de santa');
// const snoopy = new Perro('Beagle','Blanco y negro','Snoopy');

// console.log('Ayudante de santa: ', ayudanteSanta);
// /* console.log('Ayudante de santa: ', ayudanteSanta.createPatas(4)); */
// console.log('Ayudante de santa: ', ayudanteSanta);

//  console.log('Snoopy: ', snoopy.comer('Croquetas'));

//  class Cafe {
//     constructor(nombre,origen,tipo,tostado){
//         //Definicion de los primeros atributos
//         this.nombre = nombre;
//         this.origen = origen;
//         this.tipo = tipo;
//         this.tostado = tostado;
//     } 
    
//     Origen (){
//         if (this.tipo)
//         console.log(`${this.nombre} viene de ${this.origen} y es intenso`);
//         else
//         console.log(`${this.nombre} viene de ${this.origen} y es ligero`);
//     }
 
//     setTostado (newTostado){
//         this.tostado = newTostado;
//         console.log(this.tostado);
//     }
   

// } 

// const tierraGarat = new Cafe ("madera","Chiapas","ligero","medio");

// console.log(tierraGarat);
// tierraGarat.setTostado();
// tierraGarat.Origen();

class Mascota {
    constructor (esqueleto, dieta, especie){
    this.esqueleto = esqueleto;
    this.dieta = dieta;
    this.especie = especie;
}

comer(){
    console.log('esta comiendo');
}

}


class Perro extends Mascota {
    constructor (esqueleto,dieta) {
        super (esqueleto,dieta)
    }
}

let perro = new Perro("vertebrado","croquetas");
console.log(perro);
    
// this.raza = golden,
// this.color = dorado,
// this.nombre = Tom,
// this.tamaño = grande,
// this.edad = 5,
// this.juguetesFavoritos = ["pelota","boomerang","peluche","calcetines"]}

// getNombre () {
//     return nombre
// },
// setRaza () {
//     return this.raza = "salchicha"
// } ,
// delete () { 
//     delete perro.juguetesFavoritos[2];
//     return perro.length--
// },
// update () {
//  return this.edad = "7"
// }




