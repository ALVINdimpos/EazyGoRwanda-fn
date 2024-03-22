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
      content: (
        <>
          {/* Content for a Passanger */}
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
        </>
      ),
    },
    {
      title: 'For a Driver',
      link: '/',
      content: (
        <>
          {/* Content for a Driver */}
          <div className='first-container'>
            <span className='steps-svg first-svg'>
              <img src={FirstStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='font-extrabold uppercase text-base text-right'>Find Passengers</span>
            <br />
            <span className='text-gray-600 text-base'>
              Looking to make some extra money? <br /> Accept ride requests from passengers looking for transportation.
            </span>
            <br />
            <span className='steps-svg third-svg'>
              <img src={SecondStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='font-extrabold uppercase text-base text-right'>Earn Money</span>
            <br />
            <span className='text-gray-600 text-base text-right post-a-ride'>
              Get paid for every completed trip. Earn additional bonuses based on your performance and customer ratings.
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
              <span className='font-black uppercase text-base text-left'>Set Your Schedule</span>
              <br />
              <span className='text-gray-600 text-base text-right'>
                Drive when it is convenient for you. Set your own schedule and availability to maximize your earnings.
              </span>
            </div>
            <span className='steps-svg fourth-svg'>
              <img src={FourthStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='font-extrabold uppercase text-base text-left'>Cashless Transactions</span>
            <br />
            <span className='text-gray-600 text-base text-right'>
              Accept cashless payments from passengers. No need to handle cash, making transactions safer and more
              convenient.
            </span>
          </div>
        </>
      ),
    },
    {
      title: 'Trust & Safety',
      link: '/',
      content: (
        <>
          {/* Content for Trust & Safety */}
          <div className='first-container'>
            <span className='steps-svg first-svg'>
              <img src={FirstStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='font-extrabold uppercase text-base text-right'>Driver Background Checks</span>
            <br />
            <span className='text-gray-600 text-base'>
              Ensuring drivers meet safety standards through thorough background checks and verification processes.
            </span>
            <br />
            <span className='steps-svg third-svg'>
              <img src={SecondStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='font-extrabold uppercase text-base text-right'>Real-time GPS Tracking</span>
            <br />
            <span className='text-gray-600 text-base text-right post-a-ride'>
              Providing real-time GPS tracking for all rides to enhance safety and security for both drivers and
              passengers.
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
              <span className='font-black uppercase text-base text-left'>24/7 Customer Support</span>
              <br />
              <span className='text-gray-600 text-base text-right'>
                Access to round-the-clock customer support for assistance with any issues or concerns during rides.
              </span>
            </div>
            <span className='steps-svg fourth-svg'>
              <img src={FourthStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='font-extrabold uppercase text-base text-left'>Emergency Assistance Button</span>
            <br />
            <span className='text-gray-600 text-base text-right'>
              Incorporating an emergency assistance button in the app for immediate help during critical situations.
            </span>
          </div>
        </>
      ),
    },
    {
      title: 'Sustainability',
      link: '/',
      content: (
        <>
          {/* Content for Sustainability */}
          <div className='first-container'>
            <span className='steps-svg first-svg'>
              <img src={FirstStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='font-extrabold uppercase text-base text-right'>Eco-Friendly Practices</span>
            <br />
            <span className='text-gray-600 text-base'>
              Promoting eco-friendly transportation options such as carpooling to reduce carbon emissions.
            </span>
            <br />
            <span className='steps-svg third-svg'>
              <img src={SecondStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='font-extrabold uppercase text-base text-right'>Vehicle Maintenance</span>
            <br />
            <span className='text-gray-600 text-base text-right post-a-ride'>
              Regular maintenance and inspections to ensure vehicles are fuel-efficient and environmentally friendly.
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
              <span className='font-black uppercase text-base text-left'>Renewable Energy Usage</span>
              <br />
              <span className='text-gray-600 text-base text-right'>
                Exploring and implementing renewable energy sources to power our platform and reduce our carbon
                footprint.
              </span>
            </div>
            <span className='steps-svg fourth-svg'>
              <img src={FourthStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='font-extrabold uppercase text-base text-left'>Environmental Impact</span>
            <br />
            <span className='text-gray-600 text-base text-right'>
              Continuously assessing and improving our sustainability practices to minimize environmental impact.
            </span>
          </div>
        </>
      ),
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
          {/* Content based onactive index */}
          {tabsOptions[active].content}
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
