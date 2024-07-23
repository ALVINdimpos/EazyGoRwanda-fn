import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCar,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaSuitcase,
  FaDollarSign,
  FaUserFriends,
  FaEdit,
  FaCheckCircle,
  FaClock,
  FaRoute,
  FaExclamationTriangle,
} from 'react-icons/fa';
import { TbMap2 } from 'react-icons/tb';
import Navbar from './Navbar';
import Footer from '../../containers/Footer';
import SharedData from './SharedData';
import { Link } from 'react-router-dom';
import { MdCancel } from 'react-icons/md';

const MyRides = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Simulated API call to fetch notifications
    const fetchNotifications = () => {
      setNotifications(SharedData);
      setUnreadCount(SharedData.filter(n => !n.read).length);
    };
    fetchNotifications();
  }, []);

  useEffect(() => {
    // Simulated API call to fetch trips
    const fetchTrips = async () => {
      // Replace with actual API call
      const dummyTrips = [
        {
          id: 1,
          status: 'Accepted',
          departure: '2023-07-15T10:00:00',
          pickup: 'New York City',
          destination: 'Boston',
          luggageSize: 'Medium',
          cost: 50,
          availableSeats: 3,
          passengers: 1,
          distance: '215 miles',
          duration: '4 hours',
          map: '/Map',
          image: 'https://i.pinimg.com/564x/49/3f/a0/493fa0f13970ab3ef29375669f670451.jpg',
        },
        {
          id: 2,
          status: 'Pending',
          departure: '2023-07-18T14:30:00',
          pickup: 'Los Angeles',
          destination: 'San Francisco',
          luggageSize: 'Large',
          cost: 75,
          availableSeats: 2,
          passengers: 2,
          distance: '383 miles',
          duration: '6 hours',
          map: '/Map',
          image: 'https://i.pinimg.com/564x/18/ec/e3/18ece3fe0e88ea9a58d71feacf273ca6.jpg',
        },
        {
          id: 3,
          status: 'Accepted',
          departure: '2023-07-18T14:30:00',
          pickup: 'Los Angeles',
          destination: 'San Francisco',
          luggageSize: 'Large',
          cost: 75,
          availableSeats: 2,
          passengers: 2,
          distance: '383 miles',
          duration: '6 hours',
          map: '/Map',
          image: 'https://i.pinimg.com/564x/ca/df/9f/cadf9f1c6923c698c3c2a907f9e3b8a5.jpg',
        },
      ];
      setTrips(dummyTrips);
    };
    fetchTrips();
  }, []);

  const handleEditTrip = trip => {
    if (trip.status.toLowerCase() === 'pending') {
      setSelectedTrip(trip);
      setIsEditing(true);
    }
  };

  const handleSaveTrip = updatedTrip => {
    setTrips(trips.map(trip => (trip.id === updatedTrip.id ? updatedTrip : trip)));
    setIsEditing(false);
    setSelectedTrip(null);
  };

  const TripCard = ({ trip }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className='bg-white rounded-lg shadow-md overflow-hidden'
    >
      <div className='p-6 relative'>
        <div className='absolute top-0 right-0 mt-4 mr-4'>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              trip.status.toLowerCase() === 'accepted' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
            }`}
          >
            {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
          </span>
        </div>
        <div className='flex items-center mb-4'>
          <div className='w-16 h-16 rounded-full flex items-center justify-center mr-4'>
            <img src={trip.image} alt='' className='w-full h-full object-cover rounded-full' />
          </div>
          <div>
            <h3 className='text-xl font-semibold'>
              {trip.pickup} to {trip.destination}
            </h3>
            <p className='text-gray-600'>
              {trip.distance} • {trip.duration}
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div className='flex items-center'>
            <FaCalendarAlt className='mr-2 text-primary' />
            <div>
              <p className='text-sm text-gray-600'>Departure</p>
              <p className='font-semibold'>{new Date(trip.departure).toLocaleString()}</p>
            </div>
          </div>
          <div className='flex items-center'>
            <FaSuitcase className='mr-2 text-primary' />
            <div>
              <p className='text-sm text-gray-600'>Luggage</p>
              <p className='font-semibold'>{trip.luggageSize}</p>
            </div>
          </div>
          <div className='flex items-center'>
            <FaDollarSign className='mr-2 text-primary' />
            <div>
              <p className='text-sm text-gray-600'>Cost</p>
              <p className='font-semibold'>
                ${trip.cost}-${trip.cost}
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <FaUserFriends className='mr-2 text-primary' />
            <div>
              <p className='text-sm text-gray-600'>Seats</p>
              <p className='font-semibold'>{trip.passengers}</p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between bg-gray-100 p-3 rounded-lg'>
          <div className='flex items-center'>
            <TbMap2 className='mr-2 text-2xl text-primary' />
            <Link to={'/Map'}>
              {' '}
              <span className='text-lg font-semibold hover:text-gray-600'>Map</span>{' '}
            </Link>
          </div>
          <div className='flex items-center'>
            <MdCancel className='mr-1 text-primary text-xl' />
            <button
              onClick={() => navigate('/Cancel-a-trip')}
              className='text-gray-900 font-Semibold   hover:text-gray-600 font-semibold text-lg'
            >
              Cancel Trip
            </button>
          </div>
        </div>
        {trip.status.toLowerCase() === 'pending' && (
          <button
            onClick={() => handleEditTrip(trip)}
            className='mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition duration-300 flex items-center justify-center'
          >
            <FaEdit className='mr-2' />
            Edit Trip
          </button>
        )}
        {trip.status.toLowerCase() === 'accepted' && (
          <div className='mt-4 text-center text-sm text-gray-600'>
            <FaExclamationTriangle className='inline-block mr-1 text-yellow-500' />
            This trip is accepted and cannot be edited
          </div>
        )}
      </div>
    </motion.div>
  );

  const EditTripModal = ({ trip, onSave, onClose }) => {
    const [editedTrip, setEditedTrip] = useState(trip);
    const now = new Date().toISOString().slice(0, -8); // Current date and time in YYYY-MM-DDTHH:MM format

    const handleChange = e => {
      const { name, value } = e.target;
      setEditedTrip(prev => ({ ...prev, [name]: value }));
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className='bg-white p-6 rounded-lg w-full max-w-md'
        >
          <h2 className='text-2xl font-semibold mb-4'>Edit Trip</h2>
          <form
            onSubmit={e => {
              e.preventDefault();
              onSave(editedTrip);
            }}
          >
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>Departure</label>
              <input
                type='datetime-local'
                name='departure'
                value={editedTrip.departure}
                onChange={handleChange}
                min={now}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>Pickup</label>
              <input
                type='text'
                name='pickup'
                value={editedTrip.pickup}
                onChange={handleChange}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>Destination</label>
              <input
                type='text'
                name='destination'
                value={editedTrip.destination}
                onChange={handleChange}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>Luggage Size</label>
              <select
                name='luggageSize'
                value={editedTrip.luggageSize}
                onChange={handleChange}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50'
              >
                <option value='Small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
              </select>
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>Cost</label>
              <input
                type='number'
                name='cost'
                value={editedTrip.cost}
                onChange={handleChange}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>Available Seats</label>
              <input
                type='number'
                name='availableSeats'
                value={editedTrip.availableSeats}
                onChange={handleChange}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50'
              />
            </div>
            <div className='flex justify-end space-x-2 mt-6'>
              <button
                type='button'
                onClick={onClose}
                className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50'
              >
                Save Changes
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className='min-h-screen bg-green-50'>
      <Navbar unreadCount={unreadCount} />
      <main className='container mx-auto px-4 py-8 mt-16'>
        <h1 className='text-3xl font-bold mb-6'>My Trips</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {trips.map(trip => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
        <AnimatePresence>
          {isEditing && selectedTrip && (
            <EditTripModal
              trip={selectedTrip}
              onSave={handleSaveTrip}
              onClose={() => {
                setIsEditing(false);
                setSelectedTrip(null);
              }}
            />
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default MyRides;
