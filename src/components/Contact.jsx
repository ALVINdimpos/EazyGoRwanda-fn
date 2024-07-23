import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import Testimonials from './Testimonials';
import Footer from '../containers/Footer';
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to a server
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className='bg-green-50 min-h-screen'>
      <Navbar />

      <main className='container mx-auto mt-12 px-4 py-8'>
        <h1 className='text-4xl font-bold text-center text-green-700 mb-8'>Contact Us</h1>

        <div className='grid md:grid-cols-2 gap-8'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white p-6 rounded-lg shadow-xl'
          >
            <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-gray-700 mb-2'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-green-700  focus:outline-none`}
                  placeholder='Your Name'
                />
                {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700  mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border focus:border-green-700  focus:outline-none rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder='your@email.com'
                />
                {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
              </div>
              <div className='mb-4'>
                <label htmlFor='message' className='block text-gray-700 mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-2 border focus:border-green-700  focus:outline-none rounded ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                  rows='4'
                  placeholder='Your message here...'
                ></textarea>
                {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message}</p>}
              </div>
              <button
                type='submit'
                className='bg-green-700 text-white focus:border-green-700  focus:outline-none py-2 px-4 rounded hover:bg-green-600 transition duration-300'
              >
                Send Message
              </button>
            </form>
            {isSubmitted && (
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='text-green-600 mt-4'>
                Thank you for your message. We'll get back to you soon!
              </motion.p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white p-6 rounded-lg shadow-lg'
          >
            <h2 className='text-2xl font-semibold mb-4'>Contact Information</h2>
            <div className='space-y-4'>
              <p className='flex items-center'>
                <FaPhone className='text-green-700 mr-2' />
                <span>+250 788 123 456</span>
              </p>
              <p className='flex items-center'>
                <FaEnvelope className='text-green-700 mr-2' />
                <a href='mailto:offstm2002@gmail.com' className='hover:text-green-700 transition duration-300'>
                  offstm2002@gmail.com
                </a>
              </p>
              <p className='flex items-center'>
                <FaMapMarkerAlt className='text-green-700 mr-2' />
                <span>Kigali, Rwanda, Makuza Building</span>
              </p>
            </div>

            <h3 className='text-xl font-semibold mt-8 mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a
                href='https://www.facebook.com/tegariderwanda'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 hover:text-green-700 transition duration-300'
              >
                <FaFacebook size={24} />
              </a>
              <a
                href='https://www.instagram.com/tegariderwanda'
                target='_blank'
                rel='noopener noreferrer'
                className=' hover:text-green-700 transition duration-300'
              >
                <FaInstagramSquare
                  size={24}
                  className='text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500'
                />
              </a>
              <a
                href='https://www.twitter.com/@tegariderwanda'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-300 hover:text-green-700 transition duration-300'
              >
                <FaTwitter size={24} />
              </a>
              <a
                href='https://www.linkedin.com/tegariderwanda'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-800 hover:text-green-700 transition duration-300'
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default Contact;
