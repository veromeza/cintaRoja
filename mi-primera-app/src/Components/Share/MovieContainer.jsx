import React, { Component } from 'react'
import axios from 'axios'

import MovieCard from './card'

import './MovieContainer.css';

export class MovieContainer extends Component {

    state = {
        movies:[]
    }

    componentDidMount(){
        console.log(this)
        axios.get('https://vero-movie-api.herokuapp.com/movies/read')
        .then(response =>{
            
            this.setState({
                movies:response.data
            })
            console.log(this.state.movies)
        })
    }

    renderMovies(){
        return this.state.movies.map((movie,i) =>{

           return <MovieCard id={movie._id} image={movie.img_url} title={movie.title} genre={movie.genre} key={i}/>
        })
    }

    render() {
        console.log('Durante el render')
        return (
            <div className="card-container">
                {
                    this.renderMovies()
                }
            </div>
        )
    }
}

export default MovieContainer