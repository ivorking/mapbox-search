import React, { Component } from "react";
import PlaceItem from './PlaceItem'
import './PlacesPanel.css'

class PlacesPanel extends Component {
  render() {
    const places = this.props.app.state.places
    const placeItems = places.map(place => {
      return <PlaceItem place={place}></PlaceItem>
    })

    return (
      <div className= "places">
        {placeItems}
      </div>
    )
  }
}

export default PlacesPanel