/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Testimonials.css';
import { picture } from '../assets';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { FaChevronCircleRight } from 'react-icons/fa';
export default function Testimonials() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex(prevIndex => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setSlideIndex(prevIndex => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Dummy testimonial data
  const testimonials = [
    {
      text: 'Fast and convenient. My go-to ride-hailing app!',
      rating: 4,
      user: { name: 'John D', role: 'Director, Producer' },
    },
    {
      text: 'Friendly drivers and easy booking process.',
      rating: 4,
      user: { name: 'Jane S', role: 'Writer' },
    },
    {
      text: "This is the best app I've used so far",
      rating: 5,
      user: { name: 'Alice M', role: 'Designer' },
    },
    {
      text: 'I really needed this for sure.',
      rating: 4,
      user: { name: 'Bob A', role: 'Engineer' },
    },
    {
      text: 'I really needed this for sure.',
      rating: 5,
      user: { name: 'Bob A', role: 'Engineer' },
    },
    {
      text: 'I really needed this for sure.',
      rating: 4,
      user: { name: 'Bob A', role: 'Engineer' },
    },
  ];

  const totalSlides = Math.ceil(testimonials.length / 3);

  return (
    <div id='parent'>
      <div id='child1' className='my-10 bg-transparent col-span-full'>
        <h5 id='h5'>Testimonials from our members</h5>
        <span>
          Embrace life's vastness, venture forth, and discover the wonders waiting beyond. The world beckons; seize its
          grand offerings now!
        </span>
        <div className='flex items-center gap-10 mt-1'>
          <button
            onClick={prevSlide}
            disabled={slideIndex === 0}
            className='p-2 font-bold text-white rounded-full focus:outline-none focus:shadow-outline'
            style={{ marginRight: '-10px' }}
          >
            <FaChevronCircleLeft className='text-xl' />
          </button>
          <button
            onClick={nextSlide}
            disabled={slideIndex === totalSlides - 1}
            className='p-2 font-bold text-white rounded-full focus:outline-none focus:shadow-outline'
            style={{ marginLeft: '-10px' }}
          >
            <FaChevronCircleRight className='text-xl' />
          </button>
        </div>
      </div>
      <div id='child2'>
        {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, index) => (
          <div key={index} className={`slide slide${index}`}>
            <div className='quotation-mark'>“</div>
            <span>{testimonial.text}</span>
            <div className='rating'>
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className='star'>
                  &#9733;
                </span>
              ))}
              {[...Array(5 - testimonial.rating)].map((_, i) => (
                <span key={i} className='star empty'>
                  &#9733;
                </span>
              ))}
            </div>
            <div className='redLine'></div>
            <div className='user'>
              <img src={picture} alt='Image' className='image1' />
              <div className='user1'>
                <span>{testimonial.user.name}</span>
                <span className='role'>{testimonial.user.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
