import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaCar, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import Footer from '../../containers/Footer';
import SharedData from './SharedData';
import { PiSeatFill } from 'react-icons/pi';

const Profile = () => {
  const [recentRequests, setRecentRequests] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const [user, setUser] = useState({
    username: 'JohnDoe123',
    address: '123 Main St, Anytown, USA 12345',
    email: 'johndoe@example.com',
    avatar: 'https://i.pravatar.cc/300',
    joinDate: 'January 15, 2023',
    tripsBooked: 25,
    averageSeats: 4,
    preferences: ['Non-smoking', 'Pet-friendly', 'Music lover'],
    phone: '123-456-7890',
    password: 'password123',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    setRecentRequests([
      { id: 1, from: 'Kigali', to: 'Musanze', date: '2023-06-30', time: '12:00:00' },
      { id: 2, from: 'Butare', to: 'Gisenyi', date: '2023-07-02', time: '12:00:00' },
      { id: 3, from: 'Rwamagana', to: 'Kigali', date: '2023-07-05', time: '12:00:00' },
      { id: 4, from: 'Huye', to: 'Nyanza', date: '2023-07-07', time: '12:00:00' },
      { id: 5, from: 'Rubavu', to: 'Musanze', date: '2023-07-10', time: '12:00:00' },
      { id: 6, from: 'Nyagatare', to: 'Kigali', date: '2023-07-12', time: '12:00:00' },
      { id: 6, from: 'Gitarama', to: 'Rubavu', date: '2024-08-19', time: '12:00:00' },
    ]);
  }, []);

  useEffect(() => {
    const fetchNotifications = () => {
      setNotifications(SharedData);
      setUnreadCount(SharedData.filter(n => !n.read).length);
    };
    fetchNotifications();
  }, []);

  const InfoItem = ({ icon: Icon, label, value, name, editable }) => (
    <div className='flex items-center mb-4'>
      <Icon className='w-6 h-6 mr-3 text-green-600' />
      <div>
        <p className='text-sm text-gray-600'>{label}</p>
        {editable ? (
          <input type='text' name={name} value={value} onChange={handleInputChange} className='font-semibold' />
        ) : (
          <p className='font-semibold'>{value}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className='min-h-screen bg-green-50'>
      <Navbar unreadCount={unreadCount} />
      <div className='container mx-auto px-4 py-8 mt-16'>
        <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
          <div
            className='h-40 bg-cover bg-center'
            style={{
              backgroundImage: "url('https://i.pinimg.com/564x/07/0a/66/070a66284fb1272a48699487ad809966.jpg')",
            }}
          ></div>
          <div className='px-6 py-4 relative'>
            <div className='absolute -top-16 left-6'>
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.username}
                  className='w-32 h-32 rounded-full border-4 border-white shadow-lg'
                />
              ) : (
                <div className='w-32 h-32 rounded-full border-4 border-white shadow-lg bg-gray-300 flex items-center justify-center'>
                  <FaUser className='w-16 h-16 text-gray-500' />
                </div>
              )}
            </div>
            <div className='mt-16'>
              <h1 className='text-3xl font-bold mb-2'>
                <input
                  type='text'
                  name='username'
                  value={user.username}
                  onChange={handleInputChange}
                  className='bg-transparent border-b-2 border-gray-300'
                />
              </h1>
              <p className='text-gray-600 mb-4'>Passenger</p>
            </div>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h2 className='text-xl font-semibold mb-4'>Personal Information</h2>
                <InfoItem icon={FaEnvelope} label='Email' value={user.email} name='email' editable={true} />
                <InfoItem icon={FaMapMarkerAlt} label='Address' value={user.address} name='address' editable={true} />
                <InfoItem
                  icon={FaCalendarAlt}
                  label='Member Since'
                  value={user.joinDate}
                  name='joinDate'
                  editable={false}
                />
                <InfoItem icon={FaEnvelope} label='Phone' value={user.phone} name='phone' editable={false} />
                <InfoItem icon={FaEnvelope} label='Password' value={user.password} name='password' editable={true} />
              </div>
              <div>
                <h2 className='text-xl font-semibold mb-4'>Trip Statistics</h2>
                <InfoItem
                  icon={FaCar}
                  label='Trips Booked'
                  value={user.tripsBooked}
                  name='tripsBooked'
                  editable={true}
                />
                <InfoItem
                  icon={FaCar}
                  label='Average Seats'
                  value={`${user.averageSeats}`}
                  name='averageSeats'
                  editable={true}
                />
              </div>
            </div>
            <div className='mt-8'>
              <h2 className='text-xl font-semibold mb-4'>Preferences</h2>
              <div className='flex flex-wrap'>
                {user.preferences.map((pref, index) => (
                  <input
                    key={index}
                    type='text'
                    name={`preference-${index}`}
                    value={pref}
                    onChange={e => {
                      const newPreferences = [...user.preferences];
                      newPreferences[index] = e.target.value;
                      setUser({ ...user, preferences: newPreferences });
                    }}
                    className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-2 mb-2'
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8 bg-white shadow-lg rounded-lg overflow-hidden'>
          <div className='px-6 py-4'>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h3 className='text-xl font-semibold mb-4'>Recent Trip Requests</h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {recentRequests.slice(0, 3).map(request => (
                  <motion.div
                    key={request.id}
                    whileHover={{ scale: 1.05 }}
                    className='p-4 bg-green-50 rounded-lg shadow-lg cursor-pointer transition duration-300 hover:bg-green-100'
                    onClick={() => console.log(`Clicked on trip request ${request.id}`)}
                  >
                    <div className='font-semibold flex items-center justify-between'>
                      <span>{request.from}</span>
                      <FaArrowRight className='text-green-600' />
                      <span>{request.to}</span>
                    </div>
                    <div className='text-sm text-gray-600 mt-2'>
                      <div className='font-semibold flex items-center justify-between'>
                        <span>{request.date}</span>
                        <span>{request.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.footer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className=''
      >
        <Footer />
      </motion.footer>
    </div>
  );
};

export default Profile;
