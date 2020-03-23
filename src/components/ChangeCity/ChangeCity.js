import React, { useState } from 'react';

import './ChangeCity.css';

const ChangeCity = ( { onChangeCity }) => {

    const [ newCityName, setNewCityName ] = useState( '' );

    const onLabelChange = (e) => {
        setNewCityName(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onChangeCity(newCityName);
        setNewCityName('')
    }

        return (
            <div className='change-city'>
                <p>Not your City?</p>
                <form className='item-add-form'
                  onSubmit={onSubmit}
                  >
                <input type='text'
                       className='form-control'
                       onChange={onLabelChange}
                       placeholder='Write it here'
                       value={newCityName} />
                <button 
                    className='btn btn-secondary'>Change City</button>
            </form>
            </div>
        )
    };

    export default ChangeCity;