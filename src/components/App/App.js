import React, { useState } from 'react';

import WeaterToday from '../WeatherToday/WeatherToday';
import ChangeCity from '../ChangeCity/ChangeCity';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './App.css';

const App = () => {

    const [ newCity, setNewCity ] = useState(null);
    const [ error, setError ] = useState(false);

    const changeCityName = (newCityName) => {
        setNewCity(newCityName);
        setError(false);
           
    }

    const onError = (err) => {
        setError(true)
    }





    const errorMessage = error ? <ErrorMessage /> : null; 

    return (
        <div className='weather-app'>
            <h1 className='header'>Weather City</h1>
             <div className='weather-window'>
                <WeaterToday newCity={newCity}
                             onHasError={onError}
                />
                <ChangeCity onChangeCity={changeCityName}
                />
                    
                {errorMessage}    

             </div>
                
         </div>
    )
    
};

export default App;