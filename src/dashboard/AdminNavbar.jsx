import React from 'react';
import { FaBars, FaBell, FaEnvelope, FaUser } from 'react-icons/fa';
import { Logo } from '../assets';

const AdminNavbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden'
            >
              <FaBars className='h-6 w-6' />
            </button>
            <div className='flex-shrink-0 flex items-center'>
              <img className='h-8 w-auto' src={Logo} alt='TegaRide' />
            </div>
          </div>
          <div className='flex items-center'>
            <button className='p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500'>
              <FaBell className='h-6 w-6' />
            </button>
            <button className='ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500'>
              <FaEnvelope className='h-6 w-6' />
            </button>
            <div className='ml-3 relative'>
              <div>
                <button className='flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out'>
                  <img
                    className='h-8 w-8 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
