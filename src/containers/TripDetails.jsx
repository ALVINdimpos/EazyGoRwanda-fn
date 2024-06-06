import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaCar, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaCommentDots, FaCheckCircle } from 'react-icons/fa';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import { CarpoolSection } from '../components';

const TripDetails = () => {
  const { tripId } = useParams();

  // Dummy trip details data
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
    carImage:
      'https://rukminim2.flixcart.com/image/832/832/xif0q/vehicle-pull-along/7/g/h/toys-nano-pull-back-car-for-kids-black-zokato-2-original-imags9rdd4mvysur.jpeg?q=70&crop=false', // Placeholder image URL
    stops: ['Chicago', 'Denver'],
    luggageSize: 'Medium',
    tripDescription: 'A comfortable trip from New York to Los Angeles with a few stops along the way.',
  };

  // Dummy driver details data
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

  // Dummy reviews data
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

  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    // Add user message to the chat
    setChatMessages([...chatMessages, { sender: 'Me', message }]);
    // Here you can send the message to the server or driver
    // and handle the response.

    // Clear the message input
    setMessage('');
  };

  return (
    <>
      <Navbar />
      <div className='container py-8 mx-auto'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          <div className='px-6 py-8 bg-white rounded-lg shadow-md'>
            <h2 className='mb-4 text-3xl font-bold'>Trip Details</h2>
            <div>
              <p>
                <FaMapMarkerAlt className='inline mr-2' />
                <span className='font-bold'>Origin:</span> {tripDetails.origin}
              </p>
              <p>
                <FaMapMarkerAlt className='inline mr-2' />
                <span className='font-bold'>Destination:</span> {tripDetails.destination}
              </p>
              <p>
                <FaCalendarAlt className='inline mr-2' />
                <span className='font-bold'>Departure Date:</span> {tripDetails.departureDate}
              </p>
              <p>
                <FaUser className='inline mr-2' />
                <span className='font-bold'>Available Seats:</span> {tripDetails.availableSeats}
              </p>
              <p>
                <FaCommentDots className='inline mr-2' />
                <span className='font-bold'>Price Per Seat:</span> ${tripDetails.pricePerSeat}
              </p>
              <div className='flex items-center'>
                <FaCar className='inline mr-2' />
                <span className='mr-2 font-bold'>Car:</span>
                <img src={tripDetails.carImage} alt={tripDetails.car} className='w-16 h-16 rounded-full' />
                <p className='ml-2'>{tripDetails.car}</p>
              </div>
              <p>
                <span className='font-bold'>Car Make:</span> {tripDetails.carMake}
              </p>
              <p>
                <span className='font-bold'>Car Model:</span> {tripDetails.carModel}
              </p>
              <p>
                <span className='font-bold'>Car Year:</span> {tripDetails.carYear}
              </p>
              <p>
                <span className='font-bold'>Car Color:</span> {tripDetails.carColor}
              </p>
              <p>
                <span className='font-bold'>Stops:</span> {tripDetails.stops.join(', ')}
              </p>
              <p>
                <span className='font-bold'>Luggage Size:</span> {tripDetails.luggageSize}
              </p>
              <p>
                <span className='font-bold'>Trip Description:</span> {tripDetails.tripDescription}
              </p>
            </div>
          </div>
          <div className='px-6 py-8 bg-white rounded-lg shadow-md'>
            <h2 className='mb-4 text-3xl font-bold'>Driver Details</h2>
            <div className='flex items-center mb-4'>
              <img src={driverDetails.avatar} alt={driverDetails.name} className='w-16 h-16 rounded-full' />
              <div className='ml-4'>
                <p className='flex items-center'>
                  <FaCheckCircle className='inline text-green-500' />
                  <span className='ml-2 font-bold'>Name:</span> {driverDetails.name}
                </p>
                <p className='flex items-center'>
                  <FaStar className='inline mr-2 text-yellow-500' />
                  <span className='font-bold'>Rating:</span> {driverDetails.rating}
                </p>
                <p>
                  <span className='font-bold'>Verified:</span> {driverDetails.isVerified ? 'Yes' : 'No'}
                </p>
              </div>
            </div>
            <p>
              <span className='font-bold'>Bio:</span> {driverDetails.bio}
            </p>
            <p>
              <span className='font-bold'>Trips Completed:</span> {driverDetails.tripsCompleted}
            </p>
            <button className='px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600'>
              Contact Driver
            </button>
          </div>
        </div>

        <div className='px-6 py-8 mt-8 bg-white rounded-lg shadow-md'>
          <h2 className='mb-4 text-3xl font-bold'>Reviews</h2>
          {reviews.map(review => (
            <div key={review.id} className='flex items-center mb-4'>
              <img src={review.avatar} alt='avatar' className='w-10 h-10 mr-4 rounded-full' />
              <div>
                <div className='flex items-center mb-1'>
                  <FaStar className='mr-1 text-yellow-500' />
                  <span className='font-bold'>{review.rating}</span>
                </div>
                <p>{review.comment}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='px-6 py-8 mt-8 bg-white rounded-lg shadow-md'>
          <h2 className='mb-4 text-3xl font-bold'>Chat with Driver</h2>
          <div className='h-64 p-4 overflow-y-auto border border-gray-300 rounded-lg'>
            {chatMessages.map((msg, index) => (
              <div key={index} className='mb-2'>
                <strong>{msg.sender}:</strong> {msg.message}
              </div>
            ))}
          </div>
          <div className='flex mt-4'>
            <input
              type='text'
              className='flex-grow p-2 border border-gray-300 rounded-l'
              placeholder='Type your message...'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <button className='px-4 text-white bg-blue-500 rounded-r' onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>

        <button className='px-4 py-2 mt-8 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600'>
          Book Now
        </button>
      </div>
      <CarpoolSection />
      <Footer />
    </>
  );
};

export default TripDetails;
