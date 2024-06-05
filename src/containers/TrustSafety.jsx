/* eslint-disable react/no-unescaped-entities */
import { Navbar } from '../components';
import Footer from './Footer';
import CarpoolSection from '../components/CarpoolSection';
import { FaShieldAlt, FaUsers } from 'react-icons/fa';
import { FaUserCheck } from 'react-icons/fa';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { GiDialPadlock } from 'react-icons/gi';
import { FaExclamationTriangle } from 'react-icons/fa';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { LiaEyeSolid } from 'react-icons/lia';
const TrustSafety = () => {
  return (
    <>
      <Navbar />
      <div className='container p-6 mx-auto'>
        {/* Trust & Safety Section */}
        <div className='flex flex-col items-center mb-12 text-center'>
          <FaShieldAlt className='mb-4 text-6xl text-primary' />
          <h1 className='text-4xl font-bold'>Trust & Safety</h1>
        </div>
        <div className='p-8 mb-12 text-center bg-white rounded-lg shadow-lg'>
          <div className='flex flex-col items-center md:flex-row'>
            <div className='justify-center flex-1 mb-6 md:text-left md:pr-6 md:mb-0'>
              <h2 className='mb-2 font-serif text-2xl italic font-black text-center text-floor'>
                Since 2015, members have safely shared over 170 million km on TegaRide.
              </h2>
              <p className='ml-24'>We’ve built trust and safety into our platform to help our members travel safely.</p>
            </div>
          </div>
        </div>

        {/* A community you can depend on Section */}
        <div className='flex flex-col items-center mb-12 text-center'>
          <FaUsers className='mb-4 text-6xl text-primary' />
          <h2 className='text-3xl font-bold'>A community you can depend on</h2>
          <p className='mt-2 text-lg'>We go the extra mile to ensure our members have a safe experience on Poparide</p>
        </div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='p-8 text-center bg-white rounded-lg shadow-lg'>
            <FaUserCheck className='w-12 h-12 mx-auto mb-4 text-primary' />
            <h3 className='mb-2 text-xl font-bold'>We verify all our drivers.</h3>
            <p className='mb-4 text-lg'>
              All drivers go through a biometric verification of their driver's license, which ensures they have a
              valid, non-expired license and increases security by preventing fraud and scams.
            </p>
            <a href='#' className='underline text-primary'>
              Find out more about verification
            </a>
          </div>
          <div className='p-8 text-center bg-white rounded-lg shadow-lg'>
            <MdOutlineTravelExplore className='w-12 h-12 mx-auto mb-4 text-primary' />
            <h3 className='mb-2 text-xl font-bold'>You choose who you travel with.</h3>
            <p className='mb-4 text-lg'>
              It’s always your choice who you travel with, and we never automatically match you with other members.
              Before you travel, you can review a member’s profile, including their name, photo, reviews from other
              members, number of Facebook friends and more.
            </p>
            <a href='#' className='underline text-primary'>
              Find out more about our booking process
            </a>
          </div>
          <div className='p-8 text-center bg-white rounded-lg shadow-lg'>
            <LiaEyeSolid className='w-12 h-12 mx-auto mb-4 text-primary' />
            <h3 className='mb-2 text-xl font-bold'>We monitor activity closely.</h3>
            <p className='mb-4 text-lg'>
              We keep a close eye on activity in our community and have automated checks in place to ensure a safe and
              reliable experience. Designed to keep our members safe, we have zero tolerance for abuse, harassment or
              stalking and strict policies against speeding and distracted driving.
            </p>
            <a href='#' className='underline text-primary'>
              Read more on the legality of carpooling
            </a>
          </div>
          <div className='p-8 text-center bg-white rounded-lg shadow-lg'>
            <GiDialPadlock className='w-12 h-12 mx-auto mb-4 text-primary' />
            <h3 className='mb-2 text-xl font-bold'>Your money is safe with us.</h3>
            <p className='mb-4 text-lg'>
              All rides are booked through our secure payment system. We hold funds for 4 days after the trip in case
              there is a dispute and we need to issue any refunds. All transactions are processed via Stripe and PayPal,
              two of the most secure payment providers available.
            </p>
            <a href='#' className='underline text-primary'>
              Read more on the legality of carpooling
            </a>
          </div>
          <div className='p-8 text-center bg-white rounded-lg shadow-lg'>
            <AiOutlineFileProtect className='w-12 h-12 mx-auto mb-4 text-primary' />
            <h3 className='mb-2 text-xl font-bold'>You're covered under regular car insurance.</h3>
            <p className='mb-4 text-lg'>
              Poparide operates under carpooling laws which allow drivers to fill their empty seats when they’re already
              driving from A to B to cover their costs. Since drivers are not turning a profit and are only covering
              their costs when using Poparide, they are generally covered under their regular auto insurance.
            </p>
            <a href='#' className='underline text-primary'>
              Read more on the legality of carpooling
            </a>
          </div>
          <div className='p-8 text-center bg-white rounded-lg shadow-lg'>
            <FaExclamationTriangle className='w-12 h-12 mx-auto mb-4 text-primary' />
            <h3 className='mb-2 text-xl font-bold'>You’re protected from scams.</h3>
            <p className='mb-4 text-lg'>
              To avoid scams, members always pay and communicate directly through the Poparide website or app. As long
              as you keep all communication, booking and payments on Poparide, you’ll be protected by our member
              protection system.
            </p>
            <a href='#' className='underline text-primary'>
              Read more on the legality of carpooling
            </a>
          </div>
        </div>
      </div>
      <CarpoolSection />
      <Footer />
    </>
  );
};

export default TrustSafety;
