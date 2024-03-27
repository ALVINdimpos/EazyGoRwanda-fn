/* eslint-disable no-unused-vars */
import React from 'react';
import { GiPoliceCar } from 'react-icons/gi';
import { GiLegArmor } from 'react-icons/gi';
import { reg } from '../assets';
const SignUp = () => {
  return (
    <section className='bg-white '>
      <div className='flex justify-center min-h-screen'>
        <div className='hidden bg-cover lg:block lg:w-2/5' style={{ backgroundImage: `url(${reg})` }}></div>

        <div className='flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5'>
          <div className='w-full'>
            <h1 className='text-2xl font-semibold tracking-wider text-black capitalize '>Get your free account now.</h1>
            <p className='mt-4 text-black '>
              Let’s get you all set up so you can verify your personal account and begin setting up your profile.
            </p>
            <div className='mt-6'>
              <h1 className='text-black '>Select type of account</h1>

              <div className='mt-3 md:flex md:items-center md:-mx-2'>
                <button className='flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none'>
                  <GiPoliceCar className='w-6 h-6' />
                  <span className='mx-2'>a driver</span>
                </button>

                <button className='flex justify-center w-full px-6 py-3 mt-4 text-black border rounded-lg border-primary md:mt-0 md:w-auto md:mx-2 focus:outline-none'>
                  <GiLegArmor className='w-6 h-6' />

                  <span className='mx-2'>a passenger</span>
                </button>
              </div>
            </div>

            <form className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2'>
              <div className='relative z-0 w-full mb-5 group'>
                <input
                  type='text'
                  name='floating_password'
                  id='floating_password'
                  className='block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black  dark:focus:border-floor focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=''
                  required
                />
                <label className='peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  First Name
                </label>
              </div>
              <div className='relative z-0 w-full mb-5 group'>
                <input
                  type='text'
                  name='floating_password'
                  id='floating_password'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=''
                  required
                />
                <label className='peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Last name
                </label>
              </div>
              <div className='relative z-0 w-full mb-5 group'>
                <input
                  type='phone'
                  name='floating_password'
                  id='floating_password'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=''
                  required
                />
                <label className='peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Phone number
                </label>
              </div>

              <div className='relative z-0 w-full mb-5 group'>
                <input
                  type='email'
                  name='floating_password'
                  id='floating_password'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=''
                  required
                />
                <label className='peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Email
                </label>
              </div>
              <div className='relative z-0 w-full mb-5 group'>
                <input
                  type='password'
                  name='floating_password'
                  id='floating_password'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=''
                  required
                />
                <label className='peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Password
                </label>
              </div>

              <div className='relative z-0 w-full mb-5 group'>
                <input
                  type='password'
                  name='floating_password'
                  id='floating_password'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=''
                  required
                />
                <label className='peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Confirm password
                </label>
              </div>
              <div className='relative z-0 w-full mb-5 group'>
                <label className='block mb-2 text-sm font-medium text-gray-900 ' htmlFor='file_input'>
                  Driving license
                </label>
                <input
                  className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none '
                  id='file_input'
                  type='file'
                />
              </div>
              <button className='flex items-center justify-between w-full px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg bg-primary hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
                <span>Sign Up </span>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 rtl:-scale-x-100'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
