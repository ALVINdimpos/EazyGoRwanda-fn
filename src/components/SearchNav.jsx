/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import moment from 'moment';
import { FaDownload, FaMapMarkerAlt, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

function SearchNav() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState(null);
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
    // Handle search logic here
    console.log('Search params:', { from, to, date });
    navigate('/travel');
  };
  const disablePastDates = current => {
    return current && current < moment().startOf('day');
  };

  return (
    <motion.div
      className='relative bg-green-400 bg-opacity-20 rounded-3xl'
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <form
        onSubmit={handleSubmit}
        className='container mx-auto 
      px-4 py-2'
      >
        <div className='flex flex-wrap -mx-2'>
          <div className='w-full md:w-1/3 px-2 mb-4 md:mb-0'>
            <div className='relative'>
              <FaMapMarkerAlt className='absolute left-3 top-1/2 transform -translate-y-1/2 text-green-700 z-10' />
              <PlacesAutocomplete
                value={from}
                onChange={setFrom}
                onSelect={handleSelectFrom}
                searchOptions={{ componentRestrictions: { country: 'RW' } }}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: 'From',
                        className:
                          'w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all duration-300',
                      })}
                    />
                    <div className='absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg'>
                      {loading && <div className='p-2 text-gray-500'>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = suggestion.active
                          ? 'p-2 bg-gray-100 cursor-pointer'
                          : 'p-2 bg-white cursor-pointer';
                        return (
                          <div {...getSuggestionItemProps(suggestion, { className })} key={suggestion.placeId}>
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>
          </div>
          <div className='w-full md:w-1/3 px-2 mb-4 md:mb-0'>
            <div className='relative'>
              <FaMapMarkerAlt className='absolute left-3 top-1/2 transform -translate-y-1/2 text-green-700 z-10' />
              <PlacesAutocomplete
                value={to}
                onChange={setTo}
                onSelect={handleSelectTo}
                searchOptions={{ componentRestrictions: { country: 'RW' } }}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: 'To',
                        className:
                          'w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all duration-300',
                      })}
                    />
                    <div className='absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg'>
                      {loading && <div className='p-2 text-gray-500'>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = suggestion.active
                          ? 'p-2 bg-gray-100 cursor-pointer'
                          : 'p-2 bg-white cursor-pointer';
                        return (
                          <div {...getSuggestionItemProps(suggestion, { className })} key={suggestion.placeId}>
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>
          </div>
          <div className='w-full md:w-1/3 px-2'>
            <div className='relative'>
              <FaCalendarAlt className='absolute left-3 top-1/2 transform -translate-y-1/2 text-green-700 z-10 focus:border-green-700 focus:ring-2 focus:ring-green-700' />
              <DatePicker
                placeholder='Leaving time (optional)'
                onChange={date => setDate(date)}
                disabledDate={disablePastDates}
                className='w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-700  transition-all duration-300'
              />
            </div>
          </div>
        </div>
        <button
          type='submit'
          className='w-full mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg'
        >
          <FaSearch className='inline-block mr-2' />
          Find a Ride
        </button>
      </form>
    </motion.div>
  );
}
export default SearchNav;
