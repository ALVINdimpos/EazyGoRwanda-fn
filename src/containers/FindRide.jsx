import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, MapPin, Users, DollarSign, Car, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../containers/Footer';
import SearchNav from '../components/SearchNav';
import CarpoolSection from '../components/CarpoolSection';
import SharedData from '../pages/Passenger/SharedData';

const renderStars = rating => {
  return [...Array(5)].map((_, i) => (
    <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
  ));
};

const TripCard = ({ driver, trip, car, price, seatsLeft }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
      className='w-full md:w-[calc(100%-1rem)] mb-4 overflow-hidden transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg focus:ring-2 focus:ring-green-900 focus:outline-none'
    >
      <div className='p-4'>
        <div className='flex items-center mb-4'>
          <img src={driver.image} alt={driver.name} className='w-16 h-16 mr-4 rounded-full object-cover' />
          <div>
            <h3 className='text-lg font-semibold'>{driver.name}</h3>
            <div className='flex items-center'>
              {renderStars(driver.rating)}
              <span className='ml-2 text-sm text-gray-600'>{driver.rating.toFixed(1)}</span>
            </div>
            <div className='text-sm text-gray-600'>{driver.trips} trips</div>
          </div>
        </div>
        <h4 className='mb-2 text-lg font-semibold'>{trip.route}</h4>
        <div className='flex items-center mb-1 text-sm text-gray-600'>
          <Clock className='w-4 h-4 mr-2' />
          <span>{trip.departure}</span>
        </div>
        <div className='flex items-center mb-1 text-sm text-gray-600'>
          <MapPin className='w-4 h-4 mr-2' />
          <span>Pickup: {trip.pickup}</span>
        </div>
        <div className='flex items-center mb-4 text-sm text-gray-600'>
          <MapPin className='w-4 h-4 mr-2' />
          <span>Dropoff: {trip.dropoff}</span>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center text-2xl font-bold text-primary'>
            <DollarSign className='w-6 h-6 mr-1' />
            {price}
          </div>
          <div className='flex items-center text-sm font-semibold'>
            <Users className='w-4 h-4 mr-2' />
            {seatsLeft} seats left
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='w-full px-4 py-2 mt-4 text-sm font-semibold text-white transition-all bg-primary rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
        >
          Book Now
        </motion.button>
      </div>
      <div className='flex items-center px-4 py-2 bg-gray-100'>
        <Car className='w-5 h-5 mr-2 text-gray-600' />
        <div className='text-sm'>
          <span className='font-semibold'>{car.model}</span>
          <span className='mx-2'>•</span>
          <span className='text-gray-600'>{car.type}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Trip = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 100],
    departureTime: [],
    seatsAvailable: 1,
  });
  const [showFilters, setShowFilters] = useState(false);
  const tripsPerPage = 6;

  useEffect(() => {
    // Simulated API call to fetch trips
    const fetchTrips = () => {
      const dummyTrips = [
        {
          driver: {
            name: 'Natalie',
            image:
              'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
            rating: 4.5,
            trips: 120,
          },
          trip: {
            route: 'Vancouver to Victoria',
            departure: 'Friday, March 8 at 3:30pm',
            pickup: 'Vancouver, BC, Canada',
            dropoff: 'Victoria, BC, Canada',
          },
          car: {
            model: 'Toyota Tacoma',
            type: 'Large luggage ok',
          },
          price: 18,
          seatsLeft: 3,
        },
        {
          driver: {
            name: 'Natalie',
            image:
              'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
            rating: 4.5,
            trips: 120,
          },
          trip: {
            route: 'Vancouver to Victoria',
            departure: 'Friday, March 8 at 3:30pm',
            pickup: 'Vancouver, BC, Canada',
            dropoff: 'Victoria, BC, Canada',
          },
          car: {
            model: 'Toyota Tacoma',
            type: 'Large luggage ok',
          },
          price: 18,
          seatsLeft: 3,
        },
        {
          driver: {
            name: 'Natalie',
            image:
              'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
            rating: 4.5,
            trips: 120,
          },
          trip: {
            route: 'Vancouver to Victoria',
            departure: 'Friday, March 8 at 3:30pm',
            pickup: 'Vancouver, BC, Canada',
            dropoff: 'Victoria, BC, Canada',
          },
          car: {
            model: 'Toyota Tacoma',
            type: 'Large luggage ok',
          },
          price: 18,
          seatsLeft: 3,
        },
        {
          driver: {
            name: 'Natalie',
            image:
              'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
            rating: 4.5,
            trips: 120,
          },
          trip: {
            route: 'Vancouver to Victoria',
            departure: 'Friday, March 8 at 3:30pm',
            pickup: 'Vancouver, BC, Canada',
            dropoff: 'Victoria, BC, Canada',
          },
          car: {
            model: 'Toyota Tacoma',
            type: 'Large luggage ok',
          },
          price: 18,
          seatsLeft: 3,
        },
        {
          driver: {
            name: 'Natalie',
            image:
              'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
            rating: 4.5,
            trips: 120,
          },
          trip: {
            route: 'Vancouver to Victoria',
            departure: 'Friday, March 8 at 3:30pm',
            pickup: 'Vancouver, BC, Canada',
            dropoff: 'Victoria, BC, Canada',
          },
          car: {
            model: 'Toyota Tacoma',
            type: 'Large luggage ok',
          },
          price: 18,
          seatsLeft: 3,
        },
        {
          driver: {
            name: 'Natalie',
            image:
              'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
            rating: 4.5,
            trips: 120,
          },
          trip: {
            route: 'Vancouver to Victoria',
            departure: 'Friday, March 8 at 3:30pm',
            pickup: 'Vancouver, BC, Canada',
            dropoff: 'Victoria, BC, Canada',
          },
          car: {
            model: 'Toyota Tacoma',
            type: 'Large luggage ok',
          },
          price: 18,
          seatsLeft: 3,
        },
        {
          driver: {
            name: 'Natalie',
            image:
              'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
            rating: 4.5,
            trips: 120,
          },
          trip: {
            route: 'Vancouver to Victoria',
            departure: 'Friday, March 8 at 3:30pm',
            pickup: 'Vancouver, BC, Canada',
            dropoff: 'Victoria, BC, Canada',
          },
          car: {
            model: 'Toyota Tacoma',
            type: 'Large luggage ok',
          },
          price: 18,
          seatsLeft: 3,
        },
        {
          driver: {
            name: 'Natalie',
            image:
              'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
            rating: 4.5,
            trips: 120,
          },
          trip: {
            route: 'Vancouver to Victoria',
            departure: 'Friday, March 8 at 3:30pm',
            pickup: 'Vancouver, BC, Canada',
            dropoff: 'Victoria, BC, Canada',
          },
          car: {
            model: 'Toyota Tacoma',
            type: 'Large luggage ok',
          },
          price: 18,
          seatsLeft: 3,
        },
        {
          driver: {
            name: 'Natalie',
            image:
              'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
            rating: 4.5,
            trips: 120,
          },
          trip: {
            route: 'Vancouver to Victoria',
            departure: 'Friday, March 8 at 3:30pm',
            pickup: 'Vancouver, BC, Canada',
            dropoff: 'Victoria, BC, Canada',
          },
          car: {
            model: 'Toyota Tacoma',
            type: 'Large luggage ok',
          },
          price: 18,
          seatsLeft: 3,
        },
        {
          driver: {
            name: 'Natalie',
            image:
              'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
            rating: 4.5,
            trips: 120,
          },
          trip: {
            route: 'Vancouver to Victoria',
            departure: 'Friday, March 8 at 3:30pm',
            pickup: 'Vancouver, BC, Canada',
            dropoff: 'Victoria, BC, Canada',
          },
          car: {
            model: 'Toyota Tacoma',
            type: 'Large luggage ok',
          },
          price: 18,
          seatsLeft: 3,
        },
        {
          driver: {
            name: 'Natalie',
            image:
              'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
            rating: 4.5,
            trips: 120,
          },
          trip: {
            route: 'Vancouver to Victoria',
            departure: 'Friday, March 8 at 3:30pm',
            pickup: 'Vancouver, BC, Canada',
            dropoff: 'Victoria, BC, Canada',
          },
          car: {
            model: 'Toyota Tacoma',
            type: 'Large luggage ok',
          },
          price: 18,
          seatsLeft: 3,
        },
        {
          driver: {
            name: 'Natalie',
            image:
              'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
            rating: 4.5,
            trips: 120,
          },
          trip: {
            route: 'Vancouver to Victoria',
            departure: 'Friday, March 8 at 3:30pm',
            pickup: 'Vancouver, BC, Canada',
            dropoff: 'Victoria, BC, Canada',
          },
          car: {
            model: 'Toyota Tacoma',
            type: 'Large luggage ok',
          },
          price: 18,
          seatsLeft: 3,
        },
      ];
      setTrips(dummyTrips);
      setFilteredTrips(dummyTrips);
    };
    fetchTrips();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = trips.filter(
        trip =>
          trip.price >= filters.priceRange[0] &&
          trip.price <= filters.priceRange[1] &&
          trip.seatsLeft >= filters.seatsAvailable &&
          (filters.departureTime.length === 0 || filters.departureTime.includes(trip.trip.departure.split(' ')[0]))
      );
      setFilteredTrips(filtered);
      setCurrentPage(1);
    };
    applyFilters();
  }, [filters, trips]);

  const totalPages = Math.ceil(filteredTrips.length / tripsPerPage);
  const indexOfLastTrip = currentPage * tripsPerPage;
  const indexOfFirstTrip = indexOfLastTrip - tripsPerPage;
  const currentTrips = filteredTrips.slice(indexOfFirstTrip, indexOfLastTrip);

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-green-50 to-blue-50'>
      <Navbar />
      <div className='container px-4 py-8 mt-16 mx-auto'>
        <SearchNav />
        <div className='my-8'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-2xl font-bold'>Available Trips</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilters(!showFilters)}
              className='flex items-center px-4 py-2 bg-primary text-white rounded-full'
            >
              <Filter className='mr-2' />
              Filters
              {showFilters ? <ChevronUp className='ml-2' /> : <ChevronDown className='ml-2' />}
            </motion.button>
          </div>
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className='bg-white p-4 rounded-lg shadow-md mb-4'
              >
                {/* Add your filter options here */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>Price Range</label>
                    <input
                      type='range'
                      min='0'
                      max='100'
                      value={filters.priceRange[1]}
                      onChange={e => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
                      className='w-full'
                    />
                    <div className='flex justify-between'>
                      <span>$5</span>
                      <span>${filters.priceRange[5]}</span>
                    </div>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>Departure Time</label>
                    <select
                      value={filters.departureTime}
                      onChange={e =>
                        handleFilterChange(
                          'departureTime',
                          Array.from(e.target.selectedOptions, option => option.value)
                        )
                      }
                      multiple
                      className='w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50'
                    >
                      <option value='Morning'>Morning</option>
                      <option value='Afternoon'>Afternoon</option>
                      <option value='Evening'>Evening</option>
                    </select>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>Seats Available</label>
                    <input
                      type='number'
                      min='1'
                      value={filters.seatsAvailable}
                      onChange={e => handleFilterChange('seatsAvailable', parseInt(e.target.value))}
                      className='w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50'
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <p className='mb-4 text-gray-600'>{filteredTrips.length} results total</p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {currentTrips.map((trip, index) => (
              <TripCard key={index} {...trip} />
            ))}
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <nav className='inline-flex rounded-md shadow-xl'>
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className='px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-200'
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 border border-gray-300 hover:bg-gray-100 text-sm font-medium ${
                  currentPage === i + 1 ? 'bg-primary text-white' : 'bg-white text-gray-500 hover:bg-gray-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              className='px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-200'
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
      <CarpoolSection />
      <Footer />
    </div>
  );
};

export default Trip;
