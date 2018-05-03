import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Map from './Map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breweryAPI: [],
      searchEvent: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({ searchEvent: e.target.value });

  }
  handleChange() {

    axios
      .get('http://beermapping.com/webservice/loccity/5cbac9c92cef3317dc25bf57bcd1587a/' + this.state.searchEvent + '&s=json')
      .then(response => response.data)
      .then(breweryAPI => this.setState({ breweryAPI }));

  }

  render() {
  
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">It's 5 O'Clock Somewhere</h1>
        </header>
        <h4> To search for breweries near you, please input your city name</h4>
        
        <input
          type='text'
          onChange={this.handleSearch}
          defaultValue={this.state.searchEvent} />

        <button onClick={this.handleChange}>Search</button>

        <br />

        <div className='row'>
          <div className='App-body'>
            {this.state.breweryAPI.map(breweryAPI => (
              <Map
                key={breweryAPI.id}
                name={breweryAPI.name}
                city={breweryAPI.city}
                street={breweryAPI.street}
                state={breweryAPI.state}
                zip={breweryAPI.zip}
                blogmap={breweryAPI.blogmap}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}


export default App;

//API KEYS
//src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB9v1dwzu7MaggY2uoGYr7Hh5grZHHnNa0&callback=initMap"
// 5cbac9c92cef3317dc25bf57bcd1587a
