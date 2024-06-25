import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaMapMarkerAlt, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Hero } from '../assets';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 dark:from-gray-900 dark:to-gray-800'>
      <div className='container px-4 py-16 mx-auto lg:py-24'>
        <div className='grid items-center gap-8 lg:grid-cols-12'>
          <motion.div
            className='lg:col-span-7'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
              Your Journey, <span className='text-primary'>Your Way!</span>
            </h1>
            <p className='mb-8 text-lg text-gray-700 md:text-xl dark:text-gray-300'>
              Welcome to TegaRide – where every ride is an experience. Enjoy seamless travel, hassle-free transactions,
              and the assurance of safety.
            </p>
            <div className='flex flex-wrap gap-4'>
              <Link
                to=''
                className='inline-flex items-center px-6 py-3 text-white transition duration-300 ease-in-out transform rounded-full bg-primary hover:bg-primary-600 hover:-translate-y-1 hover:shadow-lg'
              >
                <FaDownload className='mr-2' />
                Download App
              </Link>
              <Link
                to=''
                className='inline-flex items-center px-6 py-3 transition duration-300 ease-in-out transform border-2 rounded-full text-primary border-primary hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg'
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
          <div className='hidden lg:col-span-5 lg:block'>
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
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: '',
  });

  const handleChange = e => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search params:', searchParams);
  };

  return (
    <motion.div
      className='absolute bottom-0 left-0 right-0 bg-white shadow-2xl dark:bg-gray-800 rounded-t-3xl'
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <form onSubmit={handleSubmit} className='container px-4 py-8 mx-auto'>
        <div className='flex flex-wrap -mx-2'>
          <div className='w-full px-2 mb-4 md:w-1/3 md:mb-0'>
            <div className='relative'>
              <FaMapMarkerAlt className='absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2' />
              <input
                type='text'
                name='from'
                placeholder='From'
                className='w-full py-2 pl-10 pr-3 border-2 border-gray-200 rounded-lg outline-none focus:border-primary'
                onChange={handleChange}
                value={searchParams.from}
              />
            </div>
          </div>
          <div className='w-full px-2 mb-4 md:w-1/3 md:mb-0'>
            <div className='relative'>
              <FaMapMarkerAlt className='absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2' />
              <input
                type='text'
                name='to'
                placeholder='To'
                className='w-full py-2 pl-10 pr-3 border-2 border-gray-200 rounded-lg outline-none focus:border-primary'
                onChange={handleChange}
                value={searchParams.to}
              />
            </div>
          </div>
          <div className='w-full px-2 md:w-1/3'>
            <div className='relative'>
              <FaCalendarAlt className='absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2' />
              <input
                type='date'
                name='date'
                className='w-full py-2 pl-10 pr-3 border-2 border-gray-200 rounded-lg outline-none focus:border-primary'
                onChange={handleChange}
                value={searchParams.date}
              />
            </div>
          </div>
        </div>
        <button
          type='submit'
          className='w-full px-4 py-2 mt-4 text-white transition duration-300 ease-in-out transform rounded-lg bg-primary hover:bg-primary-600 hover:-translate-y-1 hover:shadow-lg'
        >
          <FaSearch className='inline-block mr-2' />
          Find a Ride
        </button>
      </form>
    </motion.div>
  );
};

export default HeroSection;
