import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCar,
  FaUsers,
  FaRoute,
  FaMobileAlt,
  FaShieldAlt,
  FaLeaf,
  FaGlobe,
  FaBullseye,
  FaHandsHelping,
} from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from '../containers/Footer';
import teamImg from '../assets/teamImg.jpg';
import picture from '../assets/picture.jpg';

const AboutUs = () => {
  const features = [
    {
      icon: <FaCar />,
      title: 'Easy Ride Booking',
      description: 'Post your trip and get connected with drivers instantly.',
    },
    { icon: <FaUsers />, title: 'Community Driven', description: 'Join a network of trusted drivers and passengers.' },
    {
      icon: <FaRoute />,
      title: 'Efficient Routes',
      description: 'Optimize your journey with smart routing algorithms.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'User-Friendly App',
      description: 'Intuitive interface for seamless ride management.',
    },
    { icon: <FaShieldAlt />, title: 'Safety First', description: 'Verified drivers and secure payment systems.' },
    { icon: <FaLeaf />, title: 'Eco-Friendly', description: 'Reduce carbon footprint by sharing rides.' },
  ];

  return (
    <>
      <div className='bg-gradient-to-b from-green-50 via-green-100 to-green-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='max-w-7xl mx-auto'
        >
          <header className='text-center  mt-12 mb-12'>
            <h1 className='text-4xl font-bold text-gray-800'>About Us</h1>
            <p className='text-lg text-gray-600 mt-4'>
              Connecting passengers with drivers to ensure smooth and safe journeys.
            </p>
          </header>

          <section className='mission-section py-12 bg-white rounded-lg shadow-xl mb-8'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center'>
              <div className='w-full md:w-1/2 p-8'>
                <h2 className='text-3xl font-bold text-gray-800 mb-4'>Our Mission</h2>
                <p className='text-gray-600 mb-4'>
                  Our mission is to provide a seamless platform where passengers can easily post their trip details and
                  drivers can find and connect with passengers to ensure safe, efficient, and enjoyable journeys.
                </p>
                <FaBullseye className='text-primary text-5xl' />
              </div>
              <div className='w-full md:w-1/2 p-8'>
                <div className=' h-64 w-full rounded-lg flex items-center justify-center text-white text-2xl font-bold'>
                  <img src={teamImg} alt='' className='w-' />
                </div>
              </div>
            </div>
          </section>

          <section className='values-section py-12 bg-white rounded-lg shadow-lg mb-8'>
            <div className='max-w-7xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-800 text-center mb-8'>Our Values</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='value-card bg-gray-50 p-6 rounded-lg shadow-md'>
                  <FaUsers className='text-primary text-5xl mb-4' />
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Community</h3>
                  <p className='text-gray-600'>
                    Building a strong community of drivers and passengers who trust and support each other.
                  </p>
                </div>
                <div className='value-card bg-gray-50 p-6 rounded-lg shadow-md'>
                  <FaHandsHelping className='text-primary text-5xl mb-4' />
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Safety</h3>
                  <p className='text-gray-600'>
                    Ensuring the safety of both passengers and drivers through reliable and verified services.
                  </p>
                </div>
                <div className='value-card bg-gray-50 p-6 rounded-lg shadow-md'>
                  <FaGlobe className='text-primary text-5xl mb-4' />
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Innovation</h3>
                  <p className='text-gray-600'>
                    Continuously innovating to enhance our platform and provide the best experience for our users.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className='team-section py-12 bg-white rounded-lg shadow-lg mb-8'>
            <div className='max-w-7xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-800 text-center mb-8'>Meet Our Team</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='team-card bg-gray-50 p-6 rounded-lg shadow-md text-center'>
                  <div className=' w-24 h-24 rounded-full mx-auto mb-4'>
                    <img src={picture} alt='' className='w-24 h-24 rounded-full' />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>John Doe</h3>
                  <p className='text-gray-600'>Founder & CEO</p>
                </div>
                <div className='team-card bg-gray-50 p-6 rounded-lg shadow-md text-center'>
                  <div className=' w-24 h-24 rounded-full mx-auto mb-4'>
                    <img src={picture} alt='' className='w-24 h-24 rounded-full' />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Jane Smith</h3>
                  <p className='text-gray-600'>CTO</p>
                </div>
                <div className='team-card bg-gray-50 p-6 rounded-lg shadow-md text-center'>
                  <div className=' w-24 h-24 rounded-full mx-auto mb-4'>
                    <img src={picture} alt='' className='w-24 h-24 rounded-full' />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Alice Johnson</h3>
                  <p className='text-gray-600'>COO</p>
                </div>
              </div>
            </div>
          </section>
          <div className='mt-20'>
            <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-12'>Key Features</h2>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                <div className='w-full border-t border-gray-300' />
              </div>
              <div className='relative flex justify-center'>
                <span className='px-3 bg-white text-lg font-medium text-gray-900'>What sets us apart</span>
              </div>
            </div>
            <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className='flex flex-col rounded-lg shadow-lg overflow-hidden'
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className='flex-1 bg-white p-6 flex  shadow-xl rounded-xl flex-col justify-between'>
                    <div className='flex-1'>
                      <div className='flex items-center justify-center h-12 w-12 rounded-md bg-green-700 bg-opacity-90 text-white mx-auto'>
                        {feature.icon}
                      </div>
                      <p className='mt-5 text-xl font-semibold text-gray-900 text-center'>{feature.title}</p>
                      <p className='mt-3 text-base text-gray-500 text-center'>{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className='mt-20 text-center'>
            <h2 className='text-3xl font-extrabold text-gray-900 mb-6'>Ready to Get Started?</h2>
            <motion.button
              to='/signup'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-700  hover:bg-green-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300'
            >
              <Link to='/registration'>Join us today</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
