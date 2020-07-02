import React, { useEffect } from 'react';
import './App.css';
import MapGL from './components/MapGL';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchStation from './components/SearchStation';
import StationState from './components/context/stations/StationState'
import FoodState from './components/context/foods/FoodState'
import SearchFoods from './components/Foods/SearchFoods';
import FoodMap from './components/Foods/FoodMap'

function App() {

  useEffect(() => {
    // MJS init
    M.AutoInit();
  });

  return (
    <FoodState>
    <StationState>
      <div className="App">
        <SearchFoods />
        <FoodMap />
        {/* <SearchStation />
        <MapGL /> */}
      </div>
    </StationState>
    </FoodState>
  );
}

export default App;
