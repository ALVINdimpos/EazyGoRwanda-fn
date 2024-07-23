import React, { useState, useEffect, useRef } from 'react';
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
  FaChevronLeft,
  FaChevronRight,
  FaPaperPlane,
} from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import { CarpoolSection } from '../components';
import 'leaflet/dist/leaflet.css';

const TripDetails = () => {
  const { tripId } = useParams();
  const [activeTab, setActiveTab] = useState('details');
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const chatContainerRef = useRef(null);
  const reviewsPerPage = 6;

  const [chatMessages, setChatMessages] = useState([
    { sender: 'Driver', message: 'Hello! Feel free to ask any questions about the trip.', timestamp: new Date() },
  ]);
  const [message, setMessage] = useState('');

  const tripDetails = {
    id: tripId,
    origin: 'New York',
    destination: 'Los Angeles',
    departureDate: '2024-02-29',
    availableSeats: 3,
    pricePerSeat: 50,
    car: 'Toyota Camry',
    carModel: 'Camry',
    carYear: 2020,
    carColor: 'Black',
    carImage: 'https://i.pinimg.com/564x/56/8a/00/568a00627c69d6e428bd71ec3e376205.jpg',
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
    {
      id: 4,
      rating: 5,
      comment: 'Excellent experience!',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 5,
      rating: 4,
      comment: 'Very punctual and professional.',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      id: 6,
      rating: 5,
      comment: 'Highly recommended driver.',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      id: 7,
      rating: 4,
      comment: 'Good conversation, enjoyable trip.',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
  ];

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    const newMessage = { sender: 'Passenger', message, timestamp: new Date() };
    setChatMessages(prevMessages => [...prevMessages, newMessage]);
    setMessage('');

    // Simulate driver's response
    setTimeout(() => {
      const driverResponse = {
        sender: 'Driver',
        message: "Thank you for your message. I'll get back to you shortly.",
        timestamp: new Date(),
      };
      setChatMessages(prevMessages => [...prevMessages, driverResponse]);
    }, 1000);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

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

  const totalReviewPages = Math.ceil(reviews.length / reviewsPerPage);
  const displayedReviews = reviews.slice((currentReviewPage - 1) * reviewsPerPage, currentReviewPage * reviewsPerPage);

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <div className='container px-4 py-8 mx-auto mt-16'>
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
                      <FaMapMarkerAlt className='inline mr-2 text-primary' />
                      <span className='font-semibold'>From:</span> {tripDetails.origin}
                    </p>
                    <p>
                      <FaMapMarkerAlt className='inline mr-2 text-primary' />
                      <span className='font-semibold'>To:</span> {tripDetails.destination}
                    </p>
                    <p>
                      <FaCalendarAlt className='inline mr-2 text-primary' />
                      <span className='font-semibold'>Departure:</span> {tripDetails.departureDate}
                    </p>
                    <p>
                      <FaUser className='inline mr-2 text-primary' />
                      <span className='font-semibold'>Available Seats:</span> {tripDetails.availableSeats}
                    </p>
                    <p>
                      <FaCommentDots className='inline mr-2 text-primary' />
                      <span className='font-semibold'>Price Per Seat:</span> ${tripDetails.pricePerSeat}
                    </p>
                    <p>
                      <FaLuggageCart className='inline mr-2 text-primary' />
                      <span className='font-semibold'>Luggage Size:</span> {tripDetails.luggageSize}
                    </p>
                    <p>
                      <FaRoute className='inline mr-2 text-primary' />
                      <span className='font-semibold'>Stops:</span> {tripDetails.stops.join(', ')}
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
                    <div className='flex items-center mb-4'>
                      <img src={tripDetails.carImage} alt='Car' className='w-32 h-20 mr-4 rounded' />
                      <div>
                        <p className='text-xl font-semibold'>{tripDetails.car}</p>
                        <p>
                          {tripDetails.carModel} - {tripDetails.carYear}
                        </p>
                        <p>{tripDetails.carColor}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className='mb-2 text-xl font-semibold'>Route Map</h3>
                  <MapContainer center={[40.7128, -74.006]} zoom={4} className='w-full h-64'>
                    <TileLayer
                      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                      attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                    />
                    {tripDetails.route.map((stop, index) => (
                      <Marker key={index} position={[stop.lat, stop.lng]}>
                        <Popup>{stop.name}</Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </div>
              </div>
            </TabContent>

            <TabContent id='driver' active={activeTab}>
              <div className='flex items-center mb-4'>
                <img src={driverDetails.avatar} alt='Driver' className='w-20 h-20 mr-4 rounded-full' />
                <div>
                  <h2 className='text-2xl font-semibold'>{driverDetails.name}</h2>
                  <p className='flex items-center'>
                    <FaStar className='mr-2 text-yellow-500' /> {driverDetails.rating}
                  </p>
                  {driverDetails.isVerified && (
                    <p className='flex items-center text-green-500'>
                      <FaCheckCircle className='mr-2' /> Verified
                    </p>
                  )}
                </div>
              </div>
              <div className='mt-4'>
                <h3 className='mb-2 text-xl font-semibold'>Driver Bio</h3>
                <p>{driverDetails.bio}</p>
              </div>
              <div className='mt-4'>
                <h3 className='mb-2 text-xl font-semibold'>Contact Information</h3>
                <p>{driverDetails.contact}</p>
              </div>
              <div className='mt-4'>
                <h3 className='mb-2 text-xl font-semibold'>Trips Completed</h3>
                <p>{driverDetails.tripsCompleted}</p>
              </div>
            </TabContent>

            <TabContent id='reviews' active={activeTab}>
              <div>
                <h2 className='mb-4 text-2xl font-semibold'>Reviews</h2>
                {displayedReviews.map(review => (
                  <div key={review.id} className='p-4 mb-4 bg-gray-100 rounded-lg'>
                    <div className='flex items-center mb-2'>
                      <img src={review.avatar} alt='Reviewer' className='w-12 h-12 mr-4 rounded-full' />
                      <div>
                        <p className='font-semibold'>{review.comment}</p>
                        <p className='flex items-center'>
                          <FaStar className='mr-2 text-yellow-500' /> {review.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className='flex justify-center mt-4 space-x-4'>
                  <button
                    className='px-4 py-2 font-semibold text-white bg-primary rounded'
                    onClick={() => setCurrentReviewPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentReviewPage === 1}
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    className='px-4 py-2 font-semibold text-white bg-primary rounded'
                    onClick={() => setCurrentReviewPage(prev => Math.min(prev + 1, totalReviewPages))}
                    disabled={currentReviewPage === totalReviewPages}
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </TabContent>

            <TabContent id='chat' active={activeTab}>
              <div className='flex flex-col h-[400px]'>
                <div className='flex-grow overflow-y-auto mb-4 p-4 bg-gray-100 rounded' ref={chatContainerRef}>
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`mb-4 ${msg.sender === 'Driver' ? 'text-left' : 'text-right'}`}>
                      <div
                        className={`inline-block p-3 rounded-lg ${msg.sender === 'Driver' ? 'bg-blue-100' : 'bg-green-100'}`}
                      >
                        <p className='font-semibold'>{msg.sender}</p>
                        <p>{msg.message}</p>
                        <p className='text-xs text-gray-500'>{msg.timestamp.toLocaleTimeString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex mt-4'>
                  <input
                    type='text'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onKeyPress={e => {
                      if (e.key === 'Enter') {
                        handleSendMessage();
                      }
                    }}
                  />
                  <button onClick={handleSendMessage}>Send</button>
                </div>
              </div>
            </TabContent>
          </div>
        </div>
      </div>
      <CarpoolSection />
      <Footer />
    </div>
  );
};

export default TripDetails;
