// importacion de un objeto con funciones de request

const request = require('request');
const axios = require('axios')

// const showPokemon = (error, response, body) => {

// console.log(response);

// };

// const pokemonById = (id) => {
//     request.get ('https://pokeapi.co/api/v2/pokemon/' + id ,  (error, response, body) => {
//         const pokeMoves = JSON.parse(body).moves ;

//         for (move = 0; move < pokeMoves.length; move++) {
//             console.log(pokeMoves[move].move.name);
//           };
//     })
// };


// pokemonById (150); 

// const pokemonById = (id) => {
//     request.get ('https://pokeapi.co/api/v2/pokemon/' + id ,  (error, response, body) => {
//         const pokeAbilities = JSON.parse(body).abilities ;

//         for (i = 0; i < pokeAbilities.length; i++) {
//             console.log(pokeAbilities[i].ability.name);
//           };
//     })
// };





// pokemonById (150); 


// const url = 'https://pokeapi.co/api/v2/pokemon/'

// const pokemonById = (id) => {
//     return new Promise ( (resolve, reject) => {
//         request.get (url + id , (error, response, body) => {
//             if (response.statusCode === 200) {
//                 const pokemon = JSON.parse (body);
//                 const pokeName = pokemon.name;
//                 resolve (pokeName)
//             } else {
//                 reject ("codigo:" + response.statusCode)
//             }
//         })
//     })
//   };

//   const pokeById = async (id) => {
//       const x = await pokemonById (id)
//       console.log(x)
//       return x
//   }

//   pokeById(150) 

// let data = [];

//   const getMoves = async (id) => {
//       const x = await axios.get (`${url}/${id}`)
//       const moves = x.data.moves;
//       const mappedMoves = moves.map (move => move.move.name)

//       data = mappedMoves

//       console.log(data)

//   };

//   getMoves(150)

//   console.log(data);

// const arraySenseis = [
//   {
//     name:"Juanpa",
//     cinta:"Roja",
//     edad: 17
//   },
//   {
//     name:"Ari",
//     cinta:"Negra",
//     edad: 25
//   },
//   {
//     name:"Yael",
//     cinta:"Blanca",
//     edad: 22
//   }
// ];

// arraySenseis.map(sensei => console.log(sensei.name));

// const senseiEdad = arraySenseis.map(sensei => sensei.edad + 1);

// console.log(senseiEdad);

// const menores = arraySenseis.filter(maestro => maestro.edad < 18);
// console.log(menores);

// const genero = arraySenseis.map(arraySenseis => arraySenseis.genero = "masculino");

// console.log(arraySenseis); 

const NeoWs = () => {
  request.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-01-29&end_date=2020-02-05&api_key=DEMO_KEY', 
    
  (error, response, body) => {

      if(response.statusCode == 400) {

        return 'Error en la peticion'
      }
      else {

        const respuesta = JSON.parse(body).near_earth_objects
    
        console.log(respuesta['2020-01-30'][1].is_potentially_hazardous_asteroid)
      }

    }
)
  }
  

NeoWs()

 

