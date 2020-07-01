import React, { useState, useContext } from 'react'
import StationContext from './context/stations/stationContext'

const SearchStation = () => {

    const [formData, setFormData] = useState({
        type: '',
        name: ''
    });

    const stationContext = useContext(StationContext);

    const { getStations } = stationContext

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.toLowerCase()
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        getStations(formData);
    }

    const { type, name } = formData;

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="input-field">
                    <input type="text" name='name' value={name} required onChange={onChange}/>
                    <label htmlFor="name">Station Name</label>
                </div>
                <div className="input-field">
            <select name='type' value={type} onChange={onChange}>
                <option defaultValue disabled>Transport</option>
                <option value='bus'>
                    Bus
                </option>
                <option value='train'>
                    Train
                </option>
            </select>
                </div>
                <div className="input-field">
                    <input type="submit" value="Search" className='btn red'/>
                </div>
            </form>
        </div>
    )
}

export default SearchStation
