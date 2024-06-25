import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaPlusCircle, FaCar, FaUserShield, FaUserGraduate, FaShieldAlt } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { Logo } from '../assets';
import { GrSystem } from 'react-icons/gr';
import { MdCarCrash } from 'react-icons/md';
import { MdOutlinePriceChange } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);
  const howItWorksRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const howItWorksElement = howItWorksRef.current;
    let timeoutId;

    const handleMouseEnter = () => {
      clearTimeout(timeoutId);
      setHowItWorksOpen(true);
    };

    const handleMouseLeave = () => {
      timeoutId = setTimeout(() => {
        setHowItWorksOpen(false);
      }, 300); // Delay for smooth transition
    };

    if (howItWorksElement) {
      howItWorksElement.addEventListener('mouseenter', handleMouseEnter);
      howItWorksElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (howItWorksElement) {
        howItWorksElement.removeEventListener('mouseenter', handleMouseEnter);
        howItWorksElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  const NavLink = ({ to, children, icon: Icon }) => (
    <Link
      to={to}
      className='flex items-center px-4 py-2 font-bold text-green-700 transition duration-300 hover:text-green-500 hover:scale-105'
    >
      {Icon && <Icon className='mr-2' />}
      {children}
    </Link>
  );

  const DropdownMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className='absolute right-0 z-20 w-56 mt-2 overflow-hidden bg-white rounded-md shadow-xl top-full'
    >
      <NavLink to='/drivers' icon={FaCar}>
        For drivers
      </NavLink>
      <NavLink to='/passengers' icon={FaUserShield}>
        For passengers
      </NavLink>
      <NavLink to='/cost estimate'>
        <MdOutlinePriceChange className='mr-1 text-green-700' />
        Cost estimate
      </NavLink>
      <NavLink to='/trust-safety' icon={FaShieldAlt}>
        Trust & Safety
      </NavLink>
    </motion.div>
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='container px-4 mx-auto'>
        <div className='flex items-center justify-between py-4'>
          <Link to='/' className='flex items-center'>
            <img src={Logo} alt='TegaRide' className='h-12 mr-2' />
          </Link>

          <nav className='items-center hidden space-x-6 md:flex'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/find-ride' icon={FaSearch}>
              Find a ride
            </NavLink>
            <NavLink to='/trip/choose' icon={FaPlusCircle}>
              <span className='font-semibold'>Post a trip</span>
            </NavLink>
            <div ref={howItWorksRef} className='relative group'>
              <button className='flex items-center px-4 py-2 font-bold text-green-700 transition duration-300 hover:text-green-500 hover:scale-105'>
                <GrSystem className='mr-1 text-green-600 ' />
                How it works
              </button>
              <AnimatePresence>{howItWorksOpen && <DropdownMenu />}</AnimatePresence>
            </div>
          </nav>

          <div className='flex items-center space-x-4'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-6 py-2 font-semibold text-white transition duration-300 rounded-full bg-primary hover:bg-primary-600'
              onClick={() => navigate('/login')}
            >
              Log In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-6 py-2 font-semibold text-white transition duration-300 rounded-full bg-primary hover:bg-primary-600'
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </motion.button>
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
              <NavLink to='/trip/choose' icon={FaPlusCircle}>
                Post a trip
              </NavLink>
              <div className='relative'>
                <button
                  onClick={() => setHowItWorksOpen(!howItWorksOpen)}
                  className='flex items-center px-4 py-2 font-bold text-green-700 transition duration-200 hover:text-green-500 hover:scale-105'
                >
                  How it works
                </button>
                {howItWorksOpen && <DropdownMenu />}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
