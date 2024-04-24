import { useState } from 'react';
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
            <span className='text-base font-extrabold text-right uppercase'>Request A Ride</span>
            <br />
            <span className='text-base text-gray-600'>
              Have to reach office or going for shopping? <br /> Just put current location and destination and search a
              ride that suits you.
            </span>
            <br />
            <span className='steps-svg third-svg'>
              <img src={SecondStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='text-base font-extrabold text-right uppercase'>Instant Notifications</span>
            <br />
            <span className='text-base text-right text-gray-600 post-a-ride'>
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
              <span className='text-base font-black text-left uppercase'>Post A Ride</span>
              <br />
              <span className='text-base text-right text-gray-600'>
                Going somewhere but hate to travel alone – <br /> just post your details and publish it
              </span>
            </div>
            <span className='steps-svg fourth-svg'>
              <img src={FourthStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='text-base font-extrabold text-left uppercase'>Cashless Payment</span>
            <br />
            <span className='text-base text-right text-gray-600'>
              Payment made easy by using your own Wallet – no more cash to carry
            </span>
          </div>
        </>
      ),
      dots: (
        <>
          <div className='dots'>
            <i className='text-green-600 fa-solid fa-circle pe-1'></i>
            <i className='text-green-300 fa-solid fa-circle pe-1'></i>
            <i className='text-green-300 fa-solid fa-circle pe-1'></i>
            <i className='text-green-300 fa-solid fa-circle'></i>
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
            <span className='text-base font-extrabold text-right uppercase'>Find Passengers</span>
            <br />
            <span className='text-base text-gray-600'>
              Looking to make some extra money? <br /> Accept ride requests from passengers looking for transportation.
            </span>
            <br />
            <span className='steps-svg third-svg'>
              <img src={SecondStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='text-base font-extrabold text-right uppercase'>Earn Money</span>
            <br />
            <span className='text-base text-right text-gray-600 post-a-ride'>
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
              <span className='text-base font-black text-left uppercase'>Set Your Schedule</span>
              <br />
              <span className='text-base text-right text-gray-600'>
                Drive when it is convenient for you. Set your own schedule and availability to maximize your earnings.
              </span>
            </div>
            <span className='steps-svg fourth-svg'>
              <img src={FourthStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='text-base font-extrabold text-left uppercase'>Cashless Transactions</span>
            <br />
            <span className='text-base text-right text-gray-600'>
              Accept cashless payments from passengers. No need to handle cash, making transactions safer and more
              convenient.
            </span>
          </div>
        </>
      ),
      dots: (
        <>
          <div className='dots'>
            <i className='text-green-300 fa-solid fa-circle pe-1'></i>
            <i className='text-green-600 fa-solid fa-circle pe-1'></i>
            <i className='text-green-300 fa-solid fa-circle pe-1'></i>
            <i className='text-green-300 fa-solid fa-circle'></i>
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
            <span className='text-base font-extrabold text-right uppercase'>Driver Background Checks</span>
            <br />
            <span className='text-base text-gray-600'>
              Ensuring drivers meet safety standards through thorough background checks and verification processes.
            </span>
            <br />
            <span className='steps-svg third-svg'>
              <img src={SecondStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='text-base font-extrabold text-right uppercase'>Real-time GPS Tracking</span>
            <br />
            <span className='text-base text-right text-gray-600 post-a-ride'>
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
              <span className='text-base font-black text-left uppercase'>24/7 Customer Support</span>
              <br />
              <span className='text-base text-right text-gray-600'>
                Access to round-the-clock customer support for assistance with any issues or concerns during rides.
              </span>
            </div>
            <span className='steps-svg fourth-svg'>
              <img src={FourthStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='text-base font-extrabold text-left uppercase'>Emergency Assistance Button</span>
            <br />
            <span className='text-base text-right text-gray-600'>
              Incorporating an emergency assistance button in the app for immediate help during critical situations.
            </span>
          </div>
        </>
      ),
      dots: (
        <>
          <div className='dots'>
            <i className='text-green-300 fa-solid fa-circle pe-1'></i>
            <i className='text-green-300 fa-solid fa-circle pe-1'></i>
            <i className='text-green-600 fa-solid fa-circle pe-1'></i>
            <i className='text-green-300 fa-solid fa-circle'></i>
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
            <span className='text-base font-extrabold text-right uppercase'>Eco-Friendly Practices</span>
            <br />
            <span className='text-base text-gray-600'>
              Promoting eco-friendly transportation options such as carpooling to reduce carbon emissions.
            </span>
            <br />
            <span className='steps-svg third-svg'>
              <img src={SecondStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='text-base font-extrabold text-right uppercase'>Vehicle Maintenance</span>
            <br />
            <span className='text-base text-right text-gray-600 post-a-ride'>
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
              <span className='text-base font-black text-left uppercase'>Renewable Energy Usage</span>
              <br />
              <span className='text-base text-right text-gray-600'>
                Exploring and implementing renewable energy sources to power our platform and reduce our carbon
                footprint.
              </span>
            </div>
            <span className='steps-svg fourth-svg'>
              <img src={FourthStep} alt='mockup' className='h-[55px] pb-3' />
            </span>
            <span className='text-base font-extrabold text-left uppercase'>Environmental Impact</span>
            <br />
            <span className='text-base text-right text-gray-600'>
              Continuously assessing and improving our sustainability practices to minimize environmental impact.
            </span>
          </div>
        </>
      ),
      dots: (
        <>
          <div className='dots'>
            <i className='text-green-300 fa-solid fa-circle pe-1'></i>
            <i className='text-green-300 fa-solid fa-circle pe-1'></i>
            <i className='text-green-300 fa-solid fa-circle pe-1'></i>
            <i className='text-green-600 fa-solid fa-circle'></i>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className='min-h-screen ' id='HowItWorks'>
      <div className='pt-10 HowItWorks'>
        <h1 className='pb-6 text-2xl font-semibold text-center uppercase'>
          How <span className='eazy-go'>TegaRide</span> Works
        </h1>
        <p className='max-w-2xl pb-12 mb-6 font-light text-center text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
          Download and install the TegaRide app. Enter your phone number and make your user account. When approved, you
          must start driving.
        </p>
        <div className='flex flex-wrap justify-center pb-3 options'>
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
        <div className='flex flex-wrap items-center justify-center steps-items'>
          {/* Content based onactive index */}
          {tabsOptions[active].content}
        </div>
        {tabsOptions[active].dots}
      </div>
    </div>
  );
}
