/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaCar } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../containers/Footer';
import { FaMapMarkerAlt } from 'react-icons/fa';
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
      <div className='container m-10 mx-auto'>
        <h1 className='mb-8 text-3xl font-bold text-center'>Post a request</h1>
        <form onSubmit={handleSubmit} className='max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-md'>
          <div className='grid grid-cols-1 gap-6 p-6 md:grid-cols-2'>
            <div>
              <label htmlFor='origin' className='flex items-center block mb-1 text-sm font-medium text-gray-700'>
                <FaMapMarkerAlt className='mr-2' />
                From
              </label>
              <input
                type='text'
                id='origin'
                value={origin}
                onChange={e => setOrigin(e.target.value)}
                className='block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
              />
            </div>
            <div>
              <label htmlFor='destination' className='flex items-center block mb-1 text-sm font-medium text-gray-700'>
                <FaMapMarkerAlt className='mr-2' />
                To
              </label>
              <input
                type='text'
                id='destination'
                value={destination}
                onChange={e => setDestination(e.target.value)}
                className='block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
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
              />
            </div>
            <div className='col-span-2'>
              <label htmlFor='description' className='block mb-1 text-sm font-medium text-gray-700'>
                Description
              </label>
              <textarea
                id='description'
                value={description}
                onChange={e => setDescription(e.target.value)}
                className='block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
              ></textarea>
            </div>
          </div>
          <div className='px-6 pb-6'>
            <button
              type='submit'
              className='inline-flex items-center justify-center w-full px-4 py-3 text-base font-medium text-white transition duration-300 ease-in-out transform bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:scale-105'
            >
              <FaCar className='mr-2' /> Post a request
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RequestTrip;
