// crea un proceso aparte, la unidad son mili segundos, se podria decir que retarda el proceso segun el tiempo que establezca
// setTimeout (()=>{
// console.log(1);
// },3000)

// console.log(2);
// console.log(3);

// tener en cuenta cual es el hilo de ejecuccion principal y cuales son los procesos alternos
// se ultiza cuando se consulta la base de datos o una api o un archivo

// ejercicio: funciones suma resta multiplicaion
// funcion operacion va a recibir dos numeros y la opreacion que voy a realizar


function suma(a,b) {
    console.log(a+b);
}

function resta(c,d) {
    console.log(c-d);
}

function multi(e,f) {
    console.log(e*f);
}

function operacion(n1,n2,op) {
   console.log(op(n1,n2));
}

operacion(3,5,suma);

// ejemplo
// function createQuote(quote, callback){ 
//     var myQuote = "Like I always say, " + quote;
//     callback(myQuote); // 2
//   }
  
//   function logQuote(quote){
//     console.log(quote);
//   }
  
//   createQuote("eat your vegetables!", logQuote); // 1
  
  // Result in console: 
  // Like I always say, eat your vegetables!