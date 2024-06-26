/* eslint-disable react/prop-types */
import { FaCar, FaUser, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../containers/Footer';

const ChoiceButton = ({ icon: Icon, title, description, color, onClick }) => (
  <motion.div
    className={`flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg cursor-pointer w-64 h-64 ${color}`}
    whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <Icon className='mb-4 text-6xl text-green-600' />
    <h2 className='mb-2 text-xl font-bold'>{title}</h2>
    <p className='text-center text-gray-600'>{description}</p>
    <motion.div className='mt-4' initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
      <FaArrowRight className='text-2xl' />
    </motion.div>
  </motion.div>
);

const Choose = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-green-50'>
      <Navbar />
      <main className='flex items-center justify-center flex-grow px-4 py-16 mt-12'>
        <div className='w-full max-w-4xl'>
          <motion.h1
            className='mb-12 text-4xl font-bold text-center text-gray-800'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What are you looking to do today?
          </motion.h1>
          <div className='flex flex-col items-center justify-center gap-8 md:flex-row'>
            <ChoiceButton
              icon={FaCar}
              title="I'm driving"
              description='I want to fill empty seats in my car'
              color='hover:bg-blue-50'
              className='text-green-600'
              onClick={() => navigate('/post-trip-rules')}
            />
            <div className='hidden w-px h-48 bg-gray-300 md:block'></div>
            <ChoiceButton
              icon={FaUser}
              title='I need a ride'
              description='Notify me when a ride is available'
              color='hover:bg-green-50'
              onClick={() => navigate('/trip/request')}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Choose;
