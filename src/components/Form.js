import React, { useState } from 'react';

const Form = ({consultData}) => {

    const [search, saveSearch] = useState({
        city: '',
        country: ''
    });

    const handleChange = e => {
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    };

    const consultWeather = e => {
        e.preventDefault();
        consultData(search);
    }

    return (
        <form onSubmit={consultWeather}>
            <div className="input-field col s12">
                <input id="inpCity" name="city" type="text" onChange={handleChange}></input>
                <label htmlFor="inpCity">Ciudad</label>
            </div>
            <div className="input-field col s12">
                <select onChange={handleChange} name="country">
                    <option value="0">Selecciona País</option>
                    <option value="US">Estados Unidos</option>
                    <option value="CL">Chile</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input className="waves-effect waves-light btn-large btn-block yellow accent-4" type="submit" value="Obtener Clima" />
            </div>
        </form>
    );

}

export default Form;