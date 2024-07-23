import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaCar, FaMapMarkerAlt, FaCalendarAlt, FaPaperPlane, FaCircle } from 'react-icons/fa';
import Navbar from './Navbar';
import SharedData from '../Passenger/SharedData';

const Chat = () => {
  const [selectedPassenger, setSelectedPassenger] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [passengers, setPassengers] = useState([]);
  const chatWindowRef = useRef(null);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Simulated API call to fetch passengers with confirmed bookings
    const fetchPassengers = async () => {
      const dummyPassengers = [
        {
          id: 1,
          name: 'Alice Johnson',
          avatar: 'https://i.pravatar.cc/150?img=1',
          lastMessage: 'See you soon!',
          unread: 2,
        },
        {
          id: 2,
          name: 'Bob Smith',
          avatar: 'https://i.pravatar.cc/150?img=2',
          lastMessage: 'What time is pickup?',
          unread: 0,
        },
        {
          id: 3,
          name: 'Charlie Brown',
          avatar: 'https://i.pravatar.cc/150?img=3',
          lastMessage: 'Thanks for the ride!',
          unread: 1,
        },
      ];
      setPassengers(dummyPassengers);
    };
    fetchPassengers();
  }, []);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = e => {
    e.preventDefault();
    if (inputMessage.trim() && selectedPassenger) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'driver',
        content: inputMessage,
        timestamp: new Date().toISOString(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };
  useEffect(() => {
    // Simulated API call to fetch notifications
    const fetchNotifications = () => {
      setNotifications(SharedData);
      setUnreadCount(SharedData.filter(n => !n.read).length);
    };
    fetchNotifications();
  }, []);

  const PassengerCard = ({ passenger }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center p-4 cursor-pointer rounded-lg ${
        selectedPassenger?.id === passenger.id ? 'bg-primary text-white' : 'bg-white hover:bg-gray-100'
      }`}
      onClick={() => setSelectedPassenger(passenger)}
    >
      <img src={passenger.avatar} alt={passenger.name} className='w-12 h-12 rounded-full mr-4' />
      <div className='flex-grow'>
        <h3 className='font-semibold'>{passenger.name}</h3>
        <p className='text-sm truncate'>{passenger.lastMessage}</p>
      </div>
      {passenger.unread > 0 && (
        <div className='bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
          {passenger.unread}
        </div>
      )}
    </motion.div>
  );

  return (
    <div className='min-h-screen bg-green-50'>
      <Navbar unreadCount={unreadCount} />
      <main className='container mx-auto px-4 py-8 mt-16'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Chat with Passengers</h1>
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className='flex h-[600px]'>
            {/* Passenger List */}
            <div className='w-1/3 border-r border-gray-200 overflow-y-auto'>
              <div className='p-4'>
                <h2 className='text-xl font-semibold mb-4'>Passengers</h2>
                <div className='space-y-2'>
                  {passengers.map(passenger => (
                    <PassengerCard key={passenger.id} passenger={passenger} />
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Window */}
            <div className='w-2/3 flex flex-col'>
              {selectedPassenger ? (
                <>
                  <div className='bg-primary text-white p-4 flex items-center'>
                    <img
                      src={selectedPassenger.avatar}
                      alt={selectedPassenger.name}
                      className='w-10 h-10 rounded-full mr-4'
                    />
                    <h2 className='text-xl font-semibold'>{selectedPassenger.name}</h2>
                  </div>
                  <div className='flex-grow overflow-y-auto p-4' ref={chatWindowRef}>
                    {messages.map(message => (
                      <div
                        key={message.id}
                        className={`mb-4 ${message.sender === 'driver' ? 'text-right' : 'text-left'}`}
                      >
                        <div
                          className={`inline-block p-3 rounded-lg ${
                            message.sender === 'driver' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'
                          }`}
                        >
                          {message.content}
                        </div>
                        <div className='text-xs text-gray-500 mt-1'>
                          {new Date(message.timestamp).toLocaleTimeString()}
                        </div>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSendMessage} className='p-4 border-t border-gray-200'>
                    <div className='flex'>
                      <input
                        type='text'
                        value={inputMessage}
                        onChange={e => setInputMessage(e.target.value)}
                        placeholder='Type your message...'
                        className='flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary'
                      />
                      <button
                        type='submit'
                        className='bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary-dark transition duration-300'
                      >
                        <FaPaperPlane />
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className='flex items-center justify-center h-full'>
                  <p className='text-gray-500 text-lg'>Select a passenger to start chatting</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
