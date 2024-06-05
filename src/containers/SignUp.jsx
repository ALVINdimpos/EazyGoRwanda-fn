/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { GiPoliceCar, GiLegArmor } from 'react-icons/gi';
import { reg } from '../assets';

const SignUp = () => {
  const [accountType, setAccountType] = useState('Driver');
  const driverRef = useRef(null);
  const passengerRef = useRef(null);

  useEffect(() => {
    if (accountType === 'Driver' && driverRef.current) {
      driverRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (accountType === 'Passenger' && passengerRef.current) {
      passengerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [accountType]);

  return (
    <section className='bg-white'>
      <div className='flex justify-center min-h-screen'>
        <div className='hidden bg-cover lg:block lg:w-2/5' style={{ backgroundImage: `url(${reg})` }}></div>

        <div className='flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5'>
          <div className='w-full'>
            <h1 className='text-2xl font-semibold tracking-wider text-black capitalize'>Get your free account now.</h1>
            <p className='mt-4 text-black'>
              Let’s get you all set up so you can verify your personal account and begin setting up your profile.
            </p>
            <div className='mt-6'>
              <h1 className='text-black'>Select type of account</h1>

              <div className='mt-3 md:flex md:items-center md:-mx-2'>
                <button
                  className={`flex justify-center w-full px-6 py-3 text-white ${accountType === 'Driver' ? 'bg-blue-500' : 'bg-gray-400'} rounded-lg md:w-auto md:mx-2 focus:outline-none`}
                  onClick={() => setAccountType('Driver')}
                >
                  <GiPoliceCar className='w-6 h-6' />
                  <span className='mx-2'>a driver</span>
                </button>

                <button
                  className={`flex justify-center w-full px-6 py-3 mt-4 text-white ${accountType === 'Passenger' ? 'bg-blue-500' : 'bg-gray-400'} rounded-lg md:mt-0 md:w-auto md:mx-2 focus:outline-none`}
                  onClick={() => setAccountType('Passenger')}
                >
                  <GiLegArmor className='w-6 h-6' />
                  <span className='mx-2'>a passenger</span>
                </button>
              </div>
            </div>

            {accountType === 'Driver' && (
              <form>
                <div className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2'>
                  <div className='relative z-0 w-full mb-5 group'>
                    <input
                      type='text'
                      name='floating_first_name'
                      id='floating_first_name'
                      className='block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=''
                      required
                    />
                    <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      First Name
                    </label>
                  </div>
                  <div className='relative z-0 w-full mb-5 group'>
                    <input
                      type='text'
                      name='floating_last_name'
                      id='floating_last_name'
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=''
                      required
                    />
                    <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      Last Name
                    </label>
                  </div>
                  <div className='relative z-0 w-full mb-5 group'>
                    <input
                      type='phone'
                      name='floating_phone'
                      id='floating_phone'
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=''
                      required
                    />
                    <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      Phone Number
                    </label>
                  </div>
                  <div className='relative z-0 w-full mb-5 group'>
                    <input
                      type='email'
                      name='floating_email'
                      id='floating_email'
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=''
                      required
                    />
                    <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      Email
                    </label>
                  </div>
                  <div className='relative z-0 w-full mb-5 group'>
                    <input
                      type='password'
                      name='floating_password'
                      id='floating_password'
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=''
                      required
                    />
                    <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      Password
                    </label>
                  </div>
                  <div className='relative z-0 w-full mb-5 group'>
                    <input
                      type='password'
                      name='floating_password_confirmation'
                      id='floating_password_confirmation'
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=''
                      required
                    />
                    <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      Confirm Password
                    </label>
                  </div>
                </div>
                <div className='relative z-0 w-full mt-2 mb-5 group'>
                  <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor='file_input'>
                    Driving License
                  </label>
                  <div className='flex items-center justify-center w-full'>
                    <label className='flex flex-col items-center justify-center w-full px-4 py-6 text-blue-600 border-2 border-blue-600 border-dashed rounded-lg cursor-pointer hover:bg-blue-50 hover:text-blue-700'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-8 h-8'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M7 16V12m0 0V8m0 4h10m-5 4v4m0 0v-4m0 0H7m10 0h2a2 2 0 002-2V8a2 2 0 00-2-2h-2m-5 4V4m0 0H7a2 2 0 00-2 2v8a2 2 0 002 2h2'
                        />
                      </svg>
                      <span className='mt-2 text-base leading-normal'>Upload your driving license</span>
                      <input id='file_input' type='file' className='hidden' />
                    </label>
                  </div>
                </div>
                {/* submit button  */}
                <div className='relative z-0 w-full mb-5 group'>
                  <button
                    type='submit'
                    className='flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            )}

            {accountType === 'Passenger' && (
              <form>
                <div className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2'>
                  <div className='relative z-0 w-full mb-5 group'>
                    <input
                      type='text'
                      name='floating_first_name'
                      id='floating_first_name'
                      className='block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=''
                      required
                    />
                    <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      First Name
                    </label>
                  </div>
                  <div className='relative z-0 w-full mb-5 group'>
                    <input
                      type='text'
                      name='floating_last_name'
                      id='floating_last_name'
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=''
                      required
                    />
                    <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      Last Name
                    </label>
                  </div>
                  <div className='relative z-0 w-full mb-5 group'>
                    <input
                      type='phone'
                      name='floating_phone'
                      id='floating_phone'
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=''
                      required
                    />
                    <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      Phone Number
                    </label>
                  </div>
                  <div className='relative z-0 w-full mb-5 group'>
                    <input
                      type='email'
                      name='floating_email'
                      id='floating_email'
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=''
                      required
                    />
                    <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      Email
                    </label>
                  </div>
                  <div className='relative z-0 w-full mb-5 group'>
                    <input
                      type='password'
                      name='floating_password'
                      id='floating_password'
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=''
                      required
                    />
                    <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      Password
                    </label>
                  </div>
                  <div className='relative z-0 w-full mb-5 group'>
                    <input
                      type='password'
                      name='floating_password_confirmation'
                      id='floating_password_confirmation'
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=''
                      required
                    />
                    <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      Confirm Password
                    </label>
                  </div>
                </div>
                {/* submit button  */}
                <div className='relative z-0 w-full mt-4 mb-5 group'>
                  <button
                    type='submit'
                    className='flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
