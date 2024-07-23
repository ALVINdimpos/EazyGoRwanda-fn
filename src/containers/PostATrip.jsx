import react, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuggageIcon, CarIcon, ChevronRightIcon } from 'lucide-react';
import { Navbar } from '../components';
import { FaMapMarkerAlt } from 'react-icons/fa';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

// Import illustrations (replace with actual paths)
import RouteIllustration from '../assets/route-illustration.svg';
import DateTimeIllustration from '../assets/date-time-illustration.svg';
import CarIllustration from '../assets/car-illustration.svg';
import PricingIllustration from '../assets/pricing-illustration.svg';
import DetailsIllustration from '../assets/details-illustration.svg';
import Footer from './Footer';

const CreativePostATrip = () => {
  const [step, setStep] = useState(0);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    departureTime: '',
    pricePerSeat: 5000,
    emptySeats: 1,
    luggageSize: '',
    backRowSeating: '',
    tripDescription: '',
  });

  const handleSelectFrom = address => {
    setFrom(address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success From:', latLng))
      .catch(error => console.error('Error', error));
  };

  const handleSelectTo = address => {
    setTo(address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success To:', latLng))
      .catch(error => console.error('Error', error));
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Trip posted:', formData);
    // Handle form submission
  };

  const steps = [
    {
      title: 'Where are you driving?',
      illustration: RouteIllustration,
      content: (
        <div className='space-y-4'>
          <div className='w-full md:w-full px-2 mb-4 md:mb-0'>
            <div className='relative'>
              <FaMapMarkerAlt className='absolute left-3 top-1/2 transform -translate-y-1/2 text-green-700 z-10' />
              <PlacesAutocomplete
                value={from}
                onChange={setFrom}
                required
                onSelect={handleSelectFrom}
                searchOptions={{ componentRestrictions: { country: 'RW' } }}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: 'From...',
                        className:
                          'w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all duration-300 shadow-x',
                      })}
                    />
                    <div className='absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg'>
                      {loading && <div className='p-2 text-gray-500'>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = suggestion.active
                          ? 'p-2 bg-gray-100 cursor-pointer'
                          : 'p-2 bg-white cursor-pointer';
                        return (
                          <div {...getSuggestionItemProps(suggestion, { className })} key={suggestion.placeId}>
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>
          </div>
          <div className='w-full md:w-full px-2 mb-4 md:mb-0'>
            <div className='relative'>
              <FaMapMarkerAlt className='absolute left-3 top-1/2 transform -translate-y-1/2 text-green-700 z-10' />
              <PlacesAutocomplete
                value={to}
                onChange={setTo}
                required
                onSelect={handleSelectTo}
                searchOptions={{ componentRestrictions: { country: 'RW' } }}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: 'To...',
                        className:
                          'w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all duration-300 shadow-x',
                      })}
                    />
                    <div className='absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg'>
                      {loading && <div className='p-2 text-gray-500'>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = suggestion.active
                          ? 'p-2 bg-gray-100 cursor-pointer'
                          : 'p-2 bg-white cursor-pointer';
                        return (
                          <div {...getSuggestionItemProps(suggestion, { className })} key={suggestion.placeId}>
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'When are you leaving?',
      illustration: DateTimeIllustration,
      content: (
        <div className='space-y-4'>
          <input
            type='date'
            name='departureDate'
            value={formData.departureDate}
            onChange={handleChange}
            className='w-full p-3 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-700 text-green-700'
            required
          />
          <input
            type='time'
            name='departureTime'
            value={formData.departureTime}
            onChange={handleChange}
            required
            className='w-full p-3 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-700 text-green-700'
          />
        </div>
      ),
    },
    {
      title: 'Tell us about your car',
      illustration: CarIllustration,
      content: (
        <div className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-lg shadow-md ${formData.emptySeats <= 3 ? 'bg-green-500 text-white' : 'bg-white'}`}
              onClick={() => setFormData({ ...formData, emptySeats: 3 })}
            >
              <CarIcon size={48} className='mx-auto mb-2' />
              <span>Small Car</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-lg shadow-md ${formData.emptySeats > 3 ? 'bg-green-500 text-white' : 'bg-white'}`}
              onClick={() => setFormData({ ...formData, emptySeats: 5 })}
            >
              <CarIcon size={48} className='mx-auto mb-2' />
              <span>Large Car</span>
            </motion.button>
          </div>
          <div className='flex items-center justify-between p-4 bg-white rounded-lg shadow-md'>
            <span>Passengers</span>
            <div className='flex items-center'>
              {[1, 2, 3, 4, 5].map(num => (
                <motion.button
                  key={num}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-8 h-8 rounded-full mx-1 ${formData.emptySeats === num ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                  onClick={() => setFormData({ ...formData, emptySeats: num })}
                >
                  {num}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Set your price',
      illustration: PricingIllustration,
      content: (
        <div className='space-y-4'>
          <div className='p-6 bg-white rounded-lg shadow-md'>
            <input
              type='range'
              min='1000'
              max='50000'
              step='500'
              name='pricePerSeat'
              value={formData.pricePerSeat}
              onChange={handleChange}
              required
              className='w-full focus:outline-none accent-green-700'
            />
            <div className='flex justify-between mt-2'>
              <span>1,000 Rwf</span>
              <span className='text-2xl font-bold text-green-700'>{formData.pricePerSeat} Rwf</span>
              <span>50,000 Rwf</span>
            </div>
          </div>
          <p className='text-center text-gray-600'>Suggested price based on your route: 3,500 Rwf</p>
        </div>
      ),
    },
    {
      title: 'Any additional details?',
      illustration: DetailsIllustration,
      content: (
        <div className='space-y-4'>
          <textarea
            name='tripDescription'
            value={formData.tripDescription}
            onChange={handleChange}
            placeholder='E.g., Pick-up location, luggage space, etc.'
            className='w-full h-32 p-3 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-700'
          />
          <div className='flex justify-between'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-lg shadow-md ${formData.luggageSize === 'small' ? 'bg-green-700 text-white' : 'bg-white'}`}
              onClick={() => setFormData({ ...formData, luggageSize: 'small' })}
            >
              <LuggageIcon size={24} className='mx-auto mb-1' />
              <span>Small Luggage</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-lg shadow-md ${formData.luggageSize === 'large' ? 'bg-green-700 text-white' : 'bg-white'}`}
              onClick={() => setFormData({ ...formData, luggageSize: 'large' })}
            >
              <LuggageIcon size={32} className='mx-auto mb-1' />
              <span>Large Luggage</span>
            </motion.button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-green-100'>
        <Navbar />
        <div className='container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-64px)]'>
          <div className='w-full max-w-4xl overflow-hidden bg-white shadow-2xl rounded-xl'>
            <motion.h1
              className='py-6 text-3xl font-bold text-center text-white bg-green-700'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Let's Plan Your Trip!
            </motion.h1>
            <div className='flex shadow-2xl rounded-xl'>
              <div className='w-1/2 p-8 text-green-700 bg-gray-100'>
                <img src={steps[step].illustration} alt='Step illustration' className='w-full h-auto text-green-700' />
              </div>
              <div className='w-1/2 p-8'>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className='mb-4 text-2xl font-semibold'>{steps[step].title}</h2>
                    {steps[step].content}
                  </motion.div>
                </AnimatePresence>
                <div className='flex justify-between mt-8'>
                  <button
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    className='px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50'
                  >
                    Back
                  </button>
                  <button
                    onClick={() => (step === steps.length - 1 ? handleSubmit() : setStep(step + 1))}
                    className='flex items-center px-4 py-2 text-white rounded-lg bg-green-700'
                  >
                    {step === steps.length - 1 ? 'Post Trip' : 'Next'}
                    <ChevronRightIcon size={20} className='ml-2' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreativePostATrip;
