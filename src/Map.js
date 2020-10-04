import React, {Component} from 'react';
import mapbox from 'mapbox-gl'
import './Map.css';

class Map extends Component {

  componentDidMount() {
    mapbox.accessToken = 'pk.eyJ1IjoiaXZvcmtpbmciLCJhIjoiY2tmbDloMzNlMW1xOTJ5czJkYTNhYmo0biJ9.whbHEGaJGvOqgjD32qi_8g';
    var map = new mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [
        -74.0060, 40.7128
      ],
      zoom: 12
    });

    const navigationControl = new mapbox.NavigationControl()
    map.addControl(navigationControl)

  }

  render() {
    return (
      <div id = "map">
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello
//       </header>
//     </div>
//   );
// }

export default Map;
