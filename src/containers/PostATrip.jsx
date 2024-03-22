/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { MapPin, LuggageIcon } from 'lucide-react';
import { Navbar } from '../components';

function PostATrip() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [pricePerSeat, setPricePerSeat] = useState(3000);
  const [emptySeats, setEmptySeats] = useState();
  const [selectedSize, setSelectedSize] = useState('');
  const [backRowSeating, setBackRowSeating] = useState('');
  const [tripDescription, setTripDescription] = useState('');

  const handleClickSize = size => {
    setSelectedSize(size);
  };

  const handleClickBackRowSeating = num => {
    setBackRowSeating(num);
  };
  return (
    <>
      <Navbar />
      <div className='min-h-screen mt-20'>
        {/* POST A TRIP SECTION */}
        <div className='container-div mt-9 '>
          <div>
            <h1 className='font-extrabold font-serif text-6xl leading-10 mb-4 p-0'>Post A Trip</h1>
            <div className='flex items-end leading-10 font-extralight text-3xl text-gray-600'>
              <p>
                Cover your driving costs by filling your seats when you&apos;re driving from A to B.{' '}
                <a href='/' className='underline'>
                  More Info
                </a>
              </p>
            </div>
            <div className='mt-24 mb-10 cutline' />
          </div>
        </div>

        <div className='container-div '>
          <form>
            {/* ITENERARY */}
            <div className='flex gap-20'>
              {/* left side  */}
              <div className='lg:w-1/2'>
                <h2 className='section-title'>Itinerary</h2>
                <p className='section-subtitle'>
                  Your origin, destination, and stops you&apos;re willing to make along the way.
                </p>

                <div className='flex w-full items-center mb-[35px]'>
                  <label className='w-1/3 text-xl'>Origin</label>
                  <div className='relative h-fit w-2/3'>
                    <MapPin className='absolute mt-6 ml-1' />
                    <input
                      type='text'
                      placeholder='Enter an origin'
                      name='origin'
                      id='origin'
                      value={origin}
                      onChange={e => setOrigin(e.target.value)}
                      required
                      className='w-full p-7 pl-12 rounded-xl text-xl bg-slate-100'
                    />
                  </div>
                </div>
                <div className='flex w-full items-center mb-[35px]'>
                  <label className='w-1/3 text-xl'>Destination</label>
                  <div className='relative h-fit w-2/3'>
                    <MapPin className='absolute mt-6 ml-1' />
                    <input
                      type='text'
                      placeholder='Enter a destination'
                      name='destination'
                      id='destination'
                      value={destination}
                      onChange={e => setDestination(e.target.value)}
                      required
                      className='w-full p-7 pl-12 rounded-xl text-xl bg-slate-100'
                    />
                  </div>
                </div>
              </div>

              {/* google map */}
              <div className='hidden lg:block w-1/2 h-[320px] bg-slate-200 rounded-xl'></div>
            </div>

            <div className='mt-24 mb-20 cutline' />

            {/* RIDE SCHEDULE */}
            <div>
              <h2 className='section-title'>Ride Schedule</h2>
              <p className='section-subtitle'>
                Enter a precise date and time with{' '}
                <span className='font-bold text-black'> am (morning) or pm (afternoon).</span>
              </p>

              <div className='flex flex-col lg:flex-row w-full lg:w-1/2 items-center mb-[35px]'>
                <label className='w-1/3 self-start lg:self-center mb-3 lg:mb-0 text-xl font-semibold  text-slate-500'>
                  Leaving
                </label>
                <div className='flex items-center'>
                  <div className='relative h-fit w-6/12'>
                    <input
                      type='Date'
                      placeholder='Enter departure date'
                      name='departureDate'
                      id='departureDate'
                      className='w-full p-5 lg:p-7 pl-12 rounded-xl text-xl bg-slate-100'
                    />
                  </div>
                  <p className='mx-5 lg:mx-9 text-xl text-gray-600'>at</p>
                  <input
                    type='text'
                    placeholder='Time'
                    name='time'
                    id='time'
                    className='w-3/12 p-5 flex-1 lg:p-7 pl-12 rounded-xl text-xl bg-slate-100'
                  />
                </div>
              </div>

              <p className='underline lg:ml-64 text-xl text-slate-500'>add a return trip</p>
            </div>

            <div className='mt-24 mb-20 cutline' />

            {/* TRIP PREFERENCES */}
            <div>
              <h2 className='section-title'>Trip preferences</h2>
              <p className='section-subtitle'>
                This informs passengers of how much space you have for their luggage and extras before they book.
              </p>

              <div className='flex flex-col gap-5'>
                {/* Luggage */}
                <div className='flex flex-col gap-3 mb-10 lg:w-1/2'>
                  <label className='text-xl font-semibold'>Luggage</label>

                  <div className='flex w-full'>
                    <button
                      type='button'
                      className={`flex justify-center items-center w-5/12 py-3 rounded-l-full border  ${
                        selectedSize === 'No Luggage' ? 'bg-black text-white' : 'bg-transparent'
                      }`}
                      onClick={() => handleClickSize('No Luggage')}
                    >
                      <LuggageIcon size={20} />
                      <span className='ml-3 text-xl'>No Luggage</span>
                    </button>
                    <button
                      type='button'
                      className={`flex justify-center items-center w-2/12 py-3 border  ${
                        selectedSize === 'S' ? 'bg-black text-white' : 'bg-transparent'
                      }`}
                      onClick={() => handleClickSize('S')}
                    >
                      <LuggageIcon size={20} />
                      <span className='ml-3 text-xl'>S</span>
                    </button>
                    <button
                      type='button'
                      className={`flex justify-center items-center w-2/12 py-3 border  ${
                        selectedSize === 'M' ? 'bg-black text-white' : 'bg-transparent'
                      }`}
                      onClick={() => handleClickSize('M')}
                    >
                      <LuggageIcon size={20} />
                      <span className='ml-3 text-xl'>M</span>
                    </button>
                    <button
                      type='button'
                      className={`flex justify-center items-center w-3/12 py-3 rounded-r-full border  ${
                        selectedSize === 'L' ? 'bg-black text-blue-100' : 'bg-transparent'
                      }`}
                      onClick={() => handleClickSize('L')}
                    >
                      <LuggageIcon size={20} />
                      <p className='ml-3 font-light text-xl h-fit'>L</p>
                    </button>
                  </div>
                </div>

                {/* Back row seating */}
                <div className='flex flex-col gap-3 lg:w-1/2'>
                  <label className='text-xl font-semibold'>Back Row Seating</label>
                  <p className='text-xl text-gray-600'>
                    Pledge to a maximum of 2 people in the back for better reviews
                  </p>

                  <div className='flex w-full'>
                    <button
                      type='button'
                      onClick={() => handleClickBackRowSeating('2')}
                      className={`flex justify-center items-center w-6/12 py-3 rounded-l-full border ${backRowSeating == '2' ? 'bg-black text-blue-100' : 'bg-transparent'}`}
                    >
                      <LuggageIcon size={20} />
                      <span className=' ml-3 text-xl'>Max 2 people</span>
                    </button>
                    <button
                      type='button'
                      onClick={() => handleClickBackRowSeating('3')}
                      className={`flex justify-center items-center w-6/12 py-3 rounded-r-full border ${backRowSeating == '3' ? 'bg-black text-blue-100' : 'bg-transparent'}`}
                    >
                      <LuggageIcon size={20} />
                      <p className=' ml-3 font-light text-xl h-fit'>Max 3 people</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-24 mb-20 cutline' />

            {/* Empty Seats */}
            <div className='flex flex-col gap-5'>
              <h2 className='section-title'>Empty Seats</h2>

              <div className='flex gap-3'>
                {[...Array(7)].map((_, i) => (
                  <button
                    key={i}
                    type='button'
                    onClick={() => setEmptySeats(i + 1)}
                    className={`flex justify-center items-center text-xl h-14 w-14 rounded-full border ${
                      emptySeats === i + 1 ? 'bg-black text-white' : 'bg-transparent'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className='mt-24 mb-20 cutline' />

            {/* PRICING */}
            <div>
              <div>
                <p className='section-title'>Pricing</p>
                <p className='section-subtitle'>
                  Enter a fair price per seat to cover your gas and other expenses. Note that all prices are CAD
                </p>
              </div>

              <div className='flex flex-col lg:flex-row w-full lg:w-1/2 items-center mb-[35px]'>
                <label className='w-1/3 self-start lg:self-center mb-3 lg:mb-0 text-xl font-semibold  text-slate-500'>
                  Price per seat
                </label>
                <div className='flex items-center'>
                  <div className='relative h-fit w-6/12'>
                    <input
                      type='Text'
                      placeholder={'Rwf' + pricePerSeat}
                      name='origin'
                      value={pricePerSeat}
                      onChange={e => setPricePerSeat(e.target.value)}
                      id='origin'
                      required
                      className='w-full p-5 lg:p-7 pl-12 rounded-xl text-xl bg-slate-100'
                    />
                  </div>
                  <p className='mx-5 lg:mx-9 text-2xl font-semibold text-gray-700'>Kigali to Musanze</p>
                </div>
              </div>
            </div>

            <div className='mt-24 mb-20 cutline' />

            {/* TRIP DESCRIPTION */}
            <div>
              <div>
                <p className='section-title'>Trip Description</p>
                <p className='section-subtitle'>
                  Add any details relevant to your trip for passengers before they book.
                </p>

                <div className='flex w-full lg:w-1/2'>
                  <label
                    htmlFor='TripDescription'
                    className='hidden lg:block w-1/3 self-start lg:self-center mb-3 lg:mb-0 text-xl font-semibold  text-slate-500'
                  >
                    Description
                  </label>
                  <textarea
                    name='TripDescription'
                    id='TripDescription'
                    placeholder='We recommend writing the exact pick-up and drop-off locations, and any other details that will help passengers find you.'
                    cols='30'
                    rows='5'
                    value={tripDescription}
                    onChange={e => setTripDescription(e.target.value)}
                    required
                    className='w-full p-5 rounded-3xl text-xl bg-slate-100'
                  ></textarea>
                </div>
              </div>
            </div>

            <div className='mt-24 mb-20 cutline' />

            {/* POST BUTTON */}
            <div>
              <button
                type='submit'
                className='fixed lg:static bottom-0 left-0 right-0 max-w-full py-5 lg:p-5 lg:rounded-xl bg-slate-100 lg:bg-slate-800 font-semibold lg:text-white border-t-2 text-2xl'
              >
                Post my trip
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PostATrip;
