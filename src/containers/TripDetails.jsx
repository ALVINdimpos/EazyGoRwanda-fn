/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaStar,
  FaCar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaCommentDots,
  FaCheckCircle,
  FaLuggageCart,
  FaRoute,
} from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import { CarpoolSection } from '../components';
import 'leaflet/dist/leaflet.css';

const TripDetails = () => {
  const { tripId } = useParams();
  const [activeTab, setActiveTab] = useState('details');
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  // Dummy data (replace with actual data fetching)
  const tripDetails = {
    id: tripId,
    origin: 'New York',
    destination: 'Los Angeles',
    departureDate: '2024-02-29',
    availableSeats: 3,
    pricePerSeat: 50,
    car: 'Toyota Camry',
    carMake: 'Toyota',
    carModel: 'Camry',
    carYear: 2020,
    carColor: 'Black',
    carImage: 'https://example.com/car-image.jpg',
    stops: ['Chicago', 'Denver'],
    luggageSize: 'Medium',
    tripDescription: 'A comfortable trip from New York to Los Angeles with a few stops along the way.',
    route: [
      { name: 'New York', lat: 40.7128, lng: -74.006 },
      { name: 'Chicago', lat: 41.8781, lng: -87.6298 },
      { name: 'Denver', lat: 39.7392, lng: -104.9903 },
      { name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
    ],
  };

  const driverDetails = {
    id: 123,
    name: 'John Doe',
    rating: 4.8,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    isVerified: true,
    bio: 'Experienced driver with over 5 years of driving experience. Friendly and professional.',
    tripsCompleted: 150,
    contact: 'john.doe@example.com',
  };

  const reviews = [
    {
      id: 1,
      rating: 5,
      comment: 'Great driver, smooth trip.',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      id: 2,
      rating: 4,
      comment: 'Nice car, friendly driver.',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: 3,
      rating: 3,
      comment: 'Average trip, could be better.',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  ];

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    setChatMessages([...chatMessages, { sender: 'Me', message }]);
    setMessage('');
  };

  const TabContent = ({ id, active, children }) => (
    <AnimatePresence mode='wait'>
      {active === id && (
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <div className='container px-4 py-8 mx-auto'>
        <h1 className='mb-8 text-4xl font-bold text-center'>Trip Details</h1>

        <div className='overflow-hidden bg-white rounded-lg shadow-lg'>
          <div className='flex border-b'>
            {['details', 'driver', 'reviews', 'chat'].map(tab => (
              <button
                key={tab}
                className={`flex-1 py-4 px-6 font-semibold ${activeTab === tab ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className='p-6'>
            <TabContent id='details' active={activeTab}>
              <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                <div>
                  <h2 className='mb-4 text-2xl font-semibold'>Trip Information</h2>
                  <div className='space-y-2'>
                    <p>
                      <FaMapMarkerAlt className='inline mr-2 text-primary' />{' '}
                      <span className='font-semibold'>From:</span> {tripDetails.origin}
                    </p>
                    <p>
                      <FaMapMarkerAlt className='inline mr-2 text-primary' /> <span className='font-semibold'>To:</span>{' '}
                      {tripDetails.destination}
                    </p>
                    <p>
                      <FaCalendarAlt className='inline mr-2 text-primary' />{' '}
                      <span className='font-semibold'>Departure:</span> {tripDetails.departureDate}
                    </p>
                    <p>
                      <FaUser className='inline mr-2 text-primary' />{' '}
                      <span className='font-semibold'>Available Seats:</span> {tripDetails.availableSeats}
                    </p>
                    <p>
                      <FaCommentDots className='inline mr-2 text-primary' />{' '}
                      <span className='font-semibold'>Price Per Seat:</span> ${tripDetails.pricePerSeat}
                    </p>
                    <p>
                      <FaLuggageCart className='inline mr-2 text-primary' />{' '}
                      <span className='font-semibold'>Luggage Size:</span> {tripDetails.luggageSize}
                    </p>
                    <p>
                      <FaRoute className='inline mr-2 text-primary' /> <span className='font-semibold'>Stops:</span>{' '}
                      {tripDetails.stops.join(', ')}
                    </p>
                  </div>
                  <div className='mt-4'>
                    <h3 className='mb-2 text-xl font-semibold'>Trip Description</h3>
                    <p>{tripDetails.tripDescription}</p>
                  </div>
                </div>
                <div>
                  <h2 className='mb-4 text-2xl font-semibold'>Vehicle Information</h2>
                  <div className='p-4 mb-4 bg-gray-100 rounded-lg'>
                    <img
                      src={tripDetails.carImage}
                      alt={tripDetails.car}
                      className='object-cover w-full h-48 mb-4 rounded-lg'
                    />
                    <p>
                      <FaCar className='inline mr-2 text-primary' /> <span className='font-semibold'>Car:</span>{' '}
                      {tripDetails.car}
                    </p>
                    <p>
                      <span className='font-semibold'>Make:</span> {tripDetails.carMake}
                    </p>
                    <p>
                      <span className='font-semibold'>Model:</span> {tripDetails.carModel}
                    </p>
                    <p>
                      <span className='font-semibold'>Year:</span> {tripDetails.carYear}
                    </p>
                    <p>
                      <span className='font-semibold'>Color:</span> {tripDetails.carColor}
                    </p>
                  </div>
                </div>
              </div>
              <div className='mt-8'>
                <h2 className='mb-4 text-2xl font-semibold'>Trip Route</h2>
                <MapContainer center={[39.8283, -98.5795]} zoom={4} style={{ height: '400px', width: '100%' }}>
                  <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                  {tripDetails.route.map((stop, index) => (
                    <Marker key={index} position={[stop.lat, stop.lng]}>
                      <Popup>{stop.name}</Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </TabContent>

            <TabContent id='driver' active={activeTab}>
              <div className='flex items-center mb-6'>
                <img src={driverDetails.avatar} alt={driverDetails.name} className='w-24 h-24 mr-6 rounded-full' />
                <div>
                  <h2 className='mb-2 text-2xl font-semibold'>{driverDetails.name}</h2>
                  <p className='flex items-center mb-1'>
                    <FaStar className='mr-1 text-yellow-400' /> {driverDetails.rating} ({driverDetails.tripsCompleted}{' '}
                    trips)
                  </p>
                  {driverDetails.isVerified && (
                    <p className='flex items-center text-green-500'>
                      <FaCheckCircle className='mr-1' /> Verified Driver
                    </p>
                  )}
                </div>
              </div>
              <p className='mb-4'>{driverDetails.bio}</p>
              <button className='px-6 py-2 text-white transition duration-300 rounded-lg bg-primary hover:bg-primary-dark'>
                Contact Driver
              </button>
            </TabContent>

            <TabContent id='reviews' active={activeTab}>
              <h2 className='mb-4 text-2xl font-semibold'>Driver Reviews</h2>
              {reviews.map(review => (
                <div key={review.id} className='p-4 mb-4 bg-gray-100 rounded-lg'>
                  <div className='flex items-center mb-2'>
                    <img src={review.avatar} alt='Reviewer' className='w-12 h-12 mr-4 rounded-full' />
                    <div>
                      <div className='flex items-center'>
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))}
            </TabContent>

            <TabContent id='chat' active={activeTab}>
              <h2 className='mb-4 text-2xl font-semibold'>Chat with Driver</h2>
              <div className='h-64 p-4 mb-4 overflow-y-auto bg-gray-100 rounded-lg'>
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`mb-2 ${msg.sender === 'Me' ? 'text-right' : ''}`}>
                    <span className='font-semibold'>{msg.sender}:</span> {msg.message}
                  </div>
                ))}
              </div>
              <div className='flex'>
                <input
                  type='text'
                  className='flex-grow p-2 border border-gray-300 rounded-l-lg'
                  placeholder='Type your message...'
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
                <button
                  className='px-6 py-2 text-white transition duration-300 rounded-r-lg bg-primary hover:bg-primary-dark'
                  onClick={handleSendMessage}
                >
                  Send
                </button>
              </div>
            </TabContent>
          </div>
        </div>

        <div className='mt-8 text-center'>
          <button className='px-8 py-3 text-lg font-semibold text-white transition duration-300 rounded-lg bg-primary hover:bg-primary-dark'>
            Book This Trip
          </button>
        </div>
      </div>
      <CarpoolSection />
      <Footer />
    </div>
  );
};

export default TripDetails;
