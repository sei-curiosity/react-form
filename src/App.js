import React, { Component } from 'react';
import './App.css';
import movies from './moviesData'
import Movie from './components/Movie'

class App extends Component {

  state = {
    movies: movies,
    formData: {
      id:'',
      title:'',
      director:''
    }
  }

  handleChange = (event) => {
    // to get the value from input
      const userInput = event.target.value;
     // get which input they typed in
     const inputName = event.target.name;
     // copy the state of formData
     const formDataCopy = {...this.state.formData}
     // update the key in formDataCopy with new value
     formDataCopy[inputName] = userInput
     // set the state with the update formDataCopy
     this.setState({
      formData: formDataCopy
     })
  }


  handleSubmit = (event) => {
    //not reload the page
    // prevent default action
    event.preventDefault()
    // get the formData from state
    const formData = this.state.formData;
    // copy of the movies state 
    const moviesCopy = [...this.state.movies]
    // push our formData into the movies copy
    moviesCopy.push(formData)
    this.setState({
      movies:moviesCopy,
      formData:{
        id:'',
        title:'',
        director:''
      }
    })
      console.log('form  submited')
  }

 /// in App.js
  deleteMovie = (id) =>{
   // copy the movies from state 
   let moviesCopy = [...this.state.movies];
   //[{},{},{}]
   // filter the array of movies
   moviesCopy = moviesCopy.filter( (movie) => (movie.id !== id))
   //[{},{}]

   this.setState({
    movies:moviesCopy
   })
  }
  render(){
    return (
      <div className="App">
        <form  onSubmit={this.handleSubmit}>
          
          <label>ID</label>
          <input 
          name="id"
          value={this.state.formData.id}
          placeholder="Enter your id"
          onChange={this.handleChange}
          ></input>
          <br/>
          <label>Title</label>
          <input 
          name="title"
          value={this.state.formData.title}
          placeholder="Enter the title"
          onChange={this.handleChange}
          ></input>
          <br/>
          <label>director</label>
          <input 
          name="director"
          value={this.state.formData.director}
          placeholder="Enter the director"
          onChange={this.handleChange}
          ></input>
          <br/>
          <button type="submit">Save</button>
        </form>




        
        {this.state.movies.map( (movie,index) => (
        <Movie 
        key={index}
        id={movie.id}
        title={movie.title}
        director={movie.director}
        delete={this.deleteMovie}
        />
        ) )}

        {/* <h1 onClick={() => this.deleteMovie('ahmed')}>xxxxx</h1> */}
      </div>
    );
  }
}


export default App;
