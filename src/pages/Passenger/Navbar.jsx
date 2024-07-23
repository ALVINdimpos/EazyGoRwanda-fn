import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaCommentDots, FaPlusCircle, FaCar, FaUserShield, FaShieldAlt, FaBell } from 'react-icons/fa';
import { BiTrip } from 'react-icons/bi';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdOutlinePriceChange, MdContactSupport } from 'react-icons/md';
import { IoDocumentLock } from 'react-icons/io5';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import Logo from '../../assets/Logo.svg';

const Navbar = ({ unreadCount, userAvatar = 'https://i.pravatar.cc/300' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const dropdownRefs = {
    howItWorks: useRef(null),
    more: useRef(null),
    profile: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        activeDropdown &&
        !dropdownRefs[activeDropdown].current.contains(event.target) &&
        !document.getElementById(`${activeDropdown}-trigger`).contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const handleDropdownToggle = dropdown => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const NavLink = ({ to, children, icon: Icon }) => (
    <Link
      to={to}
      className='flex items-center px-4 py-2 font-bold text-green-700 transition duration-300 hover:text-green-500 hover:scale-105'
    >
      {Icon && <Icon className='mr-2' />}
      {children}
    </Link>
  );

  const DropdownMenu = ({ items, dropdownRef }) => (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className='absolute left-0 z-20 w-56 mt-2 overflow-hidden bg-white rounded-md shadow-xl top-full'
    >
      {items.map((item, idx) => (
        <NavLink key={idx} to={item.to} icon={item.icon}>
          {item.label}
        </NavLink>
      ))}
    </motion.div>
  );

  const profileDropdownItems = [
    { to: '/Passenger/Profile', label: 'Profile', icon: FaUserShield },
    { to: '/login', label: 'Sign out', icon: IoDocumentLock },
  ];

  const moreDropdownItems = [
    { to: '/Driver-map', label: 'Map', icon: FaCar },
    { to: '/Driver-trip-history', label: 'Ride History', icon: IoDocumentLock },
    { to: '/Driver-Chat', label: 'Chat', icon: FaCommentDots },
    { to: '/Driver-cancel-trip', label: 'Cancel Trip', icon: MdOutlinePriceChange },
    { to: '/Driver-About-us', label: 'About Us', icon: MdContactSupport },
  ];

  const howItWorksDropdownItems = [
    { to: '/for-passengers', label: 'For Passengers', icon: FaUserShield },
    { to: '/for-drivers', label: 'For Drivers', icon: FaCar },
    { to: '/safety', label: 'Safety', icon: FaShieldAlt },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-gray-100 via-green-100 to-gray-200 shadow-md' : 'bg-transparent'}`}
      >
        <div className='container px-4 mx-auto'>
          <div className='flex items-center justify-between py-4'>
            <Link to='/' className='flex items-center'>
              <img src={Logo} alt='TegaRide' className='h-12 mr-2' />
            </Link>

            <nav className='items-center hidden space-x-8 md:flex'>
              <NavLink to='/' activeClassName='active'>
                Home
              </NavLink>
              <NavLink to='/Passenger/My-rides'>
                <BiTrip className='h-6 mr-1' />
                Requests
              </NavLink>
              <NavLink to='/find-ride' icon={FaSearch}>
                Find a ride
              </NavLink>
              <NavLink to='/Trips' activeClassName='active' icon={FaCar}>
                Trips
              </NavLink>
              <div ref={dropdownRefs.howItWorks} className='relative'>
                <button
                  id='howItWorks-trigger'
                  onClick={() => handleDropdownToggle('howItWorks')}
                  className='flex items-center px-4 py-2 font-bold text-green-700 transition duration-300 hover:text-green-500 hover:scale-105'
                >
                  <IoMdArrowDropdownCircle className='mr-1 text-green-600' />
                  <span>How it works</span>
                </button>
                <AnimatePresence>
                  {activeDropdown === 'howItWorks' && (
                    <DropdownMenu items={howItWorksDropdownItems} dropdownRef={dropdownRefs.howItWorks} />
                  )}
                </AnimatePresence>
              </div>
              <div ref={dropdownRefs.more} className='relative'>
                <button
                  id='more-trigger'
                  onClick={() => handleDropdownToggle('more')}
                  className='flex items-center px-4 py-2 font-bold text-green-700 transition duration-300 hover:text-green-500 hover:scale-105'
                >
                  <IoMdArrowDropdownCircle className='mr-1 text-green-600' />
                  <span>More</span>
                </button>
                <AnimatePresence>
                  {activeDropdown === 'more' && (
                    <DropdownMenu items={moreDropdownItems} dropdownRef={dropdownRefs.more} />
                  )}
                </AnimatePresence>
              </div>
            </nav>

            <div className='flex items-center space-x-4'>
              <div className='relative'>
                <FaBell
                  className='w-8 h-8 text-green-700 cursor-pointer hover:text-green-500'
                  onClick={() => navigate('/Passenger/Notification')}
                />
                {unreadCount > 0 && (
                  <span className='absolute -top-3 -right-2 bg-red-700 text-white text-ms rounded-full px-2 py-0'>
                    {unreadCount}
                  </span>
                )}
              </div>
              <div ref={dropdownRefs.profile} className='relative'>
                <img
                  id='profile-trigger'
                  src={userAvatar}
                  alt='Profile'
                  className='w-10 h-10 rounded-full cursor-pointer'
                  onClick={() => handleDropdownToggle('profile')}
                />
                <AnimatePresence>
                  {activeDropdown === 'profile' && (
                    <DropdownMenu items={profileDropdownItems} dropdownRef={dropdownRefs.profile} />
                  )}
                </AnimatePresence>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='p-2 text-gray-600 rounded-md md:hidden hover:bg-gray-100'
              >
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='md:hidden'
            >
              <div className='px-4 py-2 bg-white'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/find-ride' icon={FaSearch}>
                  Find a ride
                </NavLink>
                <NavLink to='/trip/choose/' icon={FaPlusCircle}>
                  Post a trip
                </NavLink>
                <div className='relative'>
                  <button
                    onClick={() => handleDropdownToggle('howItWorks')}
                    className='flex items-center w-full px-4 py-2 font-bold text-green-700 transition duration-200 hover:text-green-500 hover:scale-105'
                  >
                    How it works
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'howItWorks' && (
                      <DropdownMenu items={howItWorksDropdownItems} dropdownRef={dropdownRefs.howItWorks} />
                    )}
                  </AnimatePresence>
                </div>
                <NavLink to='/about-us' icon={MdContactSupport}>
                  About us
                </NavLink>
                <div className='relative'>
                  <button
                    onClick={() => handleDropdownToggle('more')}
                    className='flex items-center w-full px-4 py-2 font-bold text-green-700 transition duration-200 hover:text-green-500 hover:scale-105'
                  >
                    More
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'more' && (
                      <DropdownMenu items={moreDropdownItems} dropdownRef={dropdownRefs.more} />
                    )}
                  </AnimatePresence>
                </div>
                <NavLink to='/Passenger/Notification' icon={FaBell}>
                  Notifications {unreadCount > 0 && `(${unreadCount})`}
                </NavLink>
                <div className='relative'>
                  <button
                    onClick={() => handleDropdownToggle('profile')}
                    className='flex items-center w-full px-4 py-2 font-bold text-green-700 transition duration-200 hover:text-green-500 hover:scale-105'
                  >
                    Profile
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'profile' && (
                      <DropdownMenu items={profileDropdownItems} dropdownRef={dropdownRefs.profile} />
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;
