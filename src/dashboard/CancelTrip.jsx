import React, { useState } from 'react';
import { FaCheck, FaTimes, FaEnvelope, FaSort, FaDollarSign, FaCar, FaUser } from 'react-icons/fa';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';

const CancelTrip = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [cancelRequests, setCancelRequests] = useState([
    {
      id: 1,
      type: 'Passenger',
      name: 'John Doe',
      image: 'https://i.pravatar.cc/100?img=1',
      from: 'New York',
      to: 'Boston',
      departureDate: '2023-07-20',
      departureTime: '09:00 AM',
      reason: 'Change of plans',
      priceRange: '$50 - $70',
    },
    {
      id: 2,
      type: 'Driver',
      name: 'Jane Smith',
      image: 'https://i.pravatar.cc/100?img=2',
      from: 'Los Angeles',
      to: 'San Francisco',
      departureDate: '2023-07-21',
      departureTime: '10:30 AM',
      reason: 'Vehicle maintenance',
      price: '$120',
    },
    // Add more mock data as needed
  ]);
  const [trips, setTrips] = useState([
    {
      id: 1,
      driverName: 'John Doe',
      passengerName: 'Alice Smith',
      from: 'New York',
      to: 'Boston',
      date: '2023-07-20',
      status: 'Confirmed',
      price: '$120',
    },
    {
      id: 2,
      driverName: 'Jane Smith',
      passengerName: 'Bob Johnson',
      from: 'Los Angeles',
      to: 'San Francisco',
      date: '2023-07-21',
      status: 'Canceled',
      price: '$150',
      reason: 'Passenger canceled due to emergency',
    },
  ]);

  const [confirmedTrips, setConfirmedTrips] = useState([]);
  const [canceledTrips, setCanceledTrips] = useState([]);

  const handleConfirm = id => {
    const trip = cancelRequests.find(request => request.id === id);
    setConfirmedTrips([...confirmedTrips, { ...trip, status: 'Confirmed' }]);
    setCancelRequests(cancelRequests.filter(request => request.id !== id));
  };

  const handleDeny = id => {
    const trip = cancelRequests.find(request => request.id === id);
    setCanceledTrips([...canceledTrips, { ...trip, status: 'Canceled' }]);
    setCancelRequests(cancelRequests.filter(request => request.id !== id));
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <AdminNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-200'>
          <div className='bg-green-50 min-h-screen p-8'>
            <h1 className='text-3xl font-bold mb-8 text-gray-800'>Cancel Trip Requests</h1>

            {/* Cancel Requests Table */}
            <div className='bg-white rounded-lg shadow-lg overflow-hidden mb-8'>
              <table className='w-full'>
                <thead className='bg-gray-200'>
                  <tr>
                    <th className='px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      User <FaSort className='inline ml-1' />
                    </th>
                    <th className='px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      From <FaSort className='inline ml-1' />
                    </th>
                    <th className='px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      To <FaSort className='inline ml-1' />
                    </th>
                    <th className='px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Departure <FaSort className='inline ml-1' />
                    </th>
                    <th className='px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Reason
                    </th>
                    <th className='px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Price <FaSort className='inline ml-1' />
                    </th>
                    <th className='px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  {cancelRequests.map(request => (
                    <tr key={request.id} className='hover:bg-gray-50'>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 h-10 w-10'>
                            <img className='h-10 w-10 rounded-full' src={request.image} alt='' />
                          </div>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>{request.name}</div>
                            <div className='text-sm text-gray-500'>{request.type}</div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{request.from}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{request.to}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-900'>{request.departureDate}</div>
                        <div className='text-sm text-gray-500'>{request.departureTime}</div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{request.reason}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {request.type === 'Driver' ? request.price : request.priceRange}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                        <button
                          onClick={() => handleConfirm(request.id)}
                          className='text-green-600 hover:text-green-900 mr-3'
                        >
                          <FaCheck className='inline mr-1' /> Confirm
                        </button>
                        <button onClick={() => handleDeny(request.id)} className='text-red-600 hover:text-red-900 mr-3'>
                          <FaTimes className='inline mr-1' /> Deny
                        </button>
                        <button className='text-blue-600 hover:text-blue-900'>
                          <FaEnvelope className='inline mr-1' /> Message
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Confirmed and Canceled Trips */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
                <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Confirmed Trips</h2>
                <div className='space-y-4'>
                  {confirmedTrips.map(trip => (
                    <TripCard key={trip.id} trip={trip} status='confirmed' />
                  ))}
                </div>
              </div>
              <div>
                <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Canceled Trips</h2>
                <div className='space-y-4'>
                  {canceledTrips.map(trip => (
                    <TripCard key={trip.id} trip={trip} status='canceled' />
                  ))}
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 mt-6 md:grid-cols-2 gap-6'>
              {trips.map(trip => (
                <div
                  key={trip.id}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden border-l-4 ${trip.status === 'Confirmed' ? 'border-green-500' : 'border-red-500'}`}
                >
                  <div className='p-6'>
                    <div className='flex justify-between items-center mb-4'>
                      <h3 className='text-xl font-semibold text-gray-800'>
                        {trip.from} to {trip.to}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${trip.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                      >
                        {trip.status}
                      </span>
                    </div>
                    <div className='grid grid-cols-2 gap-4 mb-4'>
                      <div>
                        <p className='text-sm font-medium text-gray-500'>Driver</p>
                        <p className='text-gray-800'>
                          <FaCar className='inline-block mr-2' />
                          {trip.driverName}
                        </p>
                      </div>
                      <div>
                        <p className='text-sm font-medium text-gray-500'>Passenger</p>
                        <p className='text-gray-800'>
                          <FaUser className='inline-block mr-2' />
                          {trip.passengerName}
                        </p>
                      </div>
                      <div>
                        <p className='text-sm font-medium text-gray-500'>Date</p>
                        <p className='text-gray-800'>{trip.date}</p>
                      </div>
                      <div>
                        <p className='text-sm font-medium text-gray-500'>Price</p>
                        <p className='text-gray-800'>{trip.price}</p>
                      </div>
                    </div>
                    {trip.status === 'Canceled' && (
                      <div className='mt-4 p-3 bg-red-50 rounded-lg'>
                        <p className='text-sm text-red-800'>
                          <FaTimes className='inline-block mr-2' />
                          Reason: {trip.reason}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

const TripCard = ({ trip, status }) => {
  const statusColor = status === 'confirmed' ? 'green' : 'red';
  // const borderColor = trip.type === 'Driver' ? 'red' : 'green';
  const borderColor = trip.status === 'Canceled' ? 'red' : trip.status === 'Confirmed' ? 'green' : 'gray';

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 border-l-4 border-${borderColor}-500 border-l-${borderColor}-700`}
    >
      <div className='flex items-center mb-4'>
        <img className='h-12 w-12 rounded-full mr-4' src={trip.image} alt='' />
        <div>
          <h3 className='text-lg font-semibold text-gray-800'>{trip.name}</h3>
          <p className='text-sm text-gray-600'>{trip.type}</p>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <p className='text-sm font-medium text-gray-600'>From</p>
          <p className='text-sm text-gray-800'>{trip.from}</p>
        </div>
        <div>
          <p className='text-sm font-medium text-gray-600'>To</p>
          <p className='text-sm text-gray-800'>{trip.to}</p>
        </div>
        <div>
          <p className='text-sm font-medium text-gray-600'>Date</p>
          <p className='text-sm text-gray-800'>{trip.departureDate}</p>
        </div>
        <div>
          <p className='text-sm font-medium text-gray-600'>Time</p>
          <p className='text-sm text-gray-800'>{trip.departureTime}</p>
        </div>
        <div>
          <p className='text-sm font-medium text-gray-600'>Reason</p>
          <p className='text-sm text-gray-800'>{trip.reason}</p>
        </div>
        <div>
          <p className='text-sm font-medium text-gray-600'>Price</p>
          <p className='text-sm text-gray-800'>
            <FaDollarSign className='inline mr-1' />
            {trip.type === 'Driver' ? trip.price : trip.priceRange}
          </p>
        </div>
      </div>
      <div className='mt-4'>
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${statusColor}-100 text-${statusColor}-800`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
    </div>
  );
};

export default CancelTrip;
