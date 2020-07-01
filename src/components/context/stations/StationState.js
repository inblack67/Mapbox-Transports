import React, { useReducer } from 'react';
import { GET_STATIONS } from '../types';
import StationReducer from './stationReducer';
import StationContext from './stationContext';
import axios from 'axios'

const StationState = (props) => {

    const initialState = {
        stations: [], 
        loading: true
    }

    const [state, dispatch] = useReducer(StationReducer, initialState);

    const getStations = async ({ type, name }) => {
        try {
            const res = await axios(`http://transportapi.com/v3/uk/places.json?query=${name}&type=${type}_station&app_id=${process.env.REACT_APP_TRANSPORT_APPID}&app_key=${process.env.REACT_APP_TRANSPORT_KEY}
            `);

            dispatch({
                type: GET_STATIONS,
                payload: res.data.member
            });

        } catch (err) {
            console.error(err)
        }
    }


    return (
        <StationContext.Provider value={{
            stations: state.stations,
            getStations
        }}>
            { props.children }
        </StationContext.Provider>
    )
}

export default StationState
