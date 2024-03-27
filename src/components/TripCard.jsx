/* eslint-disable no-unused-vars */
import React from 'react';

const TripCard = () => {
  return (
    <div className='grid grid-cols-1 gap-4 mb-8 overflow-hidden bg-white border rounded-md shadow-md cursor-pointer lg:grid-cols-4 border-floor'>
      {/* Drive Details */}
      <div className='flex flex-col p-4'>
        <div
          className='w-16 h-16 mb-2 bg-center bg-cover rounded-full'
          style={{
            backgroundImage:
              "url('https://hitchplanet.s3.amazonaws.com/images/thumbs/1029524_lvKYDLSAXbKdwfMG3J3D_200.jpg')",
          }}
        ></div>
        <div className='text-lg font-bold'>Natalie</div>
        <div className='flex items-center text-gray-600'>
          <div className='mr-1'>5.0</div>
          <div className='mx-1 divider-dot'></div>
          <span>1 driven</span>
        </div>
      </div>

      {/* Trip Details */}
      <div className='p-4'>
        <div className='mb-2'>
          <a href='/trips/vancouver-bc/victoria-bc/9421722' rel='nofollow' className='text-blue-500'>
            Vancouver to Victoria
          </a>
        </div>
        <div className='flex items-center mb-2 text-gray-600'>
          <div className='mr-2 font-bold'>Leaving:</div>
          <div>Friday, March 8 at 3:30pm</div>
        </div>
        <div className='flex items-center text-gray-600'>
          <div className='mr-2 font-bold'>Pickup:</div>
          <div>Vancouver, BC, Canada</div>
        </div>
        <div className='flex items-center mt-2 text-gray-600'>
          <div className='mr-2 font-bold'>Dropoff:</div>
          <div>Victoria, BC, Canada</div>
        </div>
      </div>

      {/* Car Details */}
      <div className='flex items-center p-4'>
        <div
          className='w-16 h-16 mr-4 bg-center bg-cover rounded-md'
          style={{
            backgroundImage:
              "url('https://hitchplanet.s3.amazonaws.com/images/vehicles/thumbs/XyccHuskzgW9gaJuHcjP_200x150.jpg')",
          }}
        ></div>
        <div>
          <div className='text-lg font-bold'>Toyota Tacoma Dark Blue…</div>
          <div className='mt-2'>
            <div className='tooltip' title='Large luggage ok'>
              <div className='luggage-size'>L</div>
            </div>
            {/* Add other vehicle preferences here */}
          </div>
        </div>
      </div>

      {/* Seats and Price */}
      <div className='flex flex-col items-end justify-between p-4'>
        <div className='text-lg font-bold'>$18</div>
        <div className='text-gray-600'>
          <div className='font-bold'>3 seats left</div>
        </div>
      </div>

      {/* Divider Bar */}
      <div className='col-span-4 mt-4 border-t'></div>
    </div>
  );
};

export default TripCard;
