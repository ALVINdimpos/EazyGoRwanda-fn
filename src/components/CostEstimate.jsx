import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCar,
  FaUsers,
  FaMoneyBillWave,
  FaClock,
  FaLeaf,
  FaBus,
  FaTaxi,
  FaWalking,
  FaBicycle,
  FaChartLine,
  FaShieldAlt,
} from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from '../containers/Footer';

const CostEstimate = () => {
  const navigate = useNavigate();

  const comparisons = [
    {
      type: 'Private Car',
      benefits: ['Flexibility', 'Privacy', 'Door-to-door service'],
      drawbacks: ['High cost', 'Parking hassles', 'Environmental impact'],
      image: 'https://i.pinimg.com/564x/92/38/3f/92383ff17a23476d285ef3c5d7b59d6c.jpg',
    },
    {
      type: 'Carpool',
      benefits: ['Cost-sharing', 'Reduced traffic', 'Social interaction'],
      drawbacks: ['Less flexibility', 'Dependency on others', 'Potential delays'],
      image: 'https://i.pinimg.com/564x/aa/4f/a3/aa4fa3bea83b7d23e6723d3ae41057e3.jpg',
    },
    {
      type: 'Our Service',
      benefits: ['Cost-effective', 'Flexible scheduling', 'Environmentally friendly'],
      drawbacks: ['May require planning', 'Shared space', 'Limited to service areas'],
      image: 'https://i.pinimg.com/564x/b4/34/70/b43470f29d9455ea412509fa18ab57b2.jpg',
    },
  ];

  const serviceHighlights = [
    {
      icon: <FaClock className='text-4xl text-green-300' />,
      title: 'Speed',
      description: 'Quick and efficient rides to your destination',
    },
    {
      icon: <FaMoneyBillWave className='text-4xl  text-teal-500' />,
      title: 'Cost-Efficiency',
      description: 'Save money on every trip',
    },
    {
      icon: <FaLeaf className='text-4xl  text-green-500' />,
      title: 'Eco-Friendly',
      description: 'Reduce your carbon footprint',
    },
    {
      icon: <FaChartLine className='text-4xl text-red-700' />,
      title: 'Optimized Routes',
      description: 'Smart algorithms for the best routes',
    },
    {
      icon: <FaShieldAlt className='text-4xl text-green-900' />,
      title: 'Safety First',
      description: 'Vetted drivers and secure rides',
    },
  ];

  return (
    <>
      <Navbar />
      <div className='bg-green-50  mt-12 py-12'>
        <div className='container mx-auto px-4'>
          <motion.h1
            className='text-4xl font-bold text-center mb-12 text-gray-800'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Smart Transportation Choices
          </motion.h1>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                className='bg-white rounded-lg shadow-xl overflow-hidden'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={item.image} alt={item.type} className='w-full h-48 object-cover' />
                <div className='p-6'>
                  <div className='flex items-center justify-center mb-4'>{item.icon}</div>
                  <h2 className='text-2xl font-semibold text-center mb-4'>{item.type}</h2>
                  <div className='space-y-2'>
                    <h3 className='font-semibold text-green-600'>Benefits:</h3>
                    <ul className='list-disc pl-5'>
                      {item.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                    <h3 className='font-semibold text-green-900 mt-4'>Drawbacks:</h3>
                    <ul className='list-disc pl-5'>
                      {item.drawbacks.map((drawback, i) => (
                        <li key={i}>{drawback}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className='bg-white rounded-lg shadow-xl overflow-hidden mb-16'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className='p-6'>
              <h2 className='text-3xl font-semibold text-center mb-8'>Why Choose Our Service?</h2>
              <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
                {serviceHighlights.map((highlight, index) => (
                  <div key={index} className='flex flex-col items-center text-center'>
                    <div className='text-4xl mb-4'>{highlight.icon}</div>
                    <h3 className='text-xl font-semibold mb-2'>{highlight.title}</h3>
                    <p className='text-gray-600'>{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className='bg-white rounded-lg shadow-xl overflow-hidden mb-16 p-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className='text-3xl font-semibold text-center mb-8'>Compare All Options</h2>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-4 justify-items-center'>
              <div className='flex flex-col items-center'>
                <FaCar className='text-4xl text-blue-500 mb-2' />
                <span>Private Car</span>
              </div>
              <div className='flex flex-col items-center'>
                <FaUsers className='text-4xl text-green-500 mb-2' />
                <span>Carpool</span>
              </div>
              <div className='flex flex-col items-center'>
                <FaBus className='text-4xl text-yellow-500 mb-2' />
                <span>Bus</span>
              </div>
              <div className='flex flex-col items-center'>
                <FaTaxi className='text-4xl text-orange-500 mb-2' />
                <span>Taxi</span>
              </div>
              <div className='flex flex-col items-center'>
                <FaBicycle className='text-4xl text-purple-500 mb-2' />
                <span>Bike</span>
              </div>
            </div>
          </motion.div>

          <div className='text-center space-x-4'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/login')}
              className='bg-green-700 bg-opacity-50 hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out'
            >
              Post a Trip
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/login')}
              className='bg-green-700 bg-opacity-50 hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out'
            >
              Book a Trip
            </motion.button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CostEstimate;
