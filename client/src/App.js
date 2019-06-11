import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  checkMovie = (movie) => {
    let alreadyThere = false;
    this.state.savedList.forEach(mov => {
      if(mov.id === movie.id){
        alreadyThere = true;
      }
    })
    return alreadyThere;
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if(!this.checkMovie(movie)) {
      savedList.push(movie);
    }
    this.setState({ savedList });
  };
 
  render() {
    return (
      <div>
        <Router>
          <SavedList list={this.state.savedList} />
          <Route path="/" exact component={MovieList} />
          <Route path={'/movies/:id'}  render={ (props) => <Movie addToSavedList={this.addToSavedList} {...props} />} />
          
        </Router>
      </div>
    );
  }
}