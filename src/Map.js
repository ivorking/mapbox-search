import React, {Component} from 'react';
import mapbox from 'mapbox-gl'
import './Map.css';

class Map extends Component {

  componentDidMount() {
    mapbox.accessToken = 'pk.eyJ1IjoiaXZvcmtpbmciLCJhIjoiY2tmbDloMzNlMW1xOTJ5czJkYTNhYmo0biJ9.whbHEGaJGvOqgjD32qi_8g';
    var map = new mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v9'
    });

  }

  render() {
    return (
      <div id = "map">
        Map!
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
