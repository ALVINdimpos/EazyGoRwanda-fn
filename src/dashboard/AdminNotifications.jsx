import React, { useState } from 'react';
import { FaBell, FaCheck, FaOtter, FaTimes } from 'react-icons/fa';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';

const AdminNotifications = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New driver registration', type: 'info', time: '5 minutes ago' },
    { id: 2, message: 'Trip cancellation request', type: 'warning', time: '1 hour ago' },
    { id: 3, message: 'Payment issue reported', type: 'error', time: '2 hours ago' },
  ]);

  const handleDismiss = id => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className='flex-1 flex flex-col overflow-hidden'>
        <AdminNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-green-50'>
          <div>
            <h1 className='text-3xl font-semibold m-6'>Notifications</h1>

            <div className='space-y-4'>
              {notifications.map(notification => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg shadow-md flex items-center justify-between ${
                    notification.type === 'info'
                      ? 'bg-blue-100'
                      : notification.type === 'warning'
                        ? 'bg-yellow-100'
                        : 'bg-red-100'
                  }`}
                >
                  <div className='flex items-center'>
                    <FaBell
                      className={`mr-3 ${
                        notification.type === 'info'
                          ? 'text-blue-500'
                          : notification.type === 'warning'
                            ? 'text-yellow-500'
                            : 'text-red-500'
                      }`}
                    />
                    <div>
                      <p className='font-semibold'>{notification.message}</p>
                      <p className='text-sm text-gray-600'>{notification.time}</p>
                    </div>
                  </div>
                  <div className='flex space-x-2'>
                    <button className='p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300'>
                      <FaCheck />
                    </button>
                    <button
                      className='p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300'
                      onClick={() => handleDismiss(notification.id)}
                    >
                      <FaTimes />
                    </button>
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

export default AdminNotifications;
