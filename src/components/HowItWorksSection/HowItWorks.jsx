import React from 'react';
import { Link } from 'react-router-dom';
import { FourthStep, HowItWork, SecondStep, ThirdStep } from '../../assets';
import { FirstStep } from '../../assets';
import Navbar from '../Navbar';
import Footer from '../../containers/Footer';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <div className='min-h-screen '>
      <Navbar />
      <div className='HowItWorks pt-10'>
        <h1 className='uppercase text-2xl font-semibold text-center pb-6'>
          How <span className='eazy-go'>EazyGo</span> Works
        </h1>
        <p className='text-gray-800 text-lg text-center pb-12'>
          Download and install the EAZYGO app. Enter your phone number and make your user account. When approved, you
          must start driving.
        </p>
        <div className='options flex justify-center pb-3'>
          <span>
            <Link to='/' className='font-semibold pe-8 text-lg active-link'>
              For Passenger
            </Link>
          </span>
          <span>
            <a href='/' className='font-semibold pe-8 text-lg'>
              <em>For a driver</em>
            </a>
          </span>
          <span>
            <Link to='/' className='font-semibold pe-8 text-lg'>
              Trust $ Safety
            </Link>
          </span>
          <span>
            <Link to='/' className='font-semibold text-lg'>
              Sustainability
            </Link>
          </span>
        </div>
        <div className='flex justify-center items-center'>
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
          <div className='phone-icon'>
            <div className='how-it-works-svg'>
              <img src={HowItWork} alt='mockup' className='h-[480px]' />
            </div>
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
      <Footer />
    </div>
  );
}
