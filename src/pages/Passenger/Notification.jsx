import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBell, FaEnvelope, FaCar, FaExclamationCircle } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from '../../containers/Footer';
import SharedData from './SharedData';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Simulated API call to fetch notifications
    const fetchNotifications = () => {
      setNotifications(SharedData);
      setUnreadCount(SharedData.filter(n => !n.read).length);
    };
    fetchNotifications();
  }, []);

  const markAsRead = id => {
    setNotifications(notifications.map(n => (n.id === id ? { ...n, read: true } : n)));
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const getIcon = type => {
    switch (type) {
      case 'message':
        return <FaEnvelope className='text-blue-500' />;
      case 'trip':
        return <FaCar className='text-green-500' />;
      case 'alert':
        return <FaExclamationCircle className='text-red-500' />;
      default:
        return <FaBell className='text-yellow-500' />;
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 to-blue-50'>
      <Navbar unreadCount={unreadCount} />
      <div className='container mx-auto px-4 py-8 mt-16'>
        <motion.h1
          className='text-4xl font-bold text-center mb-8 text-green-700'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Notifications
        </motion.h1>
        <motion.div
          className='bg-white rounded-lg shadow-lg overflow-hidden'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {notifications.length === 0 ? (
            <p className='text-center py-8 text-gray-500'>No notifications yet</p>
          ) : (
            <ul className='divide-y divide-gray-200'>
              <AnimatePresence>
                {notifications.map(notification => (
                  <motion.li
                    key={notification.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}
                    className={`p-4 hover:bg-gray-50 transition-colors duration-150 ease-in-out ${!notification.read ? 'bg-green-50' : ''}`}
                  >
                    <div className='flex items-center space-x-4'>
                      <div className='flex-shrink-0'>{getIcon(notification.type)}</div>
                      <div className='flex-1 min-w-0'>
                        <p className={`text-sm font-medium ${!notification.read ? 'text-green-800' : 'text-gray-900'}`}>
                          {notification.content}
                        </p>
                        <p className='text-sm text-gray-500'>{notification.time}</p>
                      </div>
                      {!notification.read && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className='px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'
                          onClick={() => markAsRead(notification.id)}
                        >
                          Mark as Read
                        </motion.button>
                      )}
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </motion.div>
      </div>
      <motion.footer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className=''
      >
        <Footer />
      </motion.footer>
    </div>
  );
};

export default Notification;
