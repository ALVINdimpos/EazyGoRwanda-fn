import React, { useState, useEffect } from 'react';
import { FaSearch, FaEdit, FaTrash, FaBan, FaCheck, FaEnvelope, FaFilter } from 'react-icons/fa';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Driver = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [passengers, setPassengers] = useState([
    {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      email: 'john@example.com',
      status: 'Active',
      trips: 15,
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      url: '/Dashboard/Passenger-profile',
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: 'janesmith',
      email: 'jane@example.com',
      status: 'Inactive',
      trips: 8,
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      url: '/Dashboard/Passenger-profile',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      username: 'bobjohnson',
      email: 'bob@example.com',
      status: 'Active',
      trips: 22,
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      url: '/Dashboard/Passenger-profile',
    },
    {
      id: 4,
      name: 'Alice Brown',
      username: 'alicebrown',
      email: 'alice@example.com',
      status: 'Active',
      trips: 12,
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      url: '/Dashboard/Passenger-profile',
    },
    {
      id: 5,
      name: 'Charlie Davis',
      username: 'charliedavis',
      email: 'charlie@example.com',
      status: 'Inactive',
      trips: 5,
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      url: '/Dashboard/Passenger-profile',
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPassengers, setFilteredPassengers] = useState(passengers);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    minTrips: 0,
    maxTrips: Infinity,
  });

  useEffect(() => {
    const results = passengers.filter(
      passenger =>
        passenger.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        passenger.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        passenger.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPassengers(results);
  }, [searchTerm, passengers]);

  const applyFilters = () => {
    const filtered = passengers.filter(
      passenger =>
        (filters.status === 'all' || passenger.status === filters.status) &&
        passenger.trips >= filters.minTrips &&
        passenger.trips <= (filters.maxTrips || Infinity)
    );
    setFilteredPassengers(filtered);
    setFilterModalOpen(false);
  };

  return (
    <>
      <div className='flex h-screen bg-gray-100'>
        <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <div className='flex-1 flex flex-col overflow-hidden'>
          <AdminNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className='flex-1 overflow-x-hidden overflow-y-auto bg-green-50'>
            <div className='container mx-auto px-6 py-8'>
              <h1 className='text-3xl font-semibold mb-6 text-gray-800'>Passenger Management Portal</h1>

              <div className='mb-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                <div className='relative w-full md:w-1/2'>
                  <input
                    type='text'
                    placeholder='Search passengers...'
                    className='w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-300'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                  />
                  <FaSearch className='absolute left-3 top-3 text-gray-400' />
                </div>
                <button
                  onClick={() => setFilterModalOpen(true)}
                  className='bg-primary text-white px-6 py-2 rounded-lg hover:bg-green-500 transition duration-300 flex items-center shadow-md'
                >
                  <FaFilter className='mr-2' />
                  Filter
                </button>
              </div>

              <div className='bg-white shadow-xl rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl'>
                <table className='min-w-full'>
                  <thead className='bg-gray-200'>
                    <tr>
                      <th className='px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                        Name
                      </th>
                      <th className='px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                        Username
                      </th>
                      <th className='px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                        Email
                      </th>
                      <th className='px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                        Status
                      </th>
                      <th className='px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                        Trips
                      </th>
                      <th className='px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    {filteredPassengers.map(passenger => (
                      <tr key={passenger.id} className='hover:bg-gray-50 transition duration-300'>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div className='flex-shrink-0 h-10 w-10'>
                              <Link to={passenger.url}>
                                <img className='h-10 w-10 rounded-full object-cover' src={passenger.image} alt='' />
                              </Link>
                            </div>
                            <div className='ml-4'>
                              <Link to={passenger.url}>
                                <div className='text-sm font-medium text-gray-900'>{passenger.name}</div>
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <Link to={passenger.url}>
                            <div className='text-sm text-gray-900'>{passenger.username}</div>
                          </Link>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-900'>{passenger.email}</div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              passenger.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {passenger.status}
                          </span>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{passenger.trips}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                          <button className='text-indigo-600 hover:text-indigo-900 mr-2 transition duration-300'>
                            <FaEdit />
                          </button>
                          <button className='text-red-600 hover:text-red-900 mr-2 transition duration-300'>
                            <FaTrash />
                          </button>
                          <button className='text-yellow-600 hover:text-yellow-900 mr-2 transition duration-300'>
                            {passenger.status === 'Active' ? <FaBan /> : <FaCheck />}
                          </button>
                          <button className='text-primary hover:text-green-700 transition duration-300'>
                            <FaEnvelope />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
          <Footer />
        </div>

        {filterModalOpen && (
          <div className='fixed inset-0 bg-gray-600  overflow-y-auto h-full w-full' id='my-modal'>
            <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-primary'>
              <div className='mt-3 text-center'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>Filter Passengers</h3>
                <div className='mt-2 px-7 py-3'>
                  <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='status'>
                      Status
                    </label>
                    <select
                      id='status'
                      value={filters.status}
                      onChange={e => setFilters({ ...filters, status: e.target.value })}
                      className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    >
                      <option value='all'>All</option>
                      <option value='Active'>Active</option>
                      <option value='Inactive'>Inactive</option>
                    </select>
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='minTrips'>
                      Minimum Trips
                    </label>
                    <input
                      id='minTrips'
                      type='number'
                      value={filters.minTrips}
                      onChange={e => setFilters({ ...filters, minTrips: parseInt(e.target.value) || 0 })}
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='maxTrips'>
                      Maximum Trips
                    </label>
                    <input
                      id='maxTrips'
                      type='number'
                      value={filters.maxTrips === Infinity ? '' : filters.maxTrips}
                      onChange={e => setFilters({ ...filters, maxTrips: parseInt(e.target.value) || Infinity })}
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                  </div>
                </div>
                <div className='items-center px-4 py-3'>
                  <button
                    onClick={applyFilters}
                    className='px-4 py-2 bg-primary text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300'
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Driver;
