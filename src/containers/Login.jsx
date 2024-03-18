/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Logo } from '../assets';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='flex items-center justify-center w-full min-h-screen text-gray-600 bg-gray-50'>
      <div className='relative'>
        <div className='absolute hidden w-56 h-56 text-primary-300 sm:block a-z-10 -left-20 -top-20'>
          <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <pattern
                id='a'
                patternUnits='userSpaceOnUse'
                width='40'
                height='40'
                patternTransform='scale(0.6) rotate(0)'
              >
                <rect x='0' y='0' width='100%' height='100%' fill='none' />
                <path
                  d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'
                  strokeWidth='1'
                  stroke='none'
                  fill='primary'
                />
              </pattern>
            </defs>
            <rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)' />
          </svg>
        </div>
        <div className='absolute hidden text-primary-300 sm:block h-28 w-28 a-z-10 -right-20 -bottom-20'>
          <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <pattern
                id='b'
                patternUnits='userSpaceOnUse'
                width='40'
                height='40'
                patternTransform='scale(0.5) rotate(0)'
              >
                <rect x='0' y='0' width='100%' height='100%' fill='none' />
                <path
                  d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'
                  strokeWidth='1'
                  stroke='none'
                  fill='primary'
                />
              </pattern>
            </defs>
            <rect width='800%' height='800%' transform='translate(0,0)' fill='url(#b)' />
          </svg>
        </div>

        {/* Register */}
        <div className='relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4'>
          <div className='flex-auto p-6'>
            {/* Logo */}
            <div className='flex items-center justify-center flex-grow-0 flex-shrink-0 mb-10 overflow-hidden'>
              <Link to='/'>
                <img src={Logo} alt='' />
              </Link>
            </div>
            {/* /Logo */}
            <h4 className='mb-2 font-medium text-gray-700 xl:text-xl'>Welcome to Eazy Go Rwanda!</h4>
            <p className='mb-6 text-gray-500'>Please sign-in to access your account</p>

            <form id='' className='mb-4' action='#' method='POST'>
              <div className='mb-4'>
                <label htmlFor='email' className='inline-block mb-2 text-xs font-medium text-gray-700 uppercase'>
                  Email or Username
                </label>
                <input
                  type='text'
                  className='block w-full px-3 py-2 text-sm border border-gray-400 rounded-md outline-none appearance-none cursor-text bg--100 focus:border-primary-500 focus:bg-white focus:text-gray-600 focus:shadow'
                  id='email'
                  name='email-username'
                  placeholder='Enter your email or username'
                  autoFocus
                />
              </div>
              <div className='mb-4'>
                <div className='flex justify-between'>
                  <label className='inline-block mb-2 text-xs font-medium text-gray-700 uppercase' htmlFor='password'>
                    Password
                  </label>
                  <Link to='/forgot-password' className='no-underline cursor-pointer text-primary'>
                    <small className=''>Forgot Password?</small>
                  </Link>
                </div>
                <div className='relative flex flex-wrap items-stretch w-full'>
                  <input
                    type='password'
                    id='password'
                    className='relative flex-auto block px-3 py-2 text-sm border border-gray-400 rounded-md outline-none appearance-none cursor-text bg--100 focus:border-primary-500 focus:bg-white focus:text-gray-600 focus:shadow'
                    name='password'
                    placeholder='············'
                  />
                </div>
              </div>
              <div className='mb-4'>
                <div className='block'>
                  <input
                    className='w-5 h-5 mt-1 mr-2 text-black align-top bg-no-repeat bg-contain border border-gray-300 rounded shadow appearance-none checked:bg-primary-500 focus:border-primary-500 focus:shadow'
                    type='checkbox'
                    id='remember-me'
                  />
                  <label className='inline-block' htmlFor='remember-me'>
                    {' '}
                    Remember Me{' '}
                  </label>
                </div>
              </div>
              <div className='mb-4'>
                <button
                  className='grid w-full px-5 py-2 text-sm text-center text-white align-middle border rounded-md shadow cursor-pointer select-none border-primary-500 bg-primary-500 hover:border-primary-600 hover:bg-primary-600 hover:text-white focus:border-primary-600 focus:bg-primary-600 focus:text-white focus:shadow-none'
                  type='submit'
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className='mb-4 text-center'>
              New on Eazy Go Rwanda ?
              <Link to='/registration' className='no-underline cursor-pointer text-primary hover:text-primary-500'>
                {' '}
                Create an account{' '}
              </Link>
            </p>
          </div>
        </div>
        {/* /Register */}
      </div>
    </div>
  );
};

export default Login;
