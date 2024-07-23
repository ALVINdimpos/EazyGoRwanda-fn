import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaInfoCircle,
  FaCar,
  FaSearch,
  FaSuitcase,
  FaDollarSign,
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from './Footer';

const InputField = React.memo(({ icon: Icon, label, ...props }) => (
  <div className='mb-4'>
    <label className='block mb-1 text-sm font-medium text-gray-700'>
      <Icon className='inline mr-2' />
      {label}
    </label>
    <input
      {...props}
      className='w-full p-3 transition duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
    />
  </div>
));

InputField.displayName = 'InputField';

const RequestTrip = () => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    leavingDate: '',
    seatsRequired: 1,
    luggageSize: '',
    description: '',
    minPrice: 0,
    maxPrice: 100,
  });
  const [step, setStep] = useState(0);
  const [recentRequests, setRecentRequests] = useState([]);

  useEffect(() => {
    // Simulated recent requests data
    setRecentRequests([
      { id: 1, from: 'Kigali', to: 'Musanze', date: '2023-06-30' },
      { id: 2, from: 'Butare', to: 'Gisenyi', date: '2023-07-02' },
      { id: 3, from: 'Rwamagana', to: 'Kigali', date: '2023-07-05' },
    ]);
  }, []);

  const handleChange = useCallback((name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Handle form submission here
    },
    [formData]
  );

  const handleSelectOrigin = useCallback(
    async address => {
      try {
        const results = await geocodeByAddress(address);
        const latLng = await getLatLng(results[0]);
        console.log('Success Origin:', latLng);
        handleChange('origin', address);
      } catch (error) {
        console.error('Error', error);
      }
    },
    [handleChange]
  );

  const handleSelectDestination = useCallback(
    async address => {
      try {
        const results = await geocodeByAddress(address);
        const latLng = await getLatLng(results[0]);
        console.log('Success Destination:', latLng);
        handleChange('destination', address);
      } catch (error) {
        console.error('Error', error);
      }
    },
    [handleChange]
  );

  const steps = useMemo(
    () => [
      { title: 'Trip Details', fields: ['origin', 'destination'] },
      { title: 'Date, Seats & Price', fields: ['leavingDate', 'seatsRequired', 'luggageSize', 'minPrice', 'maxPrice'] },
      { title: 'Additional Info', fields: ['description'] },
    ],
    []
  );

  const renderStepContent = useCallback(() => {
    switch (step) {
      case 0:
        return (
          <>
            <div className='mb-4'>
              <label className='block mb-1 text-sm font-medium text-gray-700'>
                <FaMapMarkerAlt className='inline text-primary mr-2' />
                From
              </label>
              <PlacesAutocomplete
                value={formData.origin}
                onChange={value => handleChange('origin', value)}
                onSelect={handleSelectOrigin}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: 'Enter origin',
                        className:
                          'w-full p-3 transition duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary',
                      })}
                    />
                    <div className='absolute z-10 w-full bg-white rounded-md shadow-lg'>
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className: suggestion.active ? 'p-2 cursor-pointer bg-gray-100' : 'p-2 cursor-pointer',
                          })}
                          key={suggestion.placeId}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>
            <div className='mb-4'>
              <label className='block mb-1 text-sm font-medium text-gray-700'>
                <FaMapMarkerAlt className='inline text-primary mr-2' />
                To
              </label>
              <PlacesAutocomplete
                value={formData.destination}
                onChange={value => handleChange('destination', value)}
                onSelect={handleSelectDestination}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: 'Enter destination',
                        className:
                          'w-full p-3 transition duration-200 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary',
                      })}
                    />
                    <div className='absolute z-10 w-full bg-white rounded-md shadow-lg'>
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className: suggestion.active ? 'p-2 cursor-pointer bg-gray-100' : 'p-2 cursor-pointer',
                          })}
                          key={suggestion.placeId}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>
            <div className='mb-4'>
              <label className='block mb-1 text-sm font-semibold  text-gray-700'>
                <FaDollarSign className='inline text-xl text-primary mb-2' />
                Price Range (RWF)
              </label>
              <div className='flex items-center space-x-4'>
                <input
                  type='number'
                  name='minPrice'
                  value={formData.minPrice}
                  onChange={e => handleChange('minPrice', parseInt(e.target.value))}
                  className='w-1/4 p-3 transition duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                  min='0'
                  max={formData.maxPrice}
                />
                <input
                  type='range'
                  name='priceRange'
                  min='0'
                  max='100000'
                  step='500'
                  value={formData.maxPrice}
                  onChange={e => handleChange('maxPrice', parseInt(e.target.value))}
                  className='w-1/2 accent-primary'
                />
                <input
                  type='number'
                  name='maxPrice'
                  value={formData.maxPrice}
                  onChange={e => handleChange('maxPrice', parseInt(e.target.value))}
                  className='w-1/4 p-3 transition duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                  min={formData.minPrice}
                />
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <InputField
              icon={FaCalendarAlt}
              label='Leaving Date'
              type='date'
              name='leavingDate'
              value={formData.leavingDate}
              onChange={e => handleChange('leavingDate', e.target.value)}
              required
            />
            <InputField
              icon={FaUserFriends}
              label='Seats Required'
              type='number'
              name='seatsRequired'
              value={formData.seatsRequired}
              onChange={e => handleChange('seatsRequired', e.target.value)}
              min='1'
              max='10'
              required
            />
            <div className='mb-4'>
              <label className='block mb-1 text-sm font-medium text-gray-700'>
                <FaSuitcase className='inline mr-2' />
                Luggage Size
              </label>
              <select
                name='luggageSize'
                value={formData.luggageSize}
                onChange={e => handleChange('luggageSize', e.target.value)}
                className='w-full p-3 transition duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                required
              >
                <option value=''>Select luggage size</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
              </select>
            </div>
          </>
        );
      case 2:
        return (
          <div className='mb-4'>
            <label className='block mb-1 text-sm font-medium text-gray-700'>
              <FaInfoCircle className='inline mr-2' />
              Description
            </label>
            <textarea
              name='description'
              value={formData.description}
              onChange={e => handleChange('description', e.target.value)}
              className='w-full p-3 transition duration-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
              placeholder='Add any additional details about your trip'
              rows='4'
            ></textarea>
          </div>
        );
      default:
        return null;
    }
  }, [step, formData, handleChange, handleSelectOrigin, handleSelectDestination]);

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-green-50'>
      <Navbar />
      <main className='container px-4 py-8 mx-auto mt-12'>
        <motion.h1
          className='mb-8 text-4xl font-bold text-center text-gray-800'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Request Your Perfect Ride
        </motion.h1>

        <div className='grid gap-8 md:grid-cols-3'>
          {/* Left side - Tips and Recent Requests */}
          <div className='md:col-span-1'>
            <motion.div
              className='p-6 bg-white rounded-lg shadow-lg'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className='mb-4 text-xl font-semibold'>Trip Request Tips</h3>
              <ul className='space-y-3'>
                <li className='flex items-start'>
                  <FaCar className='mt-1 mr-2 text-primary' />
                  <span>Be specific about your pick-up and drop-off locations.</span>
                </li>
                <li className='flex items-start'>
                  <FaInfoCircle className='mt-1 mr-2 text-primary' />
                  <span>Mention any special requirements in the description.</span>
                </li>
                <li className='flex items-start'>
                  <FaCalendarAlt className='mt-1 mr-2 text-primary' />
                  <span>Request your trip in advance for better matches.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className='p-6 mt-6 bg-white rounded-lg shadow-lg'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className='mb-4 text-xl font-semibold'>Recent Trip Requests</h3>
              <ul className='space-y-3'>
                {recentRequests.map(request => (
                  <li key={request.id} className='p-3 text-sm bg-gray-100 rounded'>
                    <div className='font-semibold'>
                      {request.from} to {request.to}
                    </div>
                    <div className='text-gray-600'>Date: {request.date}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Center - Form */}
          <div className='md:col-span-2'>
            <motion.div
              className='p-8 bg-white rounded-lg shadow-lg'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className='mb-6 text-3xl font-bold'>Request Your Trip</h2>
              <div className='flex mb-6 space-x-4'>
                {steps.map((s, index) => (
                  <motion.div
                    key={index}
                    className={`flex-1 p-2 text-center rounded ${index <= step ? 'bg-primary text-white' : 'bg-gray-200'}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {s.title}
                  </motion.div>
                ))}
              </div>
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderStepContent()}
                  </motion.div>
                </AnimatePresence>
                <div className='flex justify-between mt-6'>
                  {step > 0 && (
                    <button
                      type='button'
                      onClick={() => setStep(prevStep => prevStep - 1)}
                      className='px-4 py-2 text-gray-700 transition duration-200 bg-gray-200 rounded-lg hover:bg-gray-300'
                    >
                      Back
                    </button>
                  )}
                  {step < steps.length - 1 ? (
                    <button
                      type='button'
                      onClick={() => setStep(prevStep => prevStep + 1)}
                      className='px-4 py-2 text-white transition duration-200 rounded-lg bg-primary hover:bg-primary-dark'
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type='submit'
                      className='px-4 py-2 text-white transition duration-200 rounded-lg bg-primary hover:bg-primary-dark'
                    >
                      Submit Request
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <motion.section
          className='mt-12 text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className='mb-8 text-3xl font-bold'>Why Choose Our Service?</h2>
          <div className='grid gap-6 md:grid-cols-4'>
            <div className='p-6 bg-white rounded-lg shadow-lg'>
              <FaCar className='mx-auto mb-4 text-4xl text-primary' />
              <h3 className='mb-2 text-xl font-semibold'>Wide Selection</h3>
              <p>Choose from a variety of rides to fit your needs and budget.</p>
            </div>
            <div className='p-6 bg-white rounded-lg shadow-lg'>
              <FaUserFriends className='mx-auto mb-4 text-4xl text-primary' />
              <h3 className='mb-2 text-xl font-semibold'>Community-Driven</h3>
              <p>Join a network of friendly travelers and make new connections.</p>
            </div>
            <div className='p-6 bg-white rounded-lg shadow-lg'>
              <FaCalendarAlt className='mx-auto mb-4 text-4xl text-primary' />
              <h3 className='mb-2 text-xl font-semibold'>Flexible Booking</h3>
              <p>Easy to book, modify, or cancel your trips as needed.</p>
            </div>
            <div className='p-6 bg-white rounded-lg shadow-lg'>
              <FaSearch className='mx-auto mb-4 text-4xl text-primary' />
              <h3 className='mb-2 text-xl font-semibold'>Smart Matching</h3>
              <p>Our algorithm finds the best matches for your travel needs.</p>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default RequestTrip;
