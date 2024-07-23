import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaCar,
  FaUsers,
  FaChartBar,
  FaBell,
  FaEnvelope,
  FaWalking,
  FaCog,
  FaRoute,
} from 'react-icons/fa';
import { TbMapSearch } from 'react-icons/tb';
import { MdFreeCancellation } from 'react-icons/md';
import { FaRankingStar, FaCarTunnel } from 'react-icons/fa6';

const AdminSidebar = ({ open }) => {
  return (
    <div
      className={`${open ? 'block' : 'hidden'} md:block bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out`}
    >
      <nav>
        <NavLink
          to='/Dashboard/'
          className={({ isActive }) =>
            `block py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          <FaTachometerAlt className='inline-block mr-2' /> Dashboard
        </NavLink>
        <NavLink
          to='/Dashboard/Passenger'
          className={({ isActive }) =>
            `block py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          <FaWalking className='inline-block mr-2' /> Passengers
        </NavLink>
        <NavLink
          to='/Dashboard/Driver'
          className={({ isActive }) =>
            `block py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          <FaCar className='inline-block mr-2' /> Driver
        </NavLink>
        <NavLink
          to='/Dashboard/Trip'
          className={({ isActive }) =>
            `block py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          <FaRoute className='inline-block mr-2' /> Trips
        </NavLink>
        <NavLink
          to='/Dashboard/Rides'
          className={({ isActive }) =>
            `block py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          <TbMapSearch className='inline-block mr-2' /> Rides
        </NavLink>
        <NavLink
          to='/Dashboard/Cancel-trip'
          className={({ isActive }) =>
            `block py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          <MdFreeCancellation className='inline-block mr-2' /> Cancel Trip
        </NavLink>
        <NavLink
          to='/Dashboard/Recent-trips'
          className={({ isActive }) =>
            `block py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          <FaCarTunnel className='inline-block mr-2' /> Recent Trips
        </NavLink>
        <NavLink
          to='/Dashboard/Analytics'
          className={({ isActive }) =>
            `block py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          <FaChartBar className='inline-block mr-2' /> Analytics
        </NavLink>
        <NavLink
          to='/Dashboard/Review'
          className={({ isActive }) =>
            `block py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          <FaRankingStar className='inline-block mr-2' /> Reviews
        </NavLink>
        <NavLink
          to='/Dashboard/Notification'
          className={({ isActive }) =>
            `block py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          <FaBell className='inline-block mr-2' /> Notifications
        </NavLink>
        <NavLink
          to='/Dashboard/Message'
          className={({ isActive }) =>
            `block py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          <FaEnvelope className='inline-block mr-2' /> Messaging
        </NavLink>
        <NavLink
          to='/Dashboard/Settings'
          className={({ isActive }) =>
            `block py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          <FaCog className='inline-block mr-2' /> Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminSidebar;
