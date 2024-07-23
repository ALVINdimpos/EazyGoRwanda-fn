import React, { useState } from 'react';
import { FaSave, FaLock, FaBell, FaCreditCard } from 'react-icons/fa';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';
import { DivIcon } from 'leaflet';

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [settings, setSettings] = useState({
    notifications: true,
    twoFactorAuth: false,
    currency: 'USD',
    language: 'English',
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle saving settings
    console.log('Saving settings:', settings);
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <AdminNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-green-50'>
          <div>
            <h1 className='text-3xl font-semibold m-6'>Settings</h1>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h2 className='text-xl font-semibold mb-4 flex items-center'>
                  <FaBell className='mr-2 text-primary' /> Notifications
                </h2>
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id='notifications'
                    name='notifications'
                    checked={settings.notifications}
                    onChange={handleChange}
                    className='mr-2'
                  />
                  <label htmlFor='notifications'>Enable email notifications</label>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h2 className='text-xl font-semibold mb-4 flex items-center'>
                  <FaLock className='mr-2 text-primary' /> Security
                </h2>
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id='twoFactorAuth'
                    name='twoFactorAuth'
                    checked={settings.twoFactorAuth}
                    onChange={handleChange}
                    className='mr-2'
                  />
                  <label htmlFor='twoFactorAuth'>Enable two-factor authentication</label>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h2 className='text-xl font-semibold mb-4 flex items-center'>
                  <FaCreditCard className='mr-2 text-primary' /> Payment
                </h2>
                <div className='mb-4'>
                  <label htmlFor='currency' className='block mb-2'>
                    Default Currency
                  </label>
                  <select
                    id='currency'
                    name='currency'
                    value={settings.currency}
                    onChange={handleChange}
                    className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                  >
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='GBP'>GBP</option>
                  </select>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h2 className='text-xl font-semibold mb-4'>Language</h2>
                <div className='mb-4'>
                  <label htmlFor='language' className='block mb-2'>
                    Preferred Language
                  </label>
                  <select
                    id='language'
                    name='language'
                    value={settings.language}
                    onChange={handleChange}
                    className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                  >
                    <option value='English'>English</option>
                    <option value='Spanish'>Spanish</option>
                    <option value='French'>French</option>
                  </select>
                </div>
              </div>

              <button
                type='submit'
                className='bg-primary text-white px-6 py-2 rounded-lg hover:bg-green-500 transition duration-300 flex items-center '
              >
                <FaSave className='mr-2' /> Save Settings
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Settings;
