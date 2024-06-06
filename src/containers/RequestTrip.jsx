/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaCar, FaMapMarkerAlt, FaQuoteLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../containers/Footer';

const RequestTrip = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [leavingDate, setLeavingDate] = useState('');
  const [seatsRequired, setSeatsRequired] = useState(1);
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gray-100'>
        {/* Hero Section */}
        <div className='relative bg-blue-600'>
          <div
            className='absolute inset-0 bg-center bg-cover'
            style={{ backgroundImage: 'url(/path/to/hero-image.jpg)' }}
          ></div>
          <div className='relative bg-blue-600 bg-opacity-75'>
            <div className='container px-6 py-16 mx-auto text-center'>
              <h1 className='text-4xl font-extrabold text-white'>Request a Trip</h1>
              <p className='mt-4 text-lg text-blue-200'>
                Fill the form below to request a ride and enjoy a comfortable journey.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className='container px-6 py-12 mx-auto'>
          <h2 className='mb-8 text-3xl font-bold text-center'>How It Works</h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            <div className='p-6 text-center bg-white rounded-lg shadow-md'>
              <FaMapMarkerAlt className='mx-auto mb-4 text-4xl text-blue-600' />
              <h3 className='mb-2 text-xl font-semibold'>Enter Your Trip Details</h3>
              <p className='text-gray-600'>
                Provide the origin, destination, and other relevant details to help drivers find your request.
              </p>
            </div>
            <div className='p-6 text-center bg-white rounded-lg shadow-md'>
              <FaCar className='mx-auto mb-4 text-4xl text-blue-600' />
              <h3 className='mb-2 text-xl font-semibold'>Get Matched with Drivers</h3>
              <p className='text-gray-600'>We will match you with drivers heading to the same destination.</p>
            </div>
            <div className='p-6 text-center bg-white rounded-lg shadow-md'>
              <FaQuoteLeft className='mx-auto mb-4 text-4xl text-blue-600' />
              <h3 className='mb-2 text-xl font-semibold'>Enjoy Your Trip</h3>
              <p className='text-gray-600'>Have a comfortable journey and leave a review for your driver.</p>
            </div>
          </div>
        </div>

        {/* Request Trip Form */}
        <div className='container px-6 py-12 mx-auto'>
          <form onSubmit={handleSubmit} className='max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-md'>
            <div className='grid grid-cols-1 gap-6'>
              <div>
                <label htmlFor='origin' className='block mb-1 text-sm font-medium text-gray-700'>
                  <FaMapMarkerAlt className='inline mr-2' />
                  From
                </label>
                <input
                  type='text'
                  id='origin'
                  value={origin}
                  onChange={e => setOrigin(e.target.value)}
                  className='block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                  placeholder='Enter origin'
                />
              </div>
              <div>
                <label htmlFor='destination' className='block mb-1 text-sm font-medium text-gray-700'>
                  <FaMapMarkerAlt className='inline mr-2' />
                  To
                </label>
                <input
                  type='text'
                  id='destination'
                  value={destination}
                  onChange={e => setDestination(e.target.value)}
                  className='block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                  placeholder='Enter destination'
                />
              </div>
              <div>
                <label htmlFor='leavingDate' className='block mb-1 text-sm font-medium text-gray-700'>
                  Leaving
                </label>
                <input
                  type='date'
                  id='leavingDate'
                  value={leavingDate}
                  onChange={e => setLeavingDate(e.target.value)}
                  className='block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                />
              </div>
              <div>
                <label htmlFor='seatsRequired' className='block mb-1 text-sm font-medium text-gray-700'>
                  Seats required
                </label>
                <input
                  type='number'
                  id='seatsRequired'
                  value={seatsRequired}
                  onChange={e => setSeatsRequired(e.target.value)}
                  className='block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                  min='1'
                  max='10'
                  placeholder='Enter number of seats'
                />
              </div>
              <div>
                <label htmlFor='description' className='block mb-1 text-sm font-medium text-gray-700'>
                  Description
                </label>
                <textarea
                  id='description'
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className='block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                  placeholder='Add any additional details about your trip'
                ></textarea>
              </div>
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-4 py-3 text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                <FaCar className='inline mr-2' /> Post a Request
              </button>
            </div>
          </form>
        </div>

        {/* Testimonials Section */}
        <div className='py-12 bg-gray-200'>
          <div className='container px-6 mx-auto'>
            <h2 className='mb-8 text-3xl font-bold text-center'>What Our Users Say</h2>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
              <div className='p-6 text-center bg-white rounded-lg shadow-md'>
                <p className='mb-4 text-gray-600'>
                  “This service is amazing! It was so easy to request a trip and I had a great experience.”
                </p>
                <h4 className='text-lg font-semibold'>John Doe</h4>
              </div>
              <div className='p-6 text-center bg-white rounded-lg shadow-md'>
                <p className='mb-4 text-gray-600'>
                  “I love how convenient and affordable this is. Definitely recommend it to others.”
                </p>
                <h4 className='text-lg font-semibold'>Jane Smith</h4>
              </div>
              <div className='p-6 text-center bg-white rounded-lg shadow-md'>
                <p className='mb-4 text-gray-600'>
                  “A wonderful service that connects people and makes traveling so much easier.”
                </p>
                <h4 className='text-lg font-semibold'>Michael Johnson</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RequestTrip;
