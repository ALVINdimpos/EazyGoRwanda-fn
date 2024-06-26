/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Search } from 'lucide-react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { CarpoolSection } from '../components';
import Navbar from '../components/Navbar';
import Footer from './Footer';
// Searched Component
const Searched = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='w-full max-w-4xl mx-auto my-8 overflow-hidden bg-white rounded-lg shadow-lg'
    >
      <form onSubmit={handleSubmit} className='flex flex-wrap items-center p-4'>
        <div className='w-full p-2 md:w-1/4'>
          <div className='relative'>
            <MapPin className='absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2' />
            <input
              type='text'
              placeholder='From'
              className='w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              defaultValue='Huye'
            />
          </div>
        </div>
        <div className='w-full p-2 md:w-1/4'>
          <div className='relative'>
            <MapPin className='absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2' />
            <input
              type='text'
              placeholder='To'
              className='w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              defaultValue='Kigali'
            />
          </div>
        </div>
        <div className='w-full p-2 md:w-1/4'>
          <div className='relative'>
            <Calendar className='absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2' />
            <DatePicker
              placeholder='Leaving date'
              className='w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              defaultValue={dayjs()}
            />
          </div>
        </div>
        <div className='w-full p-2 md:w-1/4'>
          <button
            type='submit'
            className='flex items-center justify-center w-full px-4 py-2 text-white transition duration-300 rounded-md bg-primary hover:bg-primary-dark'
          >
            <Search className='mr-2' />
            Find a ride
          </button>
        </div>
      </form>
    </motion.div>
  );
};

// TripCard Component
const TripCard = ({ driver, trip, car, price, seatsLeft }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='mb-4 overflow-hidden transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg'
    >
      <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-4'>
        <div className='flex items-center'>
          <img src={driver.image} alt={driver.name} className='w-16 h-16 mr-4 rounded-full' />
          <div>
            <h3 className='text-lg font-semibold'>{driver.name}</h3>
            <div className='text-sm text-gray-600'>
              {driver.rating} • {driver.trips} trips
            </div>
          </div>
        </div>
        <div className='col-span-2'>
          <h4 className='mb-2 text-lg font-semibold'>{trip.route}</h4>
          <div className='mb-1 text-sm text-gray-600'>
            <span className='font-semibold'>Leaving:</span> {trip.departure}
          </div>
          <div className='mb-1 text-sm text-gray-600'>
            <span className='font-semibold'>Pickup:</span> {trip.pickup}
          </div>
          <div className='text-sm text-gray-600'>
            <span className='font-semibold'>Dropoff:</span> {trip.dropoff}
          </div>
        </div>
        <div className='flex flex-col items-end justify-between'>
          <div className='text-2xl font-bold text-primary'>${price}</div>
          <div className='text-sm font-semibold'>{seatsLeft} seats left</div>
        </div>
      </div>
      <div className='flex items-center px-4 py-2 bg-gray-100'>
        <img src={car.image} alt={car.model} className='w-12 h-12 mr-3 rounded' />
        <div className='text-sm'>
          <div className='font-semibold'>{car.model}</div>
          <div className='text-gray-600'>{car.type}</div>
        </div>
      </div>
    </motion.div>
  );
};

// Travel Component
const Travel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const trips = [
    {
      driver: {
        name: 'Natalie',
        image:
          'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
        rating: 5.0,
        trips: 1,
      },
      trip: {
        route: 'Vancouver to Victoria',
        departure: 'Friday, March 8 at 3:30pm',
        pickup: 'Vancouver, BC, Canada',
        dropoff: 'Victoria, BC, Canada',
      },
      car: {
        model: 'Toyota Tacoma',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Toyota_Tacoma_%28N300%29_TRD_1X7A2438.jpg',
        type: 'Large luggage ok',
      },
      price: 18,
      seatsLeft: 3,
    },
    // ... more trip data
  ];

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <div className='container px-4 py-8 mx-auto'>
        <Searched />
        <div className='my-8'>
          <h2 className='mb-2 text-2xl font-bold'>Results 1 to 5 from Vancouver to Victoria</h2>
          <p className='mb-4 text-gray-600'>5 results total</p>
          <h3 className='mb-4 text-xl font-semibold'>Friday, March 8</h3>
          {trips.map((trip, index) => (
            <TripCard key={index} {...trip} />
          ))}
        </div>
        <div className='flex justify-center mt-8'>
          <nav className='inline-flex rounded-md shadow'>
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className='px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50'
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 border border-gray-300 text-sm font-medium ${
                  currentPage === i + 1 ? 'bg-primary text-white' : 'bg-white text-gray-500 hover:bg-gray-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              className='px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50'
            >
              Next
            </button>
          </nav>
        </div>
      </div>
      <CarpoolSection />
      <Footer />
    </div>
  );
};

export default Travel;
