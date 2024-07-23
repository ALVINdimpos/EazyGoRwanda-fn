import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaIdCard,
  FaCar,
  FaStar,
  FaEdit,
  FaCalendarAlt,
  FaTrophy,
  FaTachometerAlt,
  FaGasPump,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Navbar from './AdminNavbar';
import Footer from '../containers/Footer';
import SharedData from '../pages/Passenger/SharedData';

// Custom Modal component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

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
        <h2 className='text-xl font-semibold mb-4'>{title}</h2>
        {children}
        <div className='mt-4 flex justify-end space-x-2'>
          <button onClick={onClose} className='px-4 py-2 text-gray-600 hover:text-gray-800'>
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const DriverProfile = () => {
  const [driver, setDriver] = useState(null);
  const [editField, setEditField] = useState(null);
  const [editValue, setEditValue] = useState('');
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
    // Simulated API call to fetch driver data
    const fetchDriverData = async () => {
      // Replace this with actual API call
      const dummyData = {
        id: '1234',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe123',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        address: '123 Main St, Anytown, USA',
        license: 'DL12345678',
        car: {
          make: 'Toyota',
          model: 'Camry',
          year: '2020',
          color: 'Silver',
          licensePlate: 'ABC123',
          seats: '7',
          mileage: '35000',
          image: 'https://i.pinimg.com/564x/9d/d6/ac/9dd6ac7b17a13fb00874dd403a52cc8f.jpg',
        },
        image: 'https://i.pinimg.com/564x/e8/e6/41/e8e64141f4c0ae39c32f9701ccea9a2e.jpg',
        bannerImage: 'https://i.pinimg.com/564x/92/b2/f2/92b2f2c4dd8157f78283dcf3a825f611.jpg',
        status: 'Active',
        scheduledTrips: 5,
        postedTrips: 10,
        joinDate: '2022-01-01',
        reviews: [
          { id: 1, rating: 5, comment: 'Great driver!' },
          { id: 2, rating: 4, comment: 'Very punctual' },
        ],
        ranking: 42,
      };
      setDriver(dummyData);
    };
    fetchDriverData();
  }, []);

  const handleEdit = (field, value) => {
    setEditField(field);
    setEditValue(value);
  };

  const handleSave = () => {
    setDriver(prevDriver => {
      if (editField === 'name') {
        const [firstName, lastName] = editValue.split(' ');
        return { ...prevDriver, firstName, lastName };
      }
      if (editField === 'car') {
        return { ...prevDriver, car: { ...prevDriver.car, ...editValue } };
      }
      if (editField === 'reviews') {
        return { ...prevDriver, reviews: editValue };
      }
      return { ...prevDriver, [editField]: editValue };
    });
    setEditField(null);
  };

  const handleImageUpload = (event, field) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (field === 'profileImage') {
          setDriver(prevDriver => ({ ...prevDriver, image: reader.result }));
        } else if (field === 'carImage') {
          setDriver(prevDriver => ({ ...prevDriver, car: { ...prevDriver.car, image: reader.result } }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (!driver) return <div>Loading...</div>;

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar unreadCount={unreadCount} />
      <main className='container mx-auto px-4 py-8 mt-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='bg-white shadow-lg rounded-lg overflow-hidden'
        >
          <div className='h-48 bg-cover bg-center' style={{ backgroundImage: `url(${driver.bannerImage})` }}>
            <div className='h-full bg-black bg-opacity-50 flex items-end justify-center'>
              <div className='relative'>
                <img
                  src={driver.image}
                  alt={driver.firstName}
                  className='w-32 h-32 rounded-full border-4 border-white -mb-16'
                />
                <label
                  htmlFor='profile-image-upload'
                  className='absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer'
                >
                  <FaEdit className='text-primary' />
                </label>
                <input
                  id='profile-image-upload'
                  type='file'
                  accept='image/*'
                  className='hidden'
                  onChange={e => handleImageUpload(e, 'profileImage')}
                />
              </div>
            </div>
          </div>
          <div className='pt-16 pb-6 px-6 text-center'>
            <h1 className='text-3xl font-bold'>{`${driver.firstName} ${driver.lastName}`}</h1>
            <FaEdit
              className='inline-block ml-2 text-primary cursor-pointer'
              onClick={() => handleEdit('name', `${driver.firstName} ${driver.lastName}`)}
            />
            <p className='text-gray-600'>@{driver.username}</p>
            <p
              className={`mt-2 inline-block px-2 py-1 rounded ${
                driver.status === 'Active'
                  ? 'bg-green-200 text-green-800'
                  : driver.status === 'Banned'
                    ? 'bg-red-200 text-red-800'
                    : 'bg-yellow-200 text-yellow-800'
              }`}
            >
              {driver.status}
            </p>
          </div>

          <div className='px-6 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <h2 className='text-xl font-semibold mb-4'>Personal Information</h2>
                <InfoItem
                  icon={FaEnvelope}
                  label='Email'
                  value={driver.email}
                  onEdit={() => handleEdit('email', driver.email)}
                />
                <InfoItem
                  icon={FaPhone}
                  label='Phone'
                  value={driver.phone}
                  onEdit={() => handleEdit('phone', driver.phone)}
                />
                <InfoItem
                  icon={FaMapMarkerAlt}
                  label='Address'
                  value={driver.address}
                  onEdit={() => handleEdit('address', driver.address)}
                />
                <InfoItem icon={FaLock} label='Password' value='********' onEdit={() => handleEdit('password', '')} />
                <InfoItem
                  icon={FaIdCard}
                  label="Driver's License"
                  value={driver.license}
                  onEdit={() => handleEdit('license', driver.license)}
                />
              </div>

              <div>
                <h2 className='text-xl font-semibold mb-4'>Vehicle Information</h2>
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-lg font-semibold'>{`${driver.car.year} ${driver.car.make} ${driver.car.model}`}</h3>
                    <button
                      onClick={() => handleEdit('car', driver.car)}
                      className='text-primary hover:text-primary-dark'
                    >
                      <FaEdit />
                    </button>
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <p className='text-gray-600'>Color</p>
                      <p className='font-medium'>{driver.car.color}</p>
                    </div>
                    <div>
                      <p className='text-gray-600'>Car Plate No</p>
                      <p className='font-medium'>{driver.car.licensePlate}</p>
                    </div>
                    <div>
                      <p className='text-gray-600'>Seats</p>
                      <p className='font-medium'>{driver.car.seats}</p>
                    </div>
                    <div>
                      <p className='text-gray-600'>Mileage</p>
                      <p className='font-medium'>{driver.car.mileage} miles</p>
                    </div>
                  </div>
                  <div className='mt-4 relative'>
                    <img src={driver.car.image} alt="Driver's car" className='w-full h-48 object-cover rounded-lg' />
                    <label
                      htmlFor='car-image-upload'
                      className='absolute bottom-2 right-2 bg-white rounded-full p-2 cursor-pointer'
                    >
                      <FaEdit className='text-primary' />
                    </label>
                    <input
                      id='car-image-upload'
                      type='file'
                      accept='image/*'
                      className='hidden'
                      onChange={e => handleImageUpload(e, 'carImage')}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <h2 className='text-xl font-semibold mb-4'>Driver Statistics</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                <StatItem
                  icon={FaCar}
                  label='Completed Trips'
                  value={driver.scheduledTrips}
                  onEdit={() => handleEdit('scheduledTrips', driver.scheduledTrips)}
                />
                <StatItem
                  icon={FaUser}
                  label='Posted Trips'
                  value={driver.postedTrips}
                  onEdit={() => handleEdit('postedTrips', driver.postedTrips)}
                />
                <StatItem
                  icon={FaCalendarAlt}
                  label='Join Date'
                  value={driver.joinDate}
                  onEdit={() => handleEdit('joinDate', driver.joinDate)}
                />
                <StatItem
                  icon={FaTrophy}
                  label='Driver Ranking'
                  value={`#${driver.ranking}`}
                  onEdit={() => handleEdit('ranking', driver.ranking)}
                />
              </div>
            </div>

            <div className='mt-8'>
              <h2 className='text-xl font-semibold mb-4'>
                Reviews
                <FaEdit
                  className='inline-block ml-2 text-primary cursor-pointer'
                  onClick={() => handleEdit('reviews', driver.reviews)}
                />
              </h2>
              <div className='flex gap-4'>
                {driver.reviews.map(review => (
                  <div key={review.id} className='bg-gray-50 p-4 rounded-lg'>
                    <div className='flex items-center mb-2'>
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-green-50'}`}
                        />
                      ))}
                    </div>
                    <p className='text-gray-700'>{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />

      <Modal isOpen={editField !== null} onClose={() => setEditField(null)} title={`Edit ${editField}`}>
        {editField === 'car' ? (
          <div className='space-y-4'>
            <input
              type='text'
              value={editValue.make}
              onChange={e => setEditValue({ ...editValue, make: e.target.value })}
              className='w-full p-2 border rounded'
              placeholder='Make'
            />
            <input
              type='text'
              value={editValue.model}
              onChange={e => setEditValue({ ...editValue, model: e.target.value })}
              className='w-full p-2 border rounded'
              placeholder='Model'
            />
            <input
              type='text'
              value={editValue.year}
              onChange={e => setEditValue({ ...editValue, year: e.target.value })}
              className='w-full p-2 border rounded'
              placeholder='Year'
            />
            <input
              type='text'
              value={editValue.color}
              onChange={e => setEditValue({ ...editValue, color: e.target.value })}
              className='w-full p-2 border rounded'
              placeholder='Color'
            />
            <input
              type='text'
              value={editValue.licensePlate}
              onChange={e => setEditValue({ ...editValue, licensePlate: e.target.value })}
              className='w-full p-2 border rounded'
              placeholder='License Plate'
            />
            <input
              type='text'
              value={editValue.seats}
              onChange={e => setEditValue({ ...editValue, seats: e.target.value })}
              className='w-full p-2 border rounded'
              placeholder='Seats'
            />
            <input
              type='text'
              value={editValue.mileage}
              onChange={e => setEditValue({ ...editValue, mileage: e.target.value })}
              className='w-full p-2 border rounded'
              placeholder='Mileage'
            />
          </div>
        ) : editField === 'reviews' ? (
          <div className='space-y-4'>
            {editValue.map((review, index) => (
              <div key={review.id} className='space-y-2'>
                <input
                  type='number'
                  min='1'
                  max='5'
                  value={review.rating}
                  onChange={e => {
                    const newReviews = [...editValue];
                    newReviews[index].rating = parseInt(e.target.value);
                    setEditValue(newReviews);
                  }}
                  className='w-full p-2 border rounded'
                  placeholder='Rating (1-5)'
                />
                <textarea
                  value={review.comment}
                  onChange={e => {
                    const newReviews = [...editValue];
                    newReviews[index].comment = e.target.value;
                    setEditValue(newReviews);
                  }}
                  className='w-full p-2 border rounded'
                  placeholder='Comment'
                />
              </div>
            ))}
          </div>
        ) : (
          <input
            type={editField === 'password' ? 'password' : 'text'}
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            className='w-full p-2 border rounded'
          />
        )}
        <button onClick={handleSave} className='mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark'>
          Save
        </button>
      </Modal>
    </div>
  );
};

const InfoItem = ({ icon: Icon, label, value, onEdit }) => (
  <div className='flex items-center mb-2'>
    <Icon className='w-5 h-5 text-gray-500 mr-2' />
    <span className='text-gray-700 mr-2'>{label}:</span>
    <span className='text-gray-900 font-medium'>{value}</span>
    <button onClick={onEdit} className='ml-2 text-primary hover:text-primary-dark'>
      <FaEdit />
    </button>
  </div>
);

const StatItem = ({ icon: Icon, label, value, onEdit }) => (
  <div className='bg-gray-50 p-4 rounded-lg'>
    <div className='flex items-center justify-between'>
      <div className='flex items-center'>
        <Icon className='w-6 h-6 text-primary mr-2' />
        <span className='text-gray-700'>{label}</span>
      </div>
      {onEdit && (
        <button onClick={onEdit} className='text-primary hover:text-primary-dark'>
          <FaEdit />
        </button>
      )}
    </div>
    <p className='text-2xl font-bold text-gray-900 mt-2'>{value}</p>
  </div>
);

export default DriverProfile;
