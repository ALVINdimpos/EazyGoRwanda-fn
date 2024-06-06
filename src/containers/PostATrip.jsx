/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { MapPin, LuggageIcon, CalendarIcon, ClockIcon, UserIcon, DollarSignIcon } from 'lucide-react';
import { Navbar } from '../components';

function PostATrip() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [pricePerSeat, setPricePerSeat] = useState(3000);
  const [emptySeats, setEmptySeats] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [backRowSeating, setBackRowSeating] = useState('');
  const [tripDescription, setTripDescription] = useState('');

  const handleClickSize = size => {
    setSelectedSize(size);
  };

  const handleClickBackRowSeating = num => {
    setBackRowSeating(num);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <Navbar />
      <div className='min-h-screen mt-20 bg-gray-100'>
        <div className='container px-6 py-12 mx-auto'>
          <div className='mb-12 text-center'>
            <h1 className='mb-4 text-5xl font-extrabold'>Post A Trip</h1>
            <p className='text-lg text-gray-600'>
              Cover your driving costs by filling your seats when you're driving from A to B.{' '}
              <a href='/' className='underline'>
                More Info
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-12'>
            {/* Itinerary Section */}
            <div className='p-8 bg-white rounded-lg shadow-lg'>
              <h2 className='mb-6 text-3xl font-bold'>Itinerary</h2>
              <p className='mb-6 text-gray-600'>
                Your origin, destination, and stops you're willing to make along the way.
              </p>

              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <div className='relative'>
                  <MapPin className='absolute text-gray-400 transform -translate-y-1/2 top-1/2 left-3' />
                  <input
                    type='text'
                    placeholder='Enter an origin'
                    value={origin}
                    onChange={e => setOrigin(e.target.value)}
                    required
                    className='w-full py-4 pl-12 pr-4 text-lg bg-gray-100 rounded-lg focus:outline-none'
                  />
                </div>
                <div className='relative'>
                  <MapPin className='absolute text-gray-400 transform -translate-y-1/2 top-1/2 left-3' />
                  <input
                    type='text'
                    placeholder='Enter a destination'
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                    required
                    className='w-full py-4 pl-12 pr-4 text-lg bg-gray-100 rounded-lg focus:outline-none'
                  />
                </div>
              </div>
            </div>

            {/* Ride Schedule Section */}
            <div className='p-8 bg-white rounded-lg shadow-lg'>
              <h2 className='mb-6 text-3xl font-bold'>Ride Schedule</h2>
              <p className='mb-6 text-gray-600'>
                Enter a precise date and time with{' '}
                <span className='font-bold text-black'> am (morning) or pm (afternoon).</span>
              </p>

              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <div className='relative'>
                  <CalendarIcon className='absolute text-gray-400 transform -translate-y-1/2 top-1/2 left-3' />
                  <input
                    type='date'
                    placeholder='Enter departure date'
                    value={departureDate}
                    onChange={e => setDepartureDate(e.target.value)}
                    className='w-full py-4 pl-12 pr-4 text-lg bg-gray-100 rounded-lg focus:outline-none'
                  />
                </div>
                <div className='relative'>
                  <ClockIcon className='absolute text-gray-400 transform -translate-y-1/2 top-1/2 left-3' />
                  <input
                    type='time'
                    placeholder='Time'
                    value={departureTime}
                    onChange={e => setDepartureTime(e.target.value)}
                    className='w-full py-4 pl-12 pr-4 text-lg bg-gray-100 rounded-lg focus:outline-none'
                  />
                </div>
              </div>
              <p className='mt-4 text-blue-600 underline cursor-pointer'>Add a return trip</p>
            </div>

            {/* Trip Preferences Section */}
            <div className='p-8 bg-white rounded-lg shadow-lg'>
              <h2 className='mb-6 text-3xl font-bold'>Trip Preferences</h2>
              <p className='mb-6 text-gray-600'>
                This informs passengers of how much space you have for their luggage and extras before they book.
              </p>

              <div className='space-y-6'>
                {/* Luggage Size */}
                <div>
                  <label className='block mb-3 text-xl font-semibold'>Luggage</label>
                  <div className='flex justify-between'>
                    {['No Luggage', 'S', 'M', 'L'].map(size => (
                      <button
                        key={size}
                        type='button'
                        onClick={() => handleClickSize(size)}
                        className={`flex items-center justify-center w-1/4 py-3 rounded-lg border ${
                          selectedSize === size ? 'bg-blue-600 text-white' : 'bg-gray-100'
                        }`}
                      >
                        <LuggageIcon size={20} />
                        <span className='ml-2 text-lg'>{size}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Back Row Seating */}
                <div>
                  <label className='block mb-3 text-xl font-semibold'>Back Row Seating</label>
                  <p className='mb-4 text-gray-600'>Pledge to a maximum of 2 people in the back for better reviews.</p>
                  <div className='flex justify-between'>
                    {['2', '3'].map(num => (
                      <button
                        key={num}
                        type='button'
                        onClick={() => handleClickBackRowSeating(num)}
                        className={`flex items-center justify-center w-1/2 py-3 rounded-lg border ${
                          backRowSeating === num ? 'bg-blue-600 text-white' : 'bg-gray-100'
                        }`}
                      >
                        <UserIcon size={20} />
                        <span className='ml-2 text-lg'>Max {num} people</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Empty Seats Section */}
            <div className='p-8 bg-white rounded-lg shadow-lg'>
              <h2 className='mb-6 text-3xl font-bold'>Empty Seats</h2>
              <div className='flex justify-between'>
                {[...Array(7)].map((_, i) => (
                  <button
                    key={i}
                    type='button'
                    onClick={() => setEmptySeats(i + 1)}
                    className={`flex items-center justify-center w-12 h-12 rounded-full border text-lg ${
                      emptySeats === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-100'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing Section */}
            <div className='p-8 bg-white rounded-lg shadow-lg'>
              <h2 className='mb-6 text-3xl font-bold'>Pricing</h2>
              <p className='mb-6 text-gray-600'>
                Enter a fair price per seat to cover your gas and other expenses. Note that all prices are in Rwf.
              </p>
              <div className='relative flex items-center'>
                <DollarSignIcon className='absolute text-gray-400 transform -translate-y-1/2 top-1/2 left-3' />
                <input
                  type='number'
                  placeholder='Price per seat'
                  value={pricePerSeat}
                  onChange={e => setPricePerSeat(e.target.value)}
                  className='w-1/2 py-4 pl-12 pr-4 text-lg bg-gray-100 rounded-lg focus:outline-none'
                />
                <p className='ml-6 text-xl text-gray-700'>Kigali to Musanze</p>
              </div>
            </div>

            {/* Trip Description Section */}
            <div className='p-8 bg-white rounded-lg shadow-lg'>
              <h2 className='mb-6 text-3xl font-bold'>Trip Description</h2>
              <p className='mb-6 text-gray-600'>
                Add any details relevant to your trip for passengers before they book.
              </p>
              <textarea
                name='TripDescription'
                placeholder='We recommend writing the exact pick-up and drop-off locations, and any other details that will help passengers find you.'
                cols='30'
                rows='5'
                value={tripDescription}
                onChange={e => setTripDescription(e.target.value)}
                className='w-full p-4 text-lg bg-gray-100 rounded-lg focus:outline-none'
              ></textarea>
            </div>

            {/* Post Button */}
            <div className='text-center'>
              <button
                type='submit'
                className='px-12 py-4 text-xl font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700'
              >
                Post My Trip
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PostATrip;
