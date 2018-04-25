import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Map from './Map';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breweryAPI: [],
      eventFilter: '',
      search: ''
    };
    // this.filterFunction = this.filterFunction.bind(this);
    this.searchLimit = this.searchLimit.bind(this);
  }

  searchLimit(e) {
    this.setState({ search: e.target.value.substr(0, 5) });
  }

  componentWillMount() {

    axios
      .get('http://beermapping.com/webservice/locstate/5cbac9c92cef3317dc25bf57bcd1587a/ca&s=json')
      .then(response => response.data)
      .then(breweryAPI => this.setState({ breweryAPI }))
  }

  // filterFunction(e) {
  //   let updatedList = this.state.eventFilter;
  //   updatedList = updatedList.filter((breweries) => {
  //     return breweries.zip.toLowerCase().indexOf(
  //       e.breweries.zip.value.toLowerCase()) !== -1;
  //   });
  //   this.setState ({eventFilter: updatedList });
  // }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">It's 5 O'Clock Somewhere</h1>
        </header>

        <h4> To search for breweries near you, please input your zip code </h4>
        <form>
          <div className="form-group">
            <input type="number" placeholder="Search"
            // onChange={this.filterFunction}
            />
          </div>
        </form>
        <br />
        {/* <input type='number' />
        <button> Filter </button> */}
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

//API KEYS
//src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB9v1dwzu7MaggY2uoGYr7Hh5grZHHnNa0&callback=initMap"
// 5cbac9c92cef3317dc25bf57bcd1587a
// export default App;
