/* eslint-disable no-unused-vars */
import React from 'react';
import { MapPin } from 'lucide-react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
const Searched = () => {
  const handleSubmit = () => {};
  const newDate = new Date();
  return (
    <div className='w-full h-40 my-10 bg-transparent col-span-full'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center w-full h-full gap-4 pl-3 pr-8 rounded-lg lg:flex-row lg:gap-12 bg-primary'
      >
        <div className='relative flex items-center w-full lg:w-2/12'>
          <MapPin className='absolute ml-1' />
          <input type='text' placeholder='From' className='w-full h-20 pl-12 rounded-md' defaultValue='Huye' />
        </div>
        <div className='relative flex items-center w-full mt-4 lg:w-2/12 lg:mt-0'>
          <MapPin className='absolute ml-1' />
          <input type='text' placeholder='To' className='w-full h-20 pl-12 rounded-md' defaultValue='Kigali' />
        </div>

        <DatePicker
          placeholder='Leaving time(optional)'
          className='w-full h-20 pl-12 mt-4 rounded-md lg:w-3/12 lg:mt-0'
          defaultValue={dayjs('01/01/2015')}
        />

        <button type='submit' className='w-full h-20 p-2 mt-4 text-white rounded-md lg:w-3/12 lg:bg-black lg:mt-0'>
          Find a ride
        </button>
      </form>
    </div>
  );
};

export default Searched;
