import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Map from './Map';

class App extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        breweryAPI: []
      };

    }

componentWillMount() {

  axios
    .get('http://api.brewerydb.com/v2/')
    .then(response => response.data)
    .then(breweryAPI => this.setState({ breweryAPI }))
}

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">It's 5 O'Clock Somewhere</h1>
        </header>

        <p className="App-intro">
        {/* {this.state.breweryAPI.map(breweryAPI => (
          <Map 
            
        ))} */}
        </p>
        <h4> To start please input your zip code </h4>
        <input type='number' /> 
        <button> Submit </button>

      </div>
    );
  }
}
//src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB9v1dwzu7MaggY2uoGYr7Hh5grZHHnNa0&callback=initMap"
//http://api.brewerydb.com/v2/
export default App;
