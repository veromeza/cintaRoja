/* function farenheitToCelsius (aqui recibe los parametros) {

    let celcius = (N - 32)
} */

 function farenheitToCelsius (N) {

    let result = (N - 32) * 5/9 ;
    return `los grados ${N} Farenheit son ${result} celsius`;
}

console.log(farenheitToCelsius (32));

let letra = document.getElementById ('letra')
let vocal = ['a' , 'e' , 'i' , 'o' , 'u'];

const vocalOconsonante = () => {

    let valorletra = letra.value

    if (valorletra === vocal) {
        validar1.innerHTML = "Vocal!";
    } else {
        validar.innerHTML = "Consonante";
    }

    
}

enviar.addEventListener ('click' , vocalOconsonante);

let evaluateLetter = (letra) => {
    if (letra == 'a' || letra == 'A' || letra == 'e' || letra == 'E' || letra == 'i' || letra == 'I' || letra == 'o' || letra == 'O' || letra == 'u' || letra == 'U') {
        return "Es una vocal";
    } else if ((letra >= 'a' && letra <= 'z') || (letra >= 'A' && letra <= 'Z')) {
        return "Es una consonante";
    } else {
        return "Debes introducir una letra del alfabeto";
    }
}

console.log( evaluateLetter('b') );

const binario = (num) => {
    let binario = []
let resultado = num 

}


/* hacer bien la del binario y la de la vocal, como la hicieron en el pizarron */

const evaluateNumber = (numero) => {
    if (numero % 5 == 0 && numero % 11 == 0){
        return 'True'
    } else {
        return 'False'
    }
}

console.log( evaluateNumber(55) ); 


