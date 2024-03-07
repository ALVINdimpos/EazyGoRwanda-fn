import React from 'react';
import { MapPin } from 'lucide-react';
import { DatePicker } from 'antd';

function SearchNav() {
  const handleSubmit = () => {};
  return (
    <div className='w-full h-40 col-span-full bg-transparent my-10'>
      <form onSubmit={handleSubmit} className='flex items-center gap-12 w-full h-full pr-8 pl-3 bg-primary rounded-lg'>
        <div className='w-40'>
          <p className='text-2xl'>Need a ride?</p>
          <p className='text-white'>Find a ride and carpool anywhere in Rwanda.</p>
        </div>
        <div className='relative flex items-center w-2/12'>
          <MapPin className='absolute ml-1' />
          <input type='text' placeholder='From' className='h-20 w-full pl-12 rounded-md' />
        </div>
        <div className='relative flex items-center w-2/12'>
          <MapPin className='absolute ml-1' />
          <input type='text' placeholder='To' className='h-20 w-full pl-12 rounded-md' />
        </div>

        <DatePicker placeholder='Leaving time(optional)' className='h-20 w-3/12 pl-12 rounded-md' />

        <button type='submit' className='h-20 w-3/12 p-2 lg:bg-black text-white rounded-md'>
          Find a ride
        </button>
      </form>
    </div>
  );
}

export default SearchNav;
