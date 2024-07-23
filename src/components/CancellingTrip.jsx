import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SharedData from '../pages/Passenger/SharedData';
import { FaInfoCircle, FaMoneyBillWave, FaStopwatch, FaExchangeAlt, FaUserFriends } from 'react-icons/fa';
import Navbar from '../pages/Passenger/Navbar'; // Adjust the import path as needed
import Footer from '../containers/Footer'; // Adjust the import path as needed

const CancellingTrip = () => {
  const navigate = useNavigate();
  const [bookedTrips, setBookedTrips] = useState([]);
  const [cancellingTripId, setCancellingTripId] = useState(null);
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

  // Fetch booked trips
  useEffect(() => {
    // Simulated API call
    const fetchBookedTrips = async () => {
      // ... fetch logic here
    };
    fetchBookedTrips();
  }, []);

  const handleCancelTrip = tripId => {
    // ... cancellation logic here
  };

  const cancelSteps = [
    {
      icon: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/login-4923909-4134530.png?f=webp&w=256',
      text: 'Log in to your account',
    },
    {
      icon: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/find-location-5739525-4807763.png?f=webp&w=256',
      text: 'Find your trip',
    },
    {
      icon: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/cancel-3560832-2989270.png?f=webp&w=256',
      text: "Click ' Cancel Trip '",
    },
    { icon: 'https://img.icons8.com/color/96/000000/refund.png', text: 'Review cancellation fees' },
    { icon: 'https://img.icons8.com/color/96/000000/checked--v1.png', text: 'Confirm cancellation' },
  ];

  return (
    <>
      <section className=''>
        <Navbar unreadCount={unreadCount} />
        <div className='bg-gradient-to-tb from-green-50 via-green-100 to-green-50 bg-opacity-20 min-h-screen py-12 px-4 sm:px-6  mt-12 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-4xl mx-auto'
          >
            <h1 className='text-4xl font-bold text-center text-gray-900 mb-12'>Cancelling Your Trip</h1>

            <div className='bg-white shadow-xl rounded-lg overflow-hidden mb-8'>
              <div className='p-6'>
                <h2 className='text-2xl font-semibold mb-4 flex items-center'>
                  <FaInfoCircle className='text-primary mr-2' />
                  Terms and Conditions
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-900'>
                  <li>Cancellations made 24 hours before the trip are eligible for a full refund.</li>
                  <li>Cancellations within 24 hours of the trip start time may be subject to fees.</li>
                  <li>No-shows will be charged the full trip amount.</li>
                  <li>Refunds will be processed within 5-7 business days.</li>
                </ul>
              </div>
            </div>

            <div className='bg-white shadow-xl rounded-lg overflow-hidden mb-8'>
              <div className='p-6'>
                <h2 className='text-2xl font-semibold mb-4 flex items-center'>
                  <FaMoneyBillWave className='text-primary mr-2' />
                  Cancellation Fees
                </h2>
                <div className='overflow-x-auto'>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th className='px-6 py-3 text-left text-xs font-medium text-primary text-opacity-20 uppercase tracking-wider'>
                          Time before trip
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-primary text-opacity-20 uppercase tracking-wider'>
                          Fee
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                      <tr>
                        <td className='px-6 py-4 whitespace-nowrap'>More than 24 hours</td>
                        <td className='px-6 py-4 whitespace-nowrap'>No fee</td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 whitespace-nowrap'>12-24 hours</td>
                        <td className='px-6 py-4 whitespace-nowrap'>25% of trip cost</td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 whitespace-nowrap'>Less than 12 hours</td>
                        <td className='px-6 py-4 whitespace-nowrap'>50% of trip cost</td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 whitespace-nowrap'>No-show</td>
                        <td className='px-6 py-4 whitespace-nowrap'>100% of trip cost</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className='bg-white shadow-xl rounded-lg overflow-hidden mb-8'>
              <div className='p-6'>
                <h2 className='text-2xl font-semibold mb-6 text-center'>How to Cancel a Trip</h2>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4'>
                  {cancelSteps.map((step, index) => (
                    <div key={index} className='flex flex-col  items-center text-center'>
                      <img src={step.icon} alt={step.text} className='w-16 h-16 mb-2' />
                      <p className='text-sm'>{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='bg-white shadow-xl rounded-lg overflow-hidden mb-8'>
              <div className='p-6'>
                <h2 className='text-2xl font-semibold mb-6 text-center'>Alternatives to Cancelling</h2>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                  <div className='flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg'>
                    <FaStopwatch className='text-4xl text-primary mb-2' />
                    <p className='text-sm'>Reschedule your trip</p>
                  </div>
                  <div className='flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg'>
                    <FaExchangeAlt className='text-4xl text-primary mb-2' />
                    <p className='text-sm'>Transfer your booking</p>
                  </div>
                  <div className='flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg'>
                    <FaUserFriends className='text-4xl text-primary mb-2' />
                    <p className='text-sm'>Share your ride</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='text-center'>
              <button
                onClick={() => navigate('/login')}
                className='bg-primary hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50'
              >
                Cancel a Trip
              </button>
            </div>
          </motion.div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default CancellingTrip;
