import React, { useEffect } from 'react';
import './App.css';
import MapGL from './components/MapGL';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchStation from './components/SearchStation';
import StationState from './components/context/stations/StationState'

function App() {

  useEffect(() => {
    // MJS init
    M.AutoInit();
  });

  return (
    <StationState>
      <div className="App">
        <SearchStation />
        <MapGL />
      </div>
    </StationState>
  );
}

export default App;
