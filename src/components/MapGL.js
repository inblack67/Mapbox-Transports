import React, { useState, useContext } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import StationContext from './context/stations/stationContext'
import Preloader from './Preloader'

const Map = () => {

    const [viewPort, setViewPort] = useState({
        latitude: 51.508530,
        longitude: -0.076132,
        width: "100vw",
        height: "80vh",
        zoom: 10
      })

    const stationContext = useContext(StationContext);

    const { stations, loading } = stationContext;

    const [selectedStation, setSelectedStation] = useState(null);

    if(loading){
        return <Preloader />
    }

    return (
        <div>
        <ReactMapGL {...viewPort} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY} 
        onViewportChange={viewPort => setViewPort(viewPort)}
        mapStyle='mapbox://styles/inblack1967/ck8omk5xm3q4j1ioda783oxwj'
        >
            { stations && stations.map(station => 
                <Marker key={station.station_code} latitude={station.latitude} longitude={station.longitude}>
                    <button onClick={ e => {
                        e.preventDefault();
                        setSelectedStation(station)
                    } }>
                        <i className="fa fa-train fa-2x"></i>
                    </button>
                </Marker>
            ) }

            { selectedStation && <Popup latitude={selectedStation.latitude} longitude={selectedStation.longitude} onClose={ e => setSelectedStation(null) } >
                <div className="container">
                    <h4>
                        { selectedStation.name }
                    </h4>
                    <p>
                        { selectedStation.type }
                    </p>
                </div>
            </Popup> }

        </ReactMapGL>
        </div>
    )
}

export default Map
