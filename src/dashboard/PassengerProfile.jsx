import React, { useState, useEffect } from 'react';
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCar,
  FaCalendarAlt,
  FaArrowRight,
  FaCaravan,
  FaPhone,
  FaLock,
  FaEdit,
  FaCamera,
} from 'react-icons/fa';
import { PiSeatFill } from 'react-icons/pi';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import Footer from '../../containers/Footer';
import SharedData from './SharedData';
import { useNavigate } from 'react-router-dom';

// Custom Modal component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white rounded-lg p-6 w-96'>
        <h2 className='text-xl font-bold mb-4'>{title}</h2>
        {children}
        <button onClick={onClose} className='mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
          Close
        </button>
      </div>
    </div>
  );
};

const PassengerProfile = () => {
  const navigate = useNavigate();
  const [recentRequests, setRecentRequests] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [editField, setEditField] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [user, setUser] = useState({
    username: 'JohnDoe123',
    address: '123 Main St, Anytown, USA 12345',
    email: 'johndoe@example.com',
    avatar: 'https://i.pravatar.cc/300',
    joinDate: 'January 15, 2023',
    tripsBooked: 25,
    averageSeats: 4,
    preferences: ['Non-smoking', 'Pet-friendly', 'Music lover'],
    phoneNumber: '+1234567890',
    password: '********',
  });

  useEffect(() => {
    // Simulated recent requests data
    setRecentRequests([
      { id: 1, from: 'Kigali', to: 'Musanze', date: '2023-06-30', time: '12:00:00' },
      { id: 2, from: 'Butare', to: 'Gisenyi', date: '2023-07-02', time: '12:00:00' },
      { id: 3, from: 'Rwamagana', to: 'Kigali', date: '2023-07-05', time: '12:00:00' },
      { id: 4, from: 'Huye', to: 'Nyanza', date: '2023-07-07', time: '12:00:00' },
      { id: 5, from: 'Rubavu', to: 'Musanze', date: '2023-07-10', time: '12:00:00' },
      { id: 6, from: 'Nyagatare', to: 'Kigali', date: '2023-07-12', time: '12:00:00' },
    ]);
  }, []);

  useEffect(() => {
    // Simulated API call to fetch notifications
    const fetchNotifications = () => {
      setNotifications(SharedData);
      setUnreadCount(SharedData.filter(n => !n.read).length);
    };
    fetchNotifications();
  }, []);

  const handleEdit = (field, value) => {
    setEditField(field);
    setEditValue(value);
    if (field === 'password') {
      setNewPassword('');
      setConfirmPassword('');
      setPasswordError('');
    }
  };

  const handleSave = () => {
    if (editField === 'email') {
      // Redirect to email confirmation page
      navigate('/confirm-email', { state: { newEmail: editValue } });
    } else if (editField === 'password') {
      if (newPassword !== confirmPassword) {
        setPasswordError("Passwords don't match");
        return;
      }
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(newPassword)) {
        setPasswordError(
          'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character'
        );
        return;
      }
      setUser(prevUser => ({ ...prevUser, [editField]: '********' }));
    } else if (editField === 'preferences') {
      setUser(prevUser => ({ ...prevUser, [editField]: editValue.split(',').map(pref => pref.trim()) }));
    } else if (editField === 'avatar') {
      setUser(prevUser => ({ ...prevUser, avatar: editValue }));
    } else {
      setUser(prevUser => ({ ...prevUser, [editField]: editValue }));
    }
    setEditField(null);
  };

  const handleImageUpload = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditValue(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const InfoItem = ({ icon: Icon, label, value, name }) => (
    <div className='flex items-center mb-4'>
      <Icon className='w-6 h-6 mr-3 text-green-600' />
      <div className='flex-grow'>
        <p className='text-sm text-gray-600'>{label}</p>
        <p className='font-semibold'>{value}</p>
      </div>
      <FaEdit className='w-5 h-5 text-green-600 cursor-pointer' onClick={() => handleEdit(name, value)} />
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
              <div className='relative'>
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
                <FaEdit
                  className='absolute bottom-0 right-0 w-8 h-8 text-green-600 cursor-pointer bg-white rounded-full p-1'
                  onClick={() => handleEdit('avatar', user.avatar)}
                />
              </div>
            </div>
            <div className='mt-16'>
              <h1 className='text-3xl font-bold mb-2 flex items-center'>
                {user.username}
                <FaEdit
                  className='w-5 h-5 text-green-600 cursor-pointer ml-2'
                  onClick={() => handleEdit('username', user.username)}
                />
              </h1>
              <p className='text-gray-600 mb-4'>Passenger</p>
            </div>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h2 className='text-xl font-semibold mb-4'>Personal Information</h2>
                <InfoItem icon={FaEnvelope} label='Email' value={user.email} name='email' />
                <InfoItem icon={FaMapMarkerAlt} label='Address' value={user.address} name='address' />
                <InfoItem icon={FaCalendarAlt} label='Member Since' value={user.joinDate} name='joinDate' />
                <InfoItem icon={FaPhone} label='Phone Number' value={user.phoneNumber} name='phoneNumber' />
                <InfoItem icon={FaLock} label='Password' value='********' name='password' />
              </div>
              <div>
                <h2 className='text-xl font-semibold mb-4'>Trip Statistics</h2>
                <InfoItem icon={FaCar} label='Trips Booked' value={user.tripsBooked} name='tripsBooked' />
                <InfoItem icon={PiSeatFill} label='Average Seats' value={user.averageSeats} name='averageSeats' />
              </div>
            </div>
            <div className='mt-8'>
              <h2 className='text-xl font-semibold mb-4 flex items-center'>
                Preferences
                <FaEdit
                  className='w-5 h-5 text-green-600 cursor-pointer ml-2'
                  onClick={() => handleEdit('preferences', user.preferences.join(', '))}
                />
              </h2>
              <div className='flex flex-wrap'>
                {user.preferences.map((pref, index) => (
                  <span key={index} className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-2 mb-2'>
                    {pref}
                  </span>
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

      <Modal isOpen={editField !== null} onClose={() => setEditField(null)} title={`Edit ${editField}`}>
        {editField === 'password' ? (
          <>
            <input
              type='password'
              placeholder='New Password'
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className='w-full p-2 mb-2 border rounded'
            />
            <input
              type='password'
              placeholder='Confirm New Password'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className='w-full p-2 mb-2 border rounded'
            />
            {passwordError && <p className='text-red-500'>{passwordError}</p>}
          </>
        ) : editField === 'preferences' ? (
          <input
            type='text'
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            placeholder='Comma-separated preferences'
            className='w-full p-2 mb-2 border rounded'
          />
        ) : editField === 'avatar' ? (
          <div>
            <input
              type='file'
              accept='image/*'
              onChange={handleImageUpload}
              className='w-full p-2 mb-2 border rounded'
            />
            {editValue && <img src={editValue} alt='Preview' className='w-32 h-32 rounded-full mx-auto mb-2' />}
          </div>
        ) : (
          <input
            type='text'
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            className='w-full p-2 mb-2 border rounded'
          />
        )}
        <button onClick={handleSave} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
          Save
        </button>
      </Modal>
    </div>
  );
};

export default PassengerProfile;
