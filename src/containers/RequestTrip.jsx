/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import {
  FaCar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaInfoCircle,
  FaStreetView,
  FaRegLightbulb,
  FaRegClock,
} from 'react-icons/fa';

const RequestTrip = () => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    leavingDate: '',
    seatsRequired: 1,
    description: '',
  });

  const [step, setStep] = useState(0);
  const [recentRequests, setRecentRequests] = useState([]);

  useEffect(() => {
    // Simulated recent requests data
    setRecentRequests([
      { id: 1, from: 'Kigali', to: 'Musanze', date: '2023-06-30' },
      { id: 2, from: 'Butare', to: 'Gisenyi', date: '2023-07-02' },
      { id: 3, from: 'Rwamagana', to: 'Kigali', date: '2023-07-05' },
    ]);
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const InputField = ({ icon: Icon, label, ...props }) => (
    <div className='mb-4'>
      <label className='block mb-1 text-sm font-medium text-gray-700'>
        <Icon className='inline mr-2' />
        {label}
      </label>
      <input
        {...props}
        className='w-full p-3 transition duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
      />
    </div>
  );

  const steps = [
    { title: 'Trip Details', fields: ['origin', 'destination'] },
    { title: 'Date & Seats', fields: ['leavingDate', 'seatsRequired'] },
    { title: 'Additional Info', fields: ['description'] },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-green-50'>
      <Navbar />
      <main className='container px-4 py-8 mx-auto mt-12'>
        <motion.h1
          className='mb-8 text-4xl font-bold text-center text-gray-800'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Request Your Perfect Ride
        </motion.h1>

        <div className='grid gap-8 md:grid-cols-3'>
          {/* Left side - Tips and Recent Requests */}
          <div className='md:col-span-1'>
            <motion.div
              className='p-6 bg-white rounded-lg shadow-lg'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className='mb-4 text-xl font-semibold'>Trip Request Tips</h3>
              <ul className='space-y-3'>
                <li className='flex items-start'>
                  <FaStreetView className='mt-1 mr-2 text-primary' />
                  <span>Be specific about your pick-up and drop-off locations.</span>
                </li>
                <li className='flex items-start'>
                  <FaRegLightbulb className='mt-1 mr-2 text-primary' />
                  <span>Mention any special requirements in the description.</span>
                </li>
                <li className='flex items-start'>
                  <FaRegClock className='mt-1 mr-2 text-primary' />
                  <span>Request your trip in advance for better matches.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className='p-6 mt-6 bg-white rounded-lg shadow-lg'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className='mb-4 text-xl font-semibold'>Recent Trip Requests</h3>
              <ul className='space-y-3'>
                {recentRequests.map(request => (
                  <li key={request.id} className='p-3 text-sm bg-gray-100 rounded'>
                    <div className='font-semibold'>
                      {request.from} to {request.to}
                    </div>
                    <div className='text-gray-600'>Date: {request.date}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Center - Form */}
          <div className='md:col-span-2'>
            <motion.div
              className='p-8 bg-white rounded-lg shadow-lg'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className='mb-6 text-3xl font-bold'>Request Your Trip</h2>
              <div className='flex mb-6 space-x-4'>
                {steps.map((s, index) => (
                  <motion.div
                    key={index}
                    className={`flex-1 p-2 text-center rounded ${index <= step ? 'bg-primary text-white' : 'bg-gray-200'}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {s.title}
                  </motion.div>
                ))}
              </div>
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step === 0 && (
                      <>
                        <InputField
                          icon={FaMapMarkerAlt}
                          label='From'
                          type='text'
                          name='origin'
                          value={formData.origin}
                          onChange={handleChange}
                          placeholder='Enter origin'
                          required
                        />
                        <InputField
                          icon={FaMapMarkerAlt}
                          label='To'
                          type='text'
                          name='destination'
                          value={formData.destination}
                          onChange={handleChange}
                          placeholder='Enter destination'
                          required
                        />
                      </>
                    )}
                    {step === 1 && (
                      <>
                        <InputField
                          icon={FaCalendarAlt}
                          label='Leaving Date'
                          type='date'
                          name='leavingDate'
                          value={formData.leavingDate}
                          onChange={handleChange}
                          required
                        />
                        <InputField
                          icon={FaUserFriends}
                          label='Seats Required'
                          type='number'
                          name='seatsRequired'
                          value={formData.seatsRequired}
                          onChange={handleChange}
                          min='1'
                          max='10'
                          required
                        />
                      </>
                    )}
                    {step === 2 && (
                      <div className='mb-4'>
                        <label className='block mb-1 text-sm font-medium text-gray-700'>
                          <FaInfoCircle className='inline mr-2' />
                          Description
                        </label>
                        <textarea
                          name='description'
                          value={formData.description}
                          onChange={handleChange}
                          className='w-full p-3 transition duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                          placeholder='Add any additional details about your trip'
                          rows='4'
                        ></textarea>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
                <div className='flex justify-between mt-6'>
                  {step > 0 && (
                    <button
                      type='button'
                      onClick={() => setStep(step - 1)}
                      className='px-4 py-2 text-gray-700 transition duration-200 bg-gray-200 rounded-lg hover:bg-gray-300'
                    >
                      Back
                    </button>
                  )}
                  {step < steps.length - 1 ? (
                    <button
                      type='button'
                      onClick={() => setStep(step + 1)}
                      className='px-4 py-2 text-white transition duration-200 rounded-lg bg-primary hover:bg-primary-dark'
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type='submit'
                      className='px-4 py-2 text-white transition duration-200 rounded-lg bg-primary hover:bg-primary-dark'
                    >
                      Submit Request
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <motion.section
          className='mt-12 text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className='mb-8 text-3xl font-bold'>Why Choose Our Service?</h2>
          <div className='grid gap-6 md:grid-cols-3'>
            <div className='p-6 bg-white rounded-lg shadow-lg'>
              <FaCar className='mx-auto mb-4 text-4xl text-primary' />
              <h3 className='mb-2 text-xl font-semibold'>Reliable Drivers</h3>
              <p>Our drivers are vetted and rated by the community for your safety.</p>
            </div>
            <div className='p-6 bg-white rounded-lg shadow-lg'>
              <FaUserFriends className='mx-auto mb-4 text-4xl text-primary' />
              <h3 className='mb-2 text-xl font-semibold'>Community-Driven</h3>
              <p>Join a network of friendly travelers and make new connections.</p>
            </div>
            <div className='p-6 bg-white rounded-lg shadow-lg'>
              <FaCalendarAlt className='mx-auto mb-4 text-4xl text-primary' />
              <h3 className='mb-2 text-xl font-semibold'>Flexible Scheduling</h3>
              <p>Find rides that fit your schedule, or request custom trip times.</p>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default RequestTrip;
