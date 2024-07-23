import React, { useEffect, useState, useRef } from 'react';
import { GiPoliceCar } from 'react-icons/gi';
import { FaPersonWalkingLuggage } from 'react-icons/fa6';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
import reg from '../assets/carview.jpg';
import './signup.css';

const SignUp = () => {
  const [accountType, setAccountType] = useState('Driver');
  const [file, setFile] = useState(null);
  const [preferences, setPreferences] = useState({
    smokeFree: false,
    petFriendly: false,
    musicLover: false,
  });
  const driverRef = useRef(null);
  const passengerRef = useRef(null);

  useEffect(() => {
    if (accountType === 'Driver' && driverRef.current) {
      driverRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (accountType === 'Passenger' && passengerRef.current) {
      passengerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [accountType]);

  const handleFileChange = event => {
    setFile(event.target.files[0]);
  };

  const handleFileRemove = () => {
    setFile(null);
  };

  const handlePreferenceChange = event => {
    setPreferences({
      ...preferences,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <section className='bg-green-50 min-h-screen'>
      <div className='flex flex-col lg:flex-row justify-center min-h-screen'>
        <div className='hidden lg:block lg:w-2/5 bg-cover bg-center' style={{ backgroundImage: `url(${reg})` }}></div>

        <div className='flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5'>
          <div className='w-full'>
            <h1 className='text-2xl font-semibold tracking-wider text-black capitalize'>Get your free account now.</h1>
            <p className='mt-4 text-black'>
              Let's get you all set up so you can verify your personal account and begin setting up your profile.
            </p>
            <div className='mt-6'>
              <h1 className='text-black'>Select type of account</h1>

              <div className='mt-3 flex flex-col sm:flex-row sm:items-center sm:space-x-2'>
                <button
                  className={`flex justify-center w-full px-6 py-3 text-white ${accountType === 'Driver' ? 'bg-primary' : 'bg-black bg-opacity-80 hover:bg-opacity-90 '} rounded-lg sm:w-auto focus:outline-none mb-2 sm:mb-0`}
                  onClick={() => setAccountType('Driver')}
                >
                  <GiPoliceCar className='w-6 h-6' />
                  <span className='mx-2'>Driver</span>
                </button>

                <button
                  className={`flex justify-center w-full px-6 py-3 text-white ${accountType === 'Passenger' ? 'bg-primary' : 'bg-black bg-opacity-80 hover:bg-opacity-90 '} rounded-lg sm:w-auto focus:outline-none`}
                  onClick={() => setAccountType('Passenger')}
                >
                  <FaPersonWalkingLuggage className='w-6 h-6' />
                  <span className='mx-2'>Passenger</span>
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
                      className='block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer'
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
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer'
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
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer'
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
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer'
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
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer'
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
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer'
                      placeholder=''
                      required
                    />
                    <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      Confirm Password
                    </label>
                  </div>
                </div>
                {!file ? (
                  <div className='relative z-0 w-full mt-2 mb-5 group'>
                    <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor='file_input'>
                      Driving License
                    </label>
                    <div className='flex items-center justify-center w-full'>
                      <label className='flex flex-col items-center justify-center w-full px-4 py-6 text-primary border-2 border-primary border-dashed rounded-lg cursor-pointer hover:bg-blue-50 hover:text-green-900'>
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
                            strokeWidth='2'
                            d='M7 16V8m0 0l-3 3m3-3l3 3m13-2v7a2 2 0 01-2 2H7m13-2l-3-3m0 0l-3 3m3-3V8m0 0l-3 3m3-3L7 8'
                          />
                        </svg>
                        <span className='mt-2 text-base leading-normal'>Select a file</span>
                        <input type='file' className='hidden' onChange={handleFileChange} />
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className='flex items-center mt-2'>
                    <FiCheckCircle className='w-6 h-6 text-green-500' />
                    <p className='ml-2 text-sm text-gray-600'>File "{file.name}" uploaded successfully!</p>
                    <button onClick={handleFileRemove} className='ml-4'>
                      <FiXCircle className='w-6 h-6 text-red-500' />
                    </button>
                  </div>
                )}
                <div className='mt-6'>
                  <button className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50'>
                    Sign Up
                  </button>

                  <div className='mt-6 text-center'>
                    <p className='text-sm text-black'>
                      Already have an account?{' '}
                      <a href='/login' className='text-primary focus:outline-none focus:underline hover:underline'>
                        Sign in
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </form>
            )}

            {accountType === 'Passenger' && (
              <div>
                <form>
                  <div className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2'>
                    <div className='relative z-0 w-full mb-5 group'>
                      <input
                        type='text'
                        name='floating_first_name'
                        id='floating_first_name'
                        className='block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer'
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
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer'
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
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer'
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
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer'
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
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer'
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
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer'
                        placeholder=''
                        required
                      />
                      <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                        Confirm Password
                      </label>
                    </div>
                  </div>

                  <div className='mt-6'>
                    <h3 className='text-lg font-semibold mb-2'>Preferences</h3>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                      <label className='flex items-center cursor-pointer'>
                        <input
                          type='checkbox'
                          name='smokeFree'
                          checked={preferences.smokeFree}
                          onChange={handlePreferenceChange}
                          className='custom-checkbox'
                        />
                        <span className='ml-2 text-gray-700 text-sm'>Smoke-free ride</span>
                      </label>
                      <label className='flex items-center cursor-pointer'>
                        <input
                          type='checkbox'
                          name='petFriendly'
                          checked={preferences.petFriendly}
                          onChange={handlePreferenceChange}
                          className='custom-checkbox'
                        />
                        <span className='ml-2 text-gray-700 text-sm'>Pet-friendly</span>
                      </label>
                      <label className='flex items-center cursor-pointer'>
                        <input
                          type='checkbox'
                          name='musicLover'
                          checked={preferences.musicLover}
                          onChange={handlePreferenceChange}
                          className='custom-checkbox'
                        />
                        <span className='ml-2 text-gray-700 text-sm'>Music lover</span>
                      </label>
                    </div>
                  </div>

                  <div className='mt-6'>
                    <button className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50'>
                      Sign Up
                    </button>

                    <div className='mt-6 text-center'>
                      <p className='text-sm text-black'>
                        Already have an account?{' '}
                        <a href='/login' className='text-primary focus:outline-none focus:underline hover:underline'>
                          Sign in
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
