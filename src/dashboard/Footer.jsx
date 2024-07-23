import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-green-50 text-green-800 py-3 text-center'>
      <p className='text-sm'>&copy; {currentYear} TegaRide. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
