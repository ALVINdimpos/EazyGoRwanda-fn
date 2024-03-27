/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className='max-w-md mx-auto mt-28'>
      <div className='bg-white border border-gray-200 shadow-sm rounded-xl'>
        <div className='p-4 sm:p-7'>
          <div className='text-center'>
            <div className='inline-block p-2 mb-4 rounded-full bg-primary text-pr'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
                />
              </svg>
            </div>
            <h1 className='block text-2xl font-bold text-gray-800'>Forgot password?</h1>
            <p className='mt-2 text-sm text-gray-600'>Don't worry we'll send you reset instructions.</p>
          </div>

          <div className='mt-6'>
            {/* Form */}
            <form>
              <div className='grid gap-y-4'>
                {/* Form Group */}
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm text-gray-600'>
                    Email address
                  </label>
                  <div className='relative'>
                    <input
                      value='invalidemail'
                      type='email'
                      id='email'
                      name='email'
                      className='block w-full px-4 py-3 text-sm border border-gray-200 rounded-md outline-none peer bg-gray-50 ring-offset-1 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500'
                      required
                      aria-describedby='email-error'
                    />
                    <div className='absolute right-0 items-center hidden px-3 pointer-events-none top-3 peer-invalid:flex'>
                      <svg
                        className='w-5 h-5 text-rose-500'
                        width='16'
                        height='16'
                        fill='currentColor'
                        viewBox='0 0 16 16'
                        aria-hidden='true'
                      >
                        <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
                      </svg>
                    </div>
                    <p className='hidden mt-2 text-xs text-rose-600 peer-invalid:block' id='email-error'>
                      Valid email address required for the account recovery process
                    </p>
                  </div>
                </div>
                {/* /Form Group */}

                <button
                  type='submit'
                  className='inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all border border-transparent rounded-md bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                >
                  Reset password
                </button>
              </div>
            </form>
            {/* /Form */}
          </div>
        </div>
      </div>

      <p className='flex items-center justify-center mt-3 text-center divide-x divide-gray-300'>
        {/* <a className="pl-3 text-sm text-gray-600 decoration-2 hover:text-blue-600 hover:underline" href="#"> FAQs </a> */}
        <span className='inline pr-3 text-sm text-gray-600'>
          Remember your password?
          <Link className='font-medium text-primary decoration-2 hover:underline' to='/login'>
            {' '}
            Sign in here{' '}
          </Link>
        </span>
        <Link
          className='pl-3 text-sm text-gray-600 decoration-2 hover:text-blue-600 hover:underline'
          href='#'
          target='_blank'
        >
          {' '}
          Contact Support{' '}
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
