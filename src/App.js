import React, { Component } from 'react';
import Map from './Map'
import Toggler from './Toggler'
import PlacesPanel from './PlacesPanel'
import './App.css';
import Search from './Search'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      map: null,
      latitude: 40.7128,
      longitude: -74.006,
      style: 'mapbox://styles/mapbox/dark-v9',
      places: [
      ]
    }

  }

  render() {
    return (
      <div className="App">
        <PlacesPanel app={this}></PlacesPanel>
        <Toggler app={this}></Toggler>
        <Map app={this}></Map>
        <Search app={this}></Search>
      </div>
    )
  }
}

export default App;
