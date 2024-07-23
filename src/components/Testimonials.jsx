import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonialStyles as styles } from './testimonials.styles';
import { picture } from '../assets/';

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ex voluptates minus nesciunt veniam porro aliquid sed rem,',
      rating: 4,
      image: 'https://i.pinimg.com/564x/90/1e/e6/901ee677605386e2c77304709d05997d.jpg',
      user: { name: 'John D', role: 'Director, Producer' },
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ex voluptates minus nesciunt veniam porro aliquid sed. ',
      rating: 4,
      image: 'https://i.pinimg.com/564x/26/bd/36/26bd368b868b25717a3cd1c45b8574f8.jpg',
      user: { name: 'Jane S', role: 'Writer' },
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ex voluptates minus nesciunt veniam porro aliquid sed',
      rating: 2,
      image: 'https://i.pinimg.com/564x/37/d7/c9/37d7c9757fd0518ba46931e1756527a3.jpg',
      user: { name: 'Alice M', role: 'Designer' },
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ex voluptates minus nesciunt veniam porro aliquid sed',
      rating: 4,
      image: 'https://i.pinimg.com/564x/56/c9/ec/56c9eca1c822c9986ed9e828da6ba7c4.jpg',
      user: { name: 'Bob A', role: 'Engineer' },
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ex voluptates minus nesciunt veniam porro aliquid sed',
      rating: 5,
      image: 'https://i.pinimg.com/564x/98/03/c3/9803c3db23178e2615e53703d406bf08.jpg',
      user: { name: 'Emma L', role: 'Marketing Manager' },
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ex voluptates minus nesciunt veniam porro aliquid sed.',
      rating: 2,
      image: 'https://i.pinimg.com/564x/ad/2f/9f/ad2f9f90dd326cff183c2ce85e67f93f.jpg',
      user: { name: 'Michael R', role: 'Entrepreneur' },
    },
  ];

  const testimonialsPerPage = 3;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prevPage => (prevPage + 1) % pageCount);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [pageCount]);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Voices of Our Community</h2>
        <p className={styles.subtitle}>Discover what our members have to say about their TegaRide experiences.</p>
      </div>

      <div className={styles.testimonialsGrid}>
        {testimonials
          .slice(currentPage * testimonialsPerPage, (currentPage + 1) * testimonialsPerPage)
          .map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.hexagonWrapper}>
                <div className={styles.ratingContainer}>
                  {[...Array(1)].map((_, i) => (
                    <span key={i} className={styles.userImage}>
                      <img src={testimonial.image} alt={testimonial.user.name} />
                    </span>
                  ))}
                </div>
              </div>
              <p className={styles.testimonialText}>
                <FaQuoteLeft className='text-green-600 mr-2' />
                {testimonial.text}
              </p>
              <div className={styles.ratingContainer}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={styles.star}>
                    {i < testimonial.rating ? '★' : '☆'}
                  </span>
                ))}
              </div>
              <div className={styles.userInfo}>
                <p className={styles.userName}>{testimonial.user.name}</p>
                <p className={styles.userRole}>{testimonial.user.role}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
