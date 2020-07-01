import { GET_STATIONS } from '../types';

export default (state, action) => {
    const { payload, type } = action;

    switch(type){
        case GET_STATIONS: 
        return {
            ...state,
            stations: payload,
            loading: false
        }
        default: return state;
    }
}