import React from 'react';
import { useState } from 'react';
import { Logo } from '../assets';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const CustomCheckbox = ({ checked, onChange }) => (
  <div
    className={`relative w-5 h-5 mt-1 mr-2 border border-gray-300 rounded shadow cursor-pointer ${
      checked ? 'border-green-700' : ''
    }`}
    onClick={() => onChange(!checked)}
  >
    {checked && <FaCheck className='absolute text-green-700' style={{ top: '2px', left: '2px' }} />}
    <input
      type='checkbox'
      className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
      checked={checked}
      onChange={() => {}}
    />
  </div>
);

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className='bg-gradient-to-tr from-green-50 via-green-100 to-green-50 flex items-center justify-center w-full min-h-screen text-gray-600 bg-gray-50 '>
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
          <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg' className='text-red-950'>
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
            <h4 className='mb-2 font-medium text-gray-700 xl:text-xl'>Welcome to TegaRide!</h4>
            <p className='mb-6 text-gray-500'>Please sign-in to access your account</p>

            <form id='' className='mb-4' action='#' method='POST'>
              <div className='mb-4'>
                <label htmlFor='email' className='inline-block mb-2 text-xs font-medium text-gray-700 uppercase'>
                  Email or Username
                </label>
                <input
                  type='text'
                  className='block w-full px-3 py-2 text-sm border border-gray-400 rounded-md outline-none appearance-none cursor-text bg-gray-100 focus:border-green-700 focus:bg-white focus:text-gray-600 focus:shadow'
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
                  <Link
                    to='/forgot-password'
                    className='no-underline cursor-pointer text-green-600 hover:text-green-800'
                  >
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <div className='relative flex flex-wrap items-stretch w-full'>
                  <input
                    type='password'
                    id='password'
                    className='relative flex-auto block px-3 py-2 text-sm border border-gray-400 rounded-md outline-none appearance-none cursor-text bg-gray-100 focus:border-green-700 focus:bg-white focus:text-gray-600 focus:shadow'
                    name='password'
                    placeholder='············'
                  />
                </div>
              </div>
              <div className='mb-4'>
                <div className='block'>
                  <CustomCheckbox checked={rememberMe} onChange={setRememberMe} />
                  <label className='inline-block' htmlFor='remember-me'>
                    Remember Me
                  </label>
                </div>
              </div>
              <div className='mb-4'>
                <button
                  className='grid w-full px-5 py-2 text-sm text-center text-white align-middle border rounded-md shadow cursor-pointer select-none border-green-600 bg-green-600 hover:border-green-700 hover:bg-green-700 hover:text-white focus:border-green-700 focus:bg-green-700 focus:text-white focus:shadow-none'
                  type='submit'
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className='mb-4 text-center'>
              New on Eazy Go Rwanda?{' '}
              <Link to='/registration' className='no-underline cursor-pointer text-green-600 hover:text-green-800'>
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
