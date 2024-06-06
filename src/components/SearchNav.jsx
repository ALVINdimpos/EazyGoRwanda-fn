/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

function SearchNav() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const navigate = useNavigate();

  const handleSelectFrom = address => {
    setFrom(address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success From:', latLng))
      .catch(error => console.error('Error', error));
  };

  const handleSelectTo = address => {
    setTo(address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success To:', latLng))
      .catch(error => console.error('Error', error));
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/travel');
  };

  return (
    <div className='w-full h-40 my-10 bg-transparent col-span-full'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center w-full h-full gap-4 pl-3 pr-8 rounded-lg lg:flex-row lg:gap-12 bg-primary'
      >
        <div className='w-full lg:w-60'>
          <p className='text-2xl'>Need a ride?</p>
          <p className='text-white'>Find a ride and carpool anywhere in Rwanda.</p>
        </div>
        <div className='relative flex items-center w-full lg:w-2/12'>
          <MapPin className='absolute ml-1' />
          <PlacesAutocomplete
            value={from}
            onChange={setFrom}
            onSelect={handleSelectFrom}
            searchOptions={{ componentRestrictions: { country: 'RW' } }}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div className='w-full'>
                <input
                  {...getInputProps({
                    placeholder: 'From',
                    className: 'w-full h-20 pl-12 rounded-md',
                  })}
                />
                <div className='absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg'>
                  {loading && <div className='p-2'>Loading...</div>}
                  {suggestions.map((suggestion, index) => {
                    const className = suggestion.active
                      ? 'suggestion-item--active p-2 bg-blue-100 cursor-pointer'
                      : 'suggestion-item p-2 bg-white cursor-pointer';
                    return (
                      <div key={index} {...getSuggestionItemProps(suggestion, { className })}>
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
        <div className='relative flex items-center w-full mt-4 lg:w-2/12 lg:mt-0'>
          <MapPin className='absolute ml-1' />
          <PlacesAutocomplete
            value={to}
            onChange={setTo}
            onSelect={handleSelectTo}
            searchOptions={{ componentRestrictions: { country: 'RW' } }}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div className='w-full'>
                <input
                  {...getInputProps({
                    placeholder: 'To',
                    className: 'w-full h-20 pl-12 rounded-md',
                  })}
                />
                <div className='absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg'>
                  {loading && <div className='p-2'>Loading...</div>}
                  {suggestions.map((suggestion, index) => {
                    const className = suggestion.active
                      ? 'suggestion-item--active p-2 bg-blue-100 cursor-pointer'
                      : 'suggestion-item p-2 bg-white cursor-pointer';
                    return (
                      <div key={index} {...getSuggestionItemProps(suggestion, { className })}>
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>

        <DatePicker
          placeholder='Leaving time (optional)'
          className='w-full h-20 pl-12 mt-4 rounded-md lg:w-3/12 lg:mt-0'
        />

        <button
          type='submit'
          className='w-full h-20 p-2 mt-4 text-white rounded-md lg:w-3/12 lg:bg-black lg:mt-0'
          onClick={handleSubmit}
        >
          Find a ride
        </button>
      </form>
    </div>
  );
}

export default SearchNav;
