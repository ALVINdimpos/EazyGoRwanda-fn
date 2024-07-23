import React, { useState, useEffect } from 'react';
import { FaSearch, FaEdit, FaTrash, FaUser, FaChair, FaFilter, FaMoneyBillAlt } from 'react-icons/fa';
import { MdDirectionsCar, MdLocationOn } from 'react-icons/md';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const TripManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [trips, setTrips] = useState([
    {
      id: 1,
      driver: 'John Doe',
      driverImage: 'https://i.pravatar.cc/150?img=1',
      price: '5000',
      from: 'New York',
      to: 'Boston',
      date: '2023-07-15',
      status: 'Completed',
      availableSeats: 3,
      url: '/Dashboard/Driver-profile',
    },
    {
      id: 2,
      driver: 'Jane Doe',
      driverImage: 'https://i.pravatar.cc/150?img=5',
      price: '8000',
      from: 'Los Angeles',
      to: 'San Francisco',
      date: '2023-07-16',
      status: 'In Progress',
      availableSeats: 2,
      url: '/Dashboard/Driver-profile',
    },
    {
      id: 3,
      driver: 'Mike Smith',
      driverImage: 'https://i.pravatar.cc/150?img=8',
      price: '12000',
      from: 'Chicago',
      to: 'Detroit',
      date: '2023-07-17',
      status: 'Scheduled',
      availableSeats: 4,
      url: '/Dashboard/Driver-profile',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTrips, setFilteredTrips] = useState(trips);
  const [statusFilter, setStatusFilter] = useState('All');
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);

  useEffect(() => {
    const results = trips.filter(
      trip =>
        (trip.driver.toLowerCase().includes(searchTerm.toLowerCase()) ||
          trip.passenger.toLowerCase().includes(searchTerm.toLowerCase()) ||
          trip.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
          trip.to.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (statusFilter === 'All' || trip.status === statusFilter)
    );
    setFilteredTrips(results);
  }, [searchTerm, trips, statusFilter]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleStatusFilter = status => {
    setStatusFilter(status);
    setFilterDropdownOpen(false);
  };

  const toggleFilterDropdown = () => {
    setFilterDropdownOpen(prevState => !prevState);
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <AdminNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-green-50'>
          <div className='container mx-auto px-6 py-8'>
            <h1 className='text-3xl font-semibold text-gray-800 mb-6'>Trip Management Portal</h1>

            <div className='mb-6 flex justify-between items-center'>
              <div className='relative flex-grow mr-4'>
                <input
                  type='text'
                  placeholder='Search trips...'
                  className='pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 transition duration-300'
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <FaSearch className='absolute left-3 top-3 text-gray-400' />
              </div>
              <div className='relative inline-block text-left'>
                <div>
                  <button
                    type='button'
                    onClick={toggleFilterDropdown}
                    className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-primary text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-300 focus:ring-green-500'
                    id='options-menu'
                    aria-haspopup='true'
                    aria-expanded={filterDropdownOpen}
                  >
                    <FaFilter className='mr-2 h-5 w-5' />
                    Filter: {statusFilter}
                  </button>
                </div>
                {filterDropdownOpen && (
                  <div className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                    <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                      {['All', 'Completed', 'In Progress', 'Scheduled'].map(status => (
                        <button
                          key={status}
                          onClick={() => handleStatusFilter(status)}
                          className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                          role='menuitem'
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead className='bg-gray-200'>
                    <tr>
                      <th className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                        Driver
                      </th>
                      <th className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                        Price/Seat
                      </th>
                      <th className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                        Route
                      </th>
                      <th className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                        Date
                      </th>
                      <th className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                        Status
                      </th>
                      <th className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                        Seats
                      </th>
                      <th className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200'>
                    {filteredTrips.map(trip => (
                      <tr key={trip.id} className='hover:bg-gray-50 transition duration-300'>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div className='flex-shrink-0 h-10 w-10'>
                              <Link to={trip.url}>
                                <img className='h-10 w-10 rounded-full' src={trip.driverImage} alt={trip.driver} />
                              </Link>
                            </div>
                            <div className='ml-4'>
                              <Link to={trip.url}>
                                <div className='text-sm font-medium text-gray-900'>{trip.driver}</div>
                                <div className='text-sm text-gray-500'>
                                  <FaUser className='inline mr-1' /> Driver
                                </div>
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-900'>{trip.price}</div>
                          <div className='text-sm text-gray-500'>
                            <FaMoneyBillAlt className='inline mr-1' /> Rwf
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-900'>
                            <MdLocationOn className='inline mr-1 text-red-500' /> {trip.from}
                          </div>
                          <div className='text-sm text-gray-500'>
                            <MdLocationOn className='inline mr-1 text-green-500' /> {trip.to}
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-900'>{trip.date}</div>
                          <div className='text-sm text-gray-500'>
                            <MdDirectionsCar className='inline mr-1' /> Trip Date
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              trip.status === 'Completed'
                                ? 'bg-green-100 text-green-800'
                                : trip.status === 'In Progress'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {trip.status}
                          </span>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-900'>
                            <FaChair className='inline mr-1' /> {trip.availableSeats} available
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                          <button className='text-indigo-600 hover:text-indigo-900 mr-3 transition duration-300'>
                            <FaEdit className='inline' /> Edit
                          </button>
                          <button className='text-red-600 hover:text-red-900 transition duration-300'>
                            <FaTrash className='inline' /> Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default TripManagement;
