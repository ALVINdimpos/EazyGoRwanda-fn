import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FourthStep, HowItWork, SecondStep, ThirdStep } from '../../assets';
import { FirstStep } from '../../assets';
import './HowItWorks.css';

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  function handleClick(index) {
    setActive(index);
  }

  const tabsOptions = [
    {
      title: 'For Passenger',
      link: '/',
    },
    {
      title: 'For a Driver',
      link: '/driver',
    },
    {
      title: 'Trust & Safety',
      link: '/trust-safety',
    },
    {
      title: 'Sustainability',
      link: '/sustainability',
    },
  ];

  return (
    <div className='min-h-screen '>
      <div className='HowItWorks pt-10'>
        <h1 className='uppercase text-2xl font-semibold text-center pb-6'>
          How <span className='eazy-go'>EazyGo</span> Works
        </h1>
        <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center pb-12'>
          Download and install the EAZYGO app. Enter your phone number and make your user account. When approved, you
          must start driving.
        </p>
        <div className='options flex flex-wrap justify-center pb-3'>
          {tabsOptions.map((tabOption, index) => (
            <div className='option-wrapper' key={index}>
              <Link
                to={tabOption.link}
                className={`font-semibold pe-8 text-lg ${active === index ? 'active-link' : ''}`}
                onClick={() => handleClick(index)}
              >
                {tabOption.title}
              </Link>
            </div>
          ))}
        </div>
        <div className='flex flex-wrap justify-center items-center steps-items'>
          <div className='first-container'>
            <span className='steps-svg first-svg'>
              <img src={FirstStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='font-extrabold uppercase text-base text-right'>Request A Ride</span>
            <br />
            <span className='text-gray-600 text-base'>
              Have to reach office or going for shopping? <br /> Just put current location and destination and search a
              ride that suits you.
            </span>
            <br />
            <span className='steps-svg third-svg'>
              <img src={SecondStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='font-extrabold uppercase text-base text-right'>Instant Notifications</span>
            <br />
            <span className='text-gray-600 text-base text-right post-a-ride'>
              Gent instant notifications for your rides and be in contact with fellow riders all the time
            </span>
          </div>
          <div className='how-it-works-svg'>
            <img src={HowItWork} alt='mockup' className='h-[480px]' />
          </div>
          <div className='second-container'>
            <div className='second-svg'>
              <span className='steps-svg'>
                <img src={ThirdStep} alt='mockup' className='h-[55px] pb-3' />
              </span>
              <span className='font-black uppercase text-base text-left'>Post A Ride</span>
              <br />
              <span className='text-gray-600 text-base text-right'>
                Going somewhere but hate to travel alone – <br /> just post your details and publish it
              </span>
            </div>
            <span className='steps-svg fourth-svg'>
              <img src={FourthStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='font-extrabold uppercase text-base text-left'>Cashless Payment</span>
            <br />
            <span className='text-gray-600 text-base text-right'>
              Payment made easy by using your own Wallet – no more cash to carry
            </span>
          </div>
        </div>
        <div className='dots'>
          <i className='fa-solid fa-circle pe-1 text-green-600'></i>
          <i className='fa-solid fa-circle pe-1 text-green-300'></i>
          <i className='fa-solid fa-circle pe-1 text-green-300'></i>
          <i className='fa-solid fa-circle text-green-300'></i>
        </div>
      </div>
    </div>
  );
}
