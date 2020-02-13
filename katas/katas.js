function farenheitToCelsius (N) {
    return (N - 32) / 1.8000 ;
    }
    console.log(farenheitToCelsius (32));

    function evaluateLetter  (letra)  {
        if (letra == 'a'  || letra == 'e' ||  letra == 'i' ||  letra == 'o' ||  letra == 'u' )
             return "Vocal" ;
             else {
                 return "Consonante"
             }
    }
    console.log( evaluateLetter('b') );

    function decimalToBinary(dec){
        return (dec >>> 0).toString(2)}
        console.log (decimalToBinary(5))

        function time  (velocidad, distancia)  {

            return (distancia / (velocidad));
               
        }
        
        console.log(time(7300,120000));

        
        return "Te tomaría " + time
        + " horas recorrer "
        + distancia
        + "km a esta velocidad."