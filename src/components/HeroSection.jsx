import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaDownload, FaMapMarkerAlt, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Hero } from '../assets';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { DatePicker } from 'antd';
import moment from 'moment';
import { ImAndroid } from 'react-icons/im';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='relative min-h-screen overflow-hidden bg-gray-900 bg-opacity-95'>
      <div className='container mx-auto px-4 py-16 lg:py-24'>
        <div className='grid lg:grid-cols-12 gap-8 items-center'>
          <motion.div
            className='lg:col-span-7'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white dark:text-white leading-tight'>
              Safety <span className='text-primary'>Meets Savings</span>
            </h1>
            <p className='text-lg md:text-xl text-gray-400 dark:text-gray-300 mb-8'>
              Welcome to TegaRide – where every ride is an experience. Enjoy seamless travel, hassle-free transactions,
              and the assurance of safety.
            </p>
            <div className='flex flex-wrap gap-4'>
              <Link
                to='/'
                className='inline-flex items-center px-6 py-3 text-white bg-primary rounded-full hover:bg-primary-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg'
              >
                <ImAndroid className='mr-2' />
                Download App
              </Link>
              <Link
                to='./HowItWorks'
                className='inline-flex items-center px-6 py-3 text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg'
              >
                How it works
                <svg
                  className='w-5 h-5 ml-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </Link>
            </div>
          </motion.div>
          <div className='lg:col-span-5 hidden lg:block'>
            <motion.img
              src={Hero}
              alt='TegaRide'
              className='w-full h-auto max-w-md mx-auto'
              style={{ y: scrollY * 0.5 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </div>
      <SearchComponent />
    </section>
  );
};

const SearchComponent = () => {
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
      className='absolute bottom-6 left-12 right-12 bg-gray-900 bg-opacity-95 dark:bg-gray-00 rounded-3xl'
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <form onSubmit={handleSubmit} className='container mx-auto px-4 py-8'>
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
              <FaMapMarkerAlt className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10' />
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
              <FaCalendarAlt className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 focus:border-green-700 focus:ring-2 focus:ring-green-700' />
              <DatePicker
                placeholder='Leaving time (optional)'
                onChange={date => setDate(date)}
                disabledDate={disablePastDates}
                className='w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 transition-all duration-300'
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
};

export default HeroSection;
