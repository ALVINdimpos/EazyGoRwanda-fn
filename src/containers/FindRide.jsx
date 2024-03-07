/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar } from '../components';
import SearchNav from '../components/SearchNav';
import Footer from './Footer';
import CarpoolSection from '../components/CarpoolSection';
const FindRide = () => {
  return (
    <div className='min-h-screen '>
      <Navbar />

      <div className='py-12 text-center'>
        <h1 className='mb-4 text-4xl font-extrabold text-primary'>Find a Ride</h1>
        <h1 className='text-2xl text-gray-600'>
          Enter your origin and destination and{' '}
          <span className='font-serif italic font-black text-floor'> away you go!</span>
        </h1>
      </div>
      <div className='p-9'>
        {' '}
        <SearchNav />
      </div>
      <CarpoolSection />
      <Footer />
    </div>
  );
};

export default FindRide;
