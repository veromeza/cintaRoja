
import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import popper from 'popper.js'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min'



// import Saludo from './components/Saludo/Saludo';
import Navbar from './Components/Share/navbar'
import MovieContainer from './Components/Share/MovieContainer'
import MovieUploader from './Components/Share/MovieUploader'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <main>
            <Route exact path='/upload' component={MovieUploader}/>

            <Route exact path='/movies' component={MovieContainer}/>
          </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
