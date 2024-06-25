/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FirstStep, SecondStep, ThirdStep, FourthStep, HowItWork } from '../../assets';

const Step = ({ icon, title, description, position }) => {
  const positionClasses = {
    top: 'top-0 left-[40%] -translate-x-1/2 -translate-y-[calc(100%+2rem)]',
    left: 'top-[40%] left-0 -translate-y-1/2 -translate-x-[calc(100%+2rem)]',
    right: 'top-[40%] right-0 -translate-y-1/2 translate-x-[calc(100%+2rem)]',
    bottom: 'bottom-[-1rem] left-[40%] -translate-x-1/2 translate-y-[calc(100%+2rem)] ',
  };

  return (
    <motion.div
      className={`absolute w-64 p-4 bg-white rounded-lg shadow-lg ${positionClasses[position]}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={icon} alt={title} className='w-12 h-12 mx-auto mb-2' />
      <h3 className='mb-2 text-lg font-bold text-center'>{title}</h3>
      <p className='text-sm text-center text-gray-600'>{description}</p>
    </motion.div>
  );
};

const Content = ({ steps }) => (
  <div className='relative w-full max-w-5xl mx-auto h-[700px] my-16'>
    <div className='absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-full top-1/2 left-1/2 w-80 h-80'>
      <img src={HowItWork} alt='TegaRide App' className='w-64 h-64' />
    </div>
    {steps.map((step, index) => (
      <Step key={index} {...step} position={['top', 'left', 'right', 'bottom'][index]} />
    ))}
  </div>
);

const tabs = [
  {
    title: 'For Passenger',
    steps: [
      {
        icon: FirstStep,
        title: 'Request A Ride',
        description: 'Enter your location and destination to find a suitable ride.',
      },
      {
        icon: SecondStep,
        title: 'Instant Notifications',
        description: 'Receive real-time updates and stay connected with your driver.',
      },
      {
        icon: ThirdStep,
        title: 'Track Your Ride',
        description: 'Follow your ride in real-time and share your trip details for safety.',
      },
      {
        icon: FourthStep,
        title: 'Cashless Payment',
        description: 'Enjoy convenient, cashless transactions using your TegaRide wallet.',
      },
    ],
  },
  {
    title: 'For Driver',
    steps: [
      {
        icon: FirstStep,
        title: 'Find Passengers',
        description: 'Accept ride requests from nearby passengers looking for transportation.',
      },
      {
        icon: SecondStep,
        title: 'Earn Money',
        description: 'Get paid for completed trips and earn bonuses based on your performance.',
      },
      {
        icon: ThirdStep,
        title: 'Set Your Schedule',
        description: "Enjoy the flexibility of driving when it's convenient for you.",
      },
      {
        icon: FourthStep,
        title: 'Cashless Transactions',
        description: 'Receive payments directly to your account, no cash handling required.',
      },
    ],
  },
  {
    title: 'Trust & Safety',
    steps: [
      {
        icon: FirstStep,
        title: 'Driver Verification',
        description: 'All drivers undergo thorough background checks and verification processes.',
      },
      {
        icon: SecondStep,
        title: 'Real-time GPS Tracking',
        description: 'Every ride is tracked in real-time for enhanced safety and security.',
      },
      {
        icon: ThirdStep,
        title: '24/7 Support',
        description: 'Access round-the-clock customer support for any issues or concerns.',
      },
      {
        icon: FourthStep,
        title: 'Emergency Assistance',
        description: 'Use the in-app emergency button for immediate help in critical situations.',
      },
    ],
  },
  {
    title: 'Sustainability',
    steps: [
      {
        icon: FirstStep,
        title: 'Eco-Friendly Practices',
        description: 'We promote carpooling and other green transportation options.',
      },
      {
        icon: SecondStep,
        title: 'Vehicle Maintenance',
        description: 'Regular inspections ensure vehicles are fuel-efficient and eco-friendly.',
      },
      {
        icon: ThirdStep,
        title: 'Renewable Energy',
        description: "We're exploring renewable energy sources to power our platform.",
      },
      {
        icon: FourthStep,
        title: 'Environmental Impact',
        description: 'We continuously assess and improve our sustainability practices.',
      },
    ],
  },
];

function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className='py-16 overflow-hidden bg-gray-50' id='HowItWorks'>
      <div className='container px-4 mx-auto'>
        <motion.h2
          className='mb-4 text-3xl font-bold text-center md:text-4xl'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How <span className='text-primary'>TegaRide</span> Works
        </motion.h2>
        <motion.p
          className='max-w-2xl mx-auto mb-12 text-center text-gray-600'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Download and install the TegaRide app. Enter your phone number and create your account. Once approved, you're
          ready to start your journey with TegaRide.
        </motion.p>

        <div className='flex flex-wrap justify-center mb-8'>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 m-2 rounded-full transition-all duration-300 ${
                activeTab === index ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Content steps={tabs[activeTab].steps} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default HowItWorks;
