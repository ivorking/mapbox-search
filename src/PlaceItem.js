import React, { Component } from "react"
import mapbox from 'mapbox-gl'

class PlaceItem extends Component {
  render () {
    const app = this.props.app
    const map = app.state.map
    console.log(map)

    const place = this.props.place

    if (map) {
      console.log('yes map')
      const marker = new mapbox.Marker({
        color: '#2727eb6'
      })
    }

    marker.setLngLat([place.longitude, place.latitude])
    marker.addTo(map)

    return (
      <div className = "place-item">
        {place.name} ({place.latitude}, {place.longitude})
      </div>
    )
  }
}

export default PlaceItem
