/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Hero } from '../assets';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import SearchNav from './SearchNav';
const HeroSection = () => {
  return (
    <section className=''>
      <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-[100vh]'>
        <div className='mr-auto place-self-center lg:col-span-7 mt-[20px]'>
          <h1 className='max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-floor'>
            Save Time, Save Money, Safe Rides: Your Journey, Your Way!
          </h1>
          <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
            Welcome to TegaRide – where every ride is an experience, and every journey is crafted for your comfort.
            Enjoy the convenience of seamless travel, hassle-free transactions, and the assurance of safety.
          </p>
          <Link
            to=''
            className='inline-flex items-center justify-center gap-1 px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
          >
            Download
            <FaDownload />
          </Link>
          <Link
            to=''
            className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-floor '
          >
            How it works
            <svg
              className='w-5 h-5 ml-2 -mr-1'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </Link>
        </div>
        <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
          <img src={Hero} alt='mockup' className='h-[400px] ' />
        </div>

        {/*Search Navigation  */}
        <SearchNav />
      </div>
    </section>
  );
};

export default HeroSection;
