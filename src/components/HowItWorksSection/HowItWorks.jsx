import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMapMarkedAlt,
  FaBell,
  FaRoute,
  FaWallet,
  FaUser,
  FaShieldAlt,
  FaCar,
  FaLeaf,
  FaStar,
  FaCheckCircle,
  FaArrowLeft,
} from 'react-icons/fa';

const Step = ({ Icon, title, description, position }) => {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };

  return (
    <motion.div
      className={`absolute w-64 p-4 bg-white shadow-2xl rounded-2xl ${positionClasses[position]}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex flex-col items-center'>
        <Icon className='w-24 h-16 mb-2 text-primary' />
        <h3 className='mb-2 text-lg font-bold text-center'>{title}</h3>
        <p className='text-sm text-center text-gray-600'>{description}</p>
      </div>
    </motion.div>
  );
};

const Content = ({ steps, centralImage }) => (
  <div className='relative w-full max-w-4xl mx-auto h-[600px] my-16'>
    <div className='absolute inset-0 flex items-center justify-center'>
      <motion.div
        className='w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl overflow-hidden'
        key={centralImage}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={centralImage}
          alt='TegaRide Feature'
          className='w-72 h-72 object-cover rounded-full border-4 border-white'
        />
      </motion.div>
    </div>
    {steps.map((step, index) => (
      <Step key={index} {...step} position={['top-left', 'top-right', 'bottom-right', 'bottom-left'][index]} />
    ))}
  </div>
);

const tabs = [
  {
    title: 'For Passenger',
    image: 'https://i.pinimg.com/564x/53/eb/50/53eb509afced2aa93a009a0c7f9407c8.jpg',
    steps: [
      {
        Icon: FaMapMarkedAlt,
        title: 'Request A Ride',
        description: 'Enter your location and destination to find a suitable ride.',
      },
      {
        Icon: FaBell,
        title: 'Instant Notifications',
        description: 'Receive real-time updates and stay connected with your driver.',
      },
      {
        Icon: FaRoute,
        title: 'Track Your Ride',
        description: 'Follow your ride in real-time and share your trip details for safety.',
      },
      {
        Icon: FaWallet,
        title: 'Cashless Payment',
        description: 'Enjoy convenient, cashless transactions using your TegaRide wallet.',
      },
    ],
  },
  {
    title: 'For Driver',
    image: 'https://i.pinimg.com/564x/0f/3a/b7/0f3ab7c8f405eb9631c88aa197328ec6.jpg',
    steps: [
      {
        Icon: FaMapMarkedAlt,
        title: 'Find Passengers',
        description: 'Accept ride requests from nearby passengers looking for transportation.',
      },
      {
        Icon: FaWallet,
        title: 'Earn Money',
        description: 'Get paid for completed trips and earn bonuses based on your performance.',
      },
      {
        Icon: FaRoute,
        title: 'Set Your Schedule',
        description: "Enjoy the flexibility of driving when it's convenient for you.",
      },
      {
        Icon: FaBell,
        title: 'Instant Updates',
        description: 'Receive real-time notifications about new ride requests and passenger information.',
      },
    ],
  },
  {
    title: 'Trust & Safety',
    image: 'https://i.pinimg.com/564x/b0/6a/ec/b06aecc0416d081ad0bb6a95870c220a.jpg',
    steps: [
      {
        Icon: FaUser,
        title: 'Driver Verification',
        description: 'All drivers undergo thorough background checks and verification processes.',
      },
      {
        Icon: FaRoute,
        title: 'Real-time GPS Tracking',
        description: 'Every ride is tracked in real-time for enhanced safety and security.',
      },
      {
        Icon: FaBell,
        title: '24/7 Support',
        description: 'Access round-the-clock customer support for any issues or concerns.',
      },
      {
        Icon: FaShieldAlt,
        title: 'Emergency Assistance',
        description: 'Use the in-app emergency button for immediate help in critical situations.',
      },
    ],
  },
  {
    title: 'Sustainability',
    image: 'https://i.pinimg.com/564x/1f/67/00/1f6700e3c18802cbfc1eae4c409453e4.jpg',
    steps: [
      {
        Icon: FaCar,
        title: 'Eco-Friendly Practices',
        description: 'We promote carpooling and other green transportation options.',
      },
      {
        Icon: FaWallet,
        title: 'Incentives for Green Choices',
        description: 'Earn rewards for choosing eco-friendly ride options.',
      },
      {
        Icon: FaLeaf,
        title: 'Renewable Energy',
        description: "We're exploring renewable energy sources to power our platform.",
      },
      {
        Icon: FaShieldAlt,
        title: 'Environmental Impact',
        description: 'We continuously assess and improve our sustainability practices.',
      },
    ],
  },
];

function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    console.log('Active tab:', activeTab);
  }, [activeTab]);

  return (
    <>
      <section className='py-16 overflow-hidden bg-gray-50 shadow-2xl' id='HowItWorks'>
        <div className='container px-4 mx-auto'>
          <h2 className='mb-4 text-3xl font-bold text-center md:text-4xl'>
            How <span className='text-primary'>TegaRide</span> Works
          </h2>
          <p className='max-w-2xl mx-auto mb-12 text-center text-gray-800'>
            Download and install the TegaRide app. Enter your phone number and create your account. Once approved,
            you're ready to start your journey with TegaRide.
          </p>

          <div className='flex flex-wrap justify-center mb-8'>
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 m-2 rounded-full transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-primary text-white'
                    : 'bg-white text-green-900 font-extrabold text-lg hover:bg-gray-200 hover:scale-105'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <Content steps={tabs[activeTab].steps} centralImage={tabs[activeTab].image} />
        </div>
      </section>

      <section className='relative overflow-hidden py-16 px-8 bg-gradient-to-b from-gray-100 via-green-100 to-gray-200'>
        <div className='container mx-auto relative z-10'>
          <div className='flex flex-col lg:flex-row items-center justify-between'>
            <div className='lg:w-1/2 relative flex items-center justify-start mb-8 lg:mb-0'>
              <div className='w-3/4 h-auto relative'>
                <img
                  src='https://i.pinimg.com/564x/30/0d/41/300d41c2bb99a315337ad59b0ff0065a.jpg'
                  alt='Driver in car'
                  className='w-full rounded-lg shadow-2xl'
                />
                <div className='absolute -right-32 top-1/2 transform -translate-y-1/2 bg-white rounded-3xl shadow-xl p-6 w-72 text-gray-800'>
                  <div className='flex items-center justify-between mb-4'>
                    <FaArrowLeft className='text-gray-500' />
                    <span className='text-gray-700 font-semibold'>High Demanded Trip</span>
                    <div className='w-4'></div>
                  </div>

                  <div className='flex items-center mb-4 justify-start'>
                    <img
                      src='https://i.pinimg.com/564x/30/0d/41/300d41c2bb99a315337ad59b0ff0065a.jpg'
                      alt='Ted Williams'
                      className='w-16 h-16 rounded-full mr-4'
                    />
                    <div>
                      <h3 className='font-bold text-lg'>Ted Williams</h3>
                      <div className='flex items-center'>
                        <span className='text-xl font-semibold mr-1'>4.9</span>
                        <FaStar className='text-yellow-400' />
                      </div>
                      <span className='text-sm text-gray-500'>Member since</span>
                      <span className='text-sm text-gray-500 block'>06/10/2016</span>
                    </div>
                  </div>

                  <div className='mb-4'>
                    <div className='flex justify-between text-sm mb-1'>
                      <span className='text-gray-500'>Driver's Rank</span>
                      <span className='font-semibold'>10663</span>
                    </div>
                    <div className='flex justify-between text-sm'>
                      <span className='text-gray-500'>Car Type</span>
                      <span className='font-semibold'>Black Cab</span>
                    </div>
                    <div className='flex justify-between text-sm'>
                      <span className='text-gray-500'>Trip Stops</span>
                      <span className='font-semibold'>3</span>
                    </div>
                  </div>

                  <div className='mb-4'>
                    <div className='flex justify-between text-sm'>
                      <span className='text-gray-500'>From: </span>
                      <span className='text-gray-500'>To:</span>
                    </div>
                    <div className='flex justify-between text-sm'>
                      <span className='font-semibold'>Kigali-Remera</span>
                      <span className='font-semibold'>Rubavu-Lake side</span>
                    </div>
                    <span className='text-sm text-gray-500'>Ride Rating</span>
                    <div className='flex text-yellow-400 mt-1'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span className='text-sm text-gray-500'>Excellent</span>
                  </div>

                  <button className='w-full bg-green-700 text-white py-3 rounded-full font-semibold hover:bg-green-800 transition duration-300'>
                    Enjoy Yours
                  </button>
                </div>
              </div>
            </div>

            <div className='lg:w-1/2 text-gray-800'>
              <h2 className='text-4xl font-bold mb-6'>Driven by quality</h2>
              <ul className='space-y-4'>
                <li className='flex items-start'>
                  <FaCheckCircle className='text-green-600 mt-1 mr-2 flex-shrink-0' />
                  <span>
                    All Gett drivers are fully licensed, with an average rating of 4.8/5 stars from our riders
                  </span>
                </li>
                <li className='flex items-start'>
                  <FaCheckCircle className='text-green-600 mt-1 mr-2 flex-shrink-0' />
                  <span>
                    All black cab drivers go through rigorous TfL checks and spend over two years studying for their
                    license
                  </span>
                </li>
                <li className='flex items-start'>
                  <FaCheckCircle className='text-green-600 mt-1 mr-2 flex-shrink-0' />
                  <span>Black cabs can use bus lanes meaning quicker pick up and drop off for riders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWorks;
