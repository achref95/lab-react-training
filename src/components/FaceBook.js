import React, { useState } from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState('All');

  const handleClick = (country) => {
    setSelectedCountry(country);
  };

  const uniqueCountries = profiles
    .map((profile) => profile.country)
    .filter((country, index, mappedArray) => mappedArray.indexOf(country) === index);

  return (
    <div className='container'>
      <div className='buttons-container'>
        <button onClick={() => handleClick('All')}>
          All
        </button>
        {uniqueCountries.map((country, index) => (
          <button
            key={index}
            onClick={() => handleClick(country)}
          >
            {country}
          </button>
        ))}
      </div>
      <div className='profiles-container'>
        {profiles
          .filter((profile) => (selectedCountry === 'All' ? profiles : profile.country === selectedCountry))
          .map((profile, index) => (
            <div key={index} className='card'>
              <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} />
              <h2>First name: {profile.firstName}</h2>
              <h2>Last name: {profile.lastName}</h2>
              <h2>Country: {profile.country}</h2>
              <h2>Type: {profile.isStudent ? 'Student' : 'Teacher'}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FaceBook;
