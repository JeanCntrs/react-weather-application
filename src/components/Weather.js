import React from 'react';

const Weather = ({ result }) => {

    const { name, main } = result;
    const kelvin = 273.15;

    if (!name) return false;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    {parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
                </p>
                <p>Temperatura Máxima : {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
                <p>Temperatura Mínima : {parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
            </div>
        </div>
    );
}

export default Weather;