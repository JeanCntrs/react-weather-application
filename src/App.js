import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';
import Weather from './components/Weather';

function App() {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {

    if (city === '') return;

    const consultApi = async () => {
      try {
        let apiId = '253a323af36a33ad8c0654570f01ea9d';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;
        let response = await fetch(url);
        let json = await response.json();
        setResult(json);
      } catch (error) {
        console.log(error);
      }
    }

    consultApi();

  }, [city, country]);

  const consultData = data => {
    if (data.city.trim().length === 0 || data.country.trim().length === 0) {
      setError(true);
      return;
    } else {
      setCity(data.city);
      setCountry(data.country);
      setError(false);
    }
  }

  let component

  if (error) {
    component = <Error message="Todos los campos son obligatorios" />;
  } else if (result.cod === '404') {
    component = <Error message="La ciudad no existe en nuestro registro" />;
  } else {
    component = <Weather result={result} />;
  }

  return (
    <div className="App">

      <Header title="Weather Application" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form consultData={consultData} />
            </div>
            <div className="col s12 m6">
              {component}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
