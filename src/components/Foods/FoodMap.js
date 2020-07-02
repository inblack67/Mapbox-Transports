import React, { useState, useContext, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import FoodContext from '../context/foods/foodContext'
import Preloader from '../Preloader'

const Map = () => {

    const [viewPort, setViewPort] = useState({
        latitude: 39.799999,
        longitude: -89.650002,
        width: "100vw",
        height: "80vh",
        zoom: 10
      })

    const foodContext = useContext(FoodContext);

    const { foods, loading } = foodContext;

    const [selectedFarm, setSelectedFarm] = useState(null);

    if(loading){
        return <Preloader />
    }

    return (
        <div>
        <ReactMapGL {...viewPort} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY} 
        onViewportChange={viewPort => setViewPort(viewPort)}
        mapStyle='mapbox://styles/inblack1967/ck8omk5xm3q4j1ioda783oxwj'
        >
            { foods && foods.map(food => 
                <Marker key={food.farmer_id} latitude={food.location_1.coordinates[1]} longitude={food.location_1.coordinates[0]}>
                    <button onClick={ e => {
                        e.preventDefault();
                        setSelectedFarm(food)
                    } }>
                        <i className="fa fa-utensils fa-2x"></i>
                    </button>
                </Marker>
            ) }

            { selectedFarm && <Popup latitude={selectedFarm.location_1.coordinates[1]} longitude={selectedFarm.location_1.coordinates[0]} onClose={ e => setSelectedFarm(null) } >
                <div className="container">
                    <h4>
                        { selectedFarm.farm_name }
                    </h4>
                    <p>
                        { selectedFarm.item }
                    </p>
                    <span className='red-text'>
                        { selectedFarm.category }
                    </span>
                </div>
            </Popup> }

        </ReactMapGL>
        </div>
    )
}

export default Map
