import React from 'react';
import axios from 'axios';

class Details extends React.Component {


    constructor () {
        super()
        this.state = {
            movies: []
        }
    }


    componentDidMount () {
console.log("Este es el DidMount");
    }

    componentWillMount () {
        const url = 'https://vero-movie-api.herokuapp.com/movies/read';
        axios.get (url)
        .then ((res)=>{
          this.setState({movies: res.data});  
          console.log(res);
        })
console.log("Este es el WillMount");
    }

    componentWillUnmount () {
console.log("Este es el WillUnMount");
    }

    render () {

        return (
            <div>
                <h2>
                {
                    this.props.movies
                }
                </h2>
              
              

            </div>
        )
    }
}

export default Details