import React from 'react';

import './ErrorMessage.css';

 const ErrorMessage = () => {

    return (
        <div className='error-message'>
            <span>We couldn`t determine the city!</span>
            <span>Verify the spelling of the city name.</span>
        </div>
    )
    
};

export default ErrorMessage;