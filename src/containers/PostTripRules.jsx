/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaMoneyBillAlt, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import { Navbar } from '../components';
import Footer from './Footer';

const RuleCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className='flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-lg'
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className='p-4 mb-4 rounded-full bg-primary bg-opacity-10'>
      <Icon className='text-5xl text-white' />
    </div>
    <h2 className='mb-2 text-xl font-bold text-gray-800'>{title}</h2>
    <p className='text-gray-600'>{description}</p>
  </motion.div>
);

const PostTripRules = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  const rules = [
    {
      icon: FaClock,
      title: 'Be Reliable',
      description: "Only post a trip if you're sure you're driving and show up on time.",
    },
    {
      icon: FaMoneyBillAlt,
      title: 'No Cash',
      description: 'All passengers pay online and you receive a payout after the trip.',
    },
    {
      icon: FaExclamationTriangle,
      title: 'Drive Safely',
      description: 'Stick to the speed limit and do not use your phone while driving.',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div className='container px-4 py-16 mx-auto mt-12'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-12 text-center'
        >
          <h1 className='mb-4 text-4xl font-bold text-gray-800 md:text-5xl'>Rules for Posting a Trip</h1>
          <p className='text-xl text-gray-600'>Ensure a smooth and safe journey by following these guidelines.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='grid gap-8 mb-12 md:grid-cols-3'
        >
          {rules.map((rule, index) => (
            <RuleCard key={index} {...rule} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='flex justify-center mb-8'
        >
          <label className='flex items-center cursor-pointer'>
            <div className='relative'>
              <input type='checkbox' className='sr-only' checked={agreed} onChange={() => setAgreed(!agreed)} />
              <div className={`w-10 h-6 bg-gray-300 rounded-full shadow-inner ${agreed ? 'bg-primary' : ''}`}></div>
              <div
                className={`absolute w-4 h-4 bg-white rounded-full shadow inset-y-1 left-1 transition-transform ${agreed ? 'transform translate-x-full' : ''}`}
              ></div>
            </div>
            <span className='ml-3 text-lg text-gray-800'>
              I understand that <span className='font-bold'>my account could be suspended if I break these rules</span>
            </span>
          </label>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='text-center'
        >
          <button
            onClick={() => agreed && navigate('/trip/post')}
            className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
              agreed ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!agreed}
          >
            {agreed ? (
              <span className='flex items-center justify-center'>
                <FaCheckCircle className='mr-2' />
                Post a Trip
              </span>
            ) : (
              'Agree to Rules to Continue'
            )}
          </button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default PostTripRules;
