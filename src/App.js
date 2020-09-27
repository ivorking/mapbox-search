import React, {Component} from 'react';
import Map from './Map'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Map />
        <Map />
        <Map />
      </div>
    )
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

export default App;
