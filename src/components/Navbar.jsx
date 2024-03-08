/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Logo } from '../assets';
import { Link } from 'react-router-dom';
import { FaSearch, FaPlusCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='shadow-lg bg-secondary bg-opacity-5'>
      <div className='container flex items-center justify-between h-24 mx-auto'>
        <Link to='/' className='flex items-center justify-center'>
          <img className='h-16' src={Logo} alt='Logo' />
        </Link>

        {/* Navbar for larger screens */}
        <nav className='items-center hidden text-base font-semibold md:flex'>
          <ul className='flex items-center text-floor'>
            <li className='p-5 xl:p-8 active'>
              <Link to='/'>Home</Link>
            </li>
            <li className='flex items-center p-5 space-x-2 xl:p-8'>
              <FaSearch />
              <Link to='/find-ride'>Find a ride</Link>
            </li>
            <li className='flex items-center p-5 space-x-2 xl:p-8'>
              <FaPlusCircle className='text-2xl' />
              <Link to='/' className='hover:underline'>
                <span className='font-bold'>Post a trip</span>
              </Link>
            </li>
            <li className='p-5 xl:p-8'>
              <Link to='/'>How it works</Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger menu for smaller screens */}
        <div className='md:hidden '>
          <button onClick={handleMenuToggle} className='text-4xl bg-white text-floor focus:outline-none'>
            <GiHamburgerMenu />
          </button>
          {menuOpen && (
            <div className='absolute right-0 p-4 mt-2 bg-white shadow-md top-24'>
              {/* You can use the same links here as in the larger screen navbar */}
              <ul className='text-floor'>
                <li className='mb-2'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='mb-2'>
                  <Link to='/'>Find a ride</Link>
                </li>
                <li className='mb-2'>
                  <Link to='/'>Post a trip</Link>
                </li>
                <li>
                  <Link to='/'>How it works</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <button
          className={`px-8 py-2 font-bold border border-white rounded-md text-secondary ${menuOpen ? 'mr-4' : 'mr-4'}`}
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Navbar;
