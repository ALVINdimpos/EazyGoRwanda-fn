/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaCar, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import motion for animations
import Navbar from './Navbar';
import Footer from '../containers/Footer';
import { useNavigate } from 'react-router-dom';

const Choose = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className='container m-10 mx-auto'>
        <h1 className='mb-8 text-3xl font-bold text-center'>Howdy! What are you looking to do today?</h1>
        <div className='flex items-center justify-center gap-10'>
          {/* Driving Section */}
          <motion.div
            className='flex flex-col items-center'
            whileHover={{ scale: 1.05 }} // Increase size on hover
            whileTap={{ scale: 0.95 }} // Decrease size on tap
          >
            <div className='p-4 text-white bg-blue-500 rounded-full'>
              <FaCar className='text-4xl' />
            </div>
            <h2 className='mt-4 text-xl font-semibold'>I'm driving</h2>
            <div className='text-lg text-center'>I want to fill empty seats in my car</div>
          </motion.div>
          {/* Divider */}
          <div className='w-1 h-20 bg-gray-300'></div>
          {/* Passenger Section */}
          <motion.div
            className='flex flex-col items-center'
            whileHover={{ scale: 1.05 }} // Increase size on hover
            whileTap={{ scale: 0.95 }} // Decrease size on tap
            onClick={() => {
              navigate('/trip/request');
            }}
          >
            <div className='p-4 text-white bg-green-500 rounded-full'>
              <FaUser className='text-4xl' />
            </div>
            <h2 className='mt-4 text-xl font-semibold'>I need a ride</h2>
            <div className='text-lg text-center'>Notify me when a ride is available</div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Choose;
