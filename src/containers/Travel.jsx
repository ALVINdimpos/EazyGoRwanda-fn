/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import { CarpoolSection } from '../components';
import { Searched } from '../components';
import { TripCard } from '../components';
const Travel = () => {
  return (
    <div>
      <Navbar />
      <div className='p-9'>
        <Searched />
        <div className='p-9'>
          <div className='mb-2 text-2xl font-bold'>Results 1 to 5 from Vancouver to Victoria</div>
          <div className='mb-2 text-gray-500'>5 results total</div>
          <div className='text-lg font-semibold'>Friday, March 8</div>
          <TripCard />
          <TripCard />
          <TripCard />
          <TripCard />
          <TripCard />
          <nav aria-label='Page navigation '>
            <ul className='inline-flex h-10 -space-x-px text-base'>
              <li>
                <a
                  href='#'
                  className='flex items-center justify-center h-10 px-4 leading-tight bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center justify-center h-10 px-4 leading-tight border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center justify-center h-10 px-4 leading-tight border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href='#'
                  aria-current='page'
                  className='flex items-center justify-center h-10 px-4 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white'
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center justify-center h-10 px-4 leading-tight border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center justify-center h-10 px-4 leading-tight border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center justify-center h-10 px-4 leading-tight border-gray-300 rounded-e-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <CarpoolSection />
      <Footer />
    </div>
  );
};

export default Travel;
