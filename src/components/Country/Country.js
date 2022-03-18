import React from 'react';
import './Country.css'

const Country = (props) => {

    const { name, capital, area, flags } = props.country
    return (
        <div className='country'>
            <h1>Country Name: {name.common}</h1>
            <h3>Capital : {capital}</h3>
            <p><small>Area: {area}</small></p>
            <div className='image'>
                <img src={flags.png} alt="" />
            </div>
        </div>
    );
};

export default Country;