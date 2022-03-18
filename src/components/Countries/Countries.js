import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>This file is Shouting from Country</h1>
            <h3>Country You can Travel : {countries.length}</h3>
            <hr />
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                    >
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;