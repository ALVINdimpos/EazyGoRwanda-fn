import React, { useState } from 'react';
import { FaStar, FaMapMarkerAlt, FaClock, FaUsers, FaDollarSign, FaCarSide, FaBan } from 'react-icons/fa';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';

const RecentTrips = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [trips, setTrips] = useState([
    {
      id: 1,
      driverName: 'John Doe',
      driverImage: 'https://i.pravatar.cc/150?img=1',
      rating: 4.5,
      ranking: 2,
      from: 'New York City',
      to: 'Boston',
      departureTime: '2023-07-20 09:00 AM',
      seatsBooked: 3,
      farePerSeat: 50,
      dispatchTime: '2023-07-20 08:45 AM',
      status: 'Completed',
    },
    {
      id: 2,
      driverName: 'Jane Smith',
      driverImage: 'https://i.pravatar.cc/150?img=2',
      rating: 5,
      ranking: 1,
      from: 'Los Angeles',
      to: 'San Francisco',
      departureTime: '2023-07-21 10:30 AM',
      seatsBooked: 4,
      farePerSeat: 60,
      dispatchTime: '2023-07-21 10:15 AM',
      status: 'Completed',
    },
    {
      id: 3,
      driverName: 'Mike Brown',
      driverImage: 'https://i.pravatar.cc/150?img=3',
      rating: 4,
      ranking: 3,
      from: 'Chicago',
      to: 'Detroit',
      departureTime: '2023-07-22 11:00 AM',
      seatsBooked: 2,
      farePerSeat: 45,
      dispatchTime: '2023-07-22 10:45 AM',
      status: 'Canceled',
      cancelReason: 'Weather conditions',
    },
    {
      id: 4,
      driverName: 'John Doe',
      driverImage: 'https://i.pravatar.cc/150?img=1',
      rating: 4.5,
      ranking: 2,
      from: 'New York City',
      to: 'Boston',
      departureTime: '2023-07-20 09:00 AM',
      seatsBooked: 3,
      farePerSeat: 50,
      dispatchTime: '2023-07-20 08:45 AM',
      status: 'Completed',
    },
    {
      id: 5,
      driverName: 'John Doe',
      driverImage: 'https://i.pravatar.cc/150?img=1',
      rating: 4.5,
      ranking: 2,
      from: 'New York City',
      to: 'Boston',
      departureTime: '2023-07-20 09:00 AM',
      seatsBooked: 3,
      farePerSeat: 50,
      dispatchTime: '2023-07-20 08:45 AM',
      status: 'Completed',
    },
    {
      id: 6,
      driverName: 'John Doe',
      driverImage: 'https://i.pravatar.cc/150?img=1',
      rating: 4.5,
      ranking: 2,
      from: 'New York City',
      to: 'Boston',
      departureTime: '2023-07-20 09:00 AM',
      seatsBooked: 3,
      farePerSeat: 50,
      dispatchTime: '2023-07-20 08:45 AM',
      status: 'Completed',
    },
    // Add more trip data as needed
  ]);

  const TripCard = ({ trip }) => (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${trip.status === 'Canceled' ? 'border-l-4 border-red-500' : ''}`}
    >
      <div className='p-6'>
        <div className='flex items-center mb-4'>
          <img
            className='h-16 w-16 rounded-full mr-4 border-2 border-primary'
            src={trip.driverImage}
            alt={trip.driverName}
          />
          <div>
            <h2 className='text-xl font-semibold text-gray-800'>{trip.driverName}</h2>
            <div className='flex items-center'>
              <div className='flex mr-2'>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(trip.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                ))}
              </div>
              <span className='text-gray-600'>({trip.rating})</span>
            </div>
            <span className='text-sm font-medium text-blue-600'>Rank #{trip.ranking}</span>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div>
            <p className='text-sm font-medium text-gray-500'>
              <FaMapMarkerAlt className='inline mr-1 text-green-500' /> From
            </p>
            <p className='text-gray-800'>{trip.from}</p>
          </div>
          <div>
            <p className='text-sm font-medium text-gray-500'>
              <FaMapMarkerAlt className='inline mr-1 text-red-500' /> To
            </p>
            <p className='text-gray-800'>{trip.to}</p>
          </div>
          <div>
            <p className='text-sm font-medium text-gray-500'>
              <FaClock className='inline mr-1' /> Departure
            </p>
            <p className='text-gray-800'>{trip.departureTime}</p>
          </div>
          <div>
            <p className='text-sm font-medium text-gray-500'>
              <FaUsers className='inline mr-1' /> Seats Booked
            </p>
            <p className='text-gray-800'>{trip.seatsBooked}</p>
          </div>
        </div>
        <div className='flex justify-between items-center mb-4'>
          <div>
            <p className='text-sm font-medium text-gray-500'>
              <FaDollarSign className='inline mr-1' /> Total Earnings
            </p>
            <p className='text-xl font-bold text-green-600'>${trip.seatsBooked * trip.farePerSeat}</p>
          </div>
          <div className='text-right'>
            <p className='text-sm font-medium text-gray-500'>
              <FaCarSide className='inline mr-1' /> Dispatch Time
            </p>
            <p className='text-gray-800'>{trip.dispatchTime}</p>
          </div>
        </div>
        {trip.status === 'Canceled' && (
          <div className='mt-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded' role='alert'>
            <p className='font-bold'>Canceled</p>
            <p>{trip.cancelReason}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className='flex h-screen bg-green-50'>
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <AdminNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-green-50'>
          <div className='bg-green-50 min-h-screen p-8'>
            <h1 className='text-3xl font-bold mb-8 text-gray-800'>Recent Trips Dashboard</h1>

            <div className='mb-12'>
              <h2 className='text-2xl font-semibold mb-6 text-gray-800'>Active Trips</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {trips
                  .filter(trip => trip.status !== 'Canceled')
                  .map(trip => (
                    <TripCard key={trip.id} trip={trip} />
                  ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default RecentTrips;
