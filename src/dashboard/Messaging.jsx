import React, { useState } from 'react';
import { FaPaperPlane, FaSearch } from 'react-icons/fa';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';

const Messaging = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [message, setMessage] = useState('');
  const [users] = useState([
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      lastMessage: 'Hello, how are you?',
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      lastMessage: 'Can you help me with my booking?',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      lastMessage: 'Thanks for your assistance!',
    },
  ]);

  const handleSend = e => {
    e.preventDefault();
    // Handle sending message
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <AdminNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-green-50'>
          <div className='h-full flex'>
            <div className='w-1/3 bg-white border-r'>
              <div className='p-4'>
                <h2 className='text-2xl font-semibold mb-4'>Messages</h2>
                <div className='relative mb-4'>
                  <input
                    type='text'
                    placeholder='Search users...'
                    className='w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                  <FaSearch className='absolute left-3 top-3 text-gray-400' />
                </div>
                <div className='space-y-2'>
                  {users.map(user => (
                    <div
                      key={user.id}
                      className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 ${selectedUser === user.id ? 'bg-gray-100' : ''}`}
                      onClick={() => setSelectedUser(user.id)}
                    >
                      <img src={user.avatar} alt={user.name} className='w-10 h-10 rounded-full mr-3' />
                      <div>
                        <h3 className='font-semibold'>{user.name}</h3>
                        <p className='text-sm text-gray-600 truncate'>{user.lastMessage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex-1 flex flex-col'>
              {selectedUser ? (
                <>
                  <div className='bg-white p-4 border-b'>
                    <h3 className='text-xl font-semibold'>{users.find(u => u.id === selectedUser)?.name}</h3>
                  </div>
                  <div className='flex-1 overflow-y-auto p-4'>{/* Chat messages would go here */}</div>
                  <form onSubmit={handleSend} className='bg-white p-4 border-t'>
                    <div className='flex'>
                      <input
                        type='text'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder='Type your message...'
                        className='flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      />
                      <button
                        type='submit'
                        className='bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300'
                      >
                        <FaPaperPlane />
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className='flex-1 flex items-center justify-center text-gray-500'>
                  Select a conversation to start messaging
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Messaging;
