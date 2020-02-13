import React from 'react';
import axios from 'axios';

function MovieCard(props){
console.log(props);

    // const removeMovie=(id)=>{
        
    //     axios.delete(`https://vero-movie-api.herokuapp.com/movies/patch/${id}`)
    //     .then(res =>{ 
    //         console.log(res)
    //     })
    // }

    return (
        <div class="card  m-3">
       
       
       <div>
            
            <div className="card"  style={{width: '18rem'} }>
                <img src={props.image}  className="card-img-top" alt="Portada de Película"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.genre}</p>
                    {/* <button type="button" className="btn btn-danger" onClick={()=>removeMovie(props.id)}>Borrar</button> */}
                </div>
            </div>
        </div>
        </div>
       
    )
}

export default MovieCard