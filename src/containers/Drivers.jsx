import { Navbar } from '../components';
import Footer from './Footer';
import CarpoolSection from '../components/CarpoolSection';
import passengerIcon from '../assets/passenger.svg';
import { FaCarTunnel } from 'react-icons/fa6';
import { PiNumberOneFill } from 'react-icons/pi';
import { PiNumberTwoFill } from 'react-icons/pi';
import { PiNumberThreeFill } from 'react-icons/pi';
import ReliablePassengers from '../assets/ReliablePassengers.svg';
const HowItWorksForDrivers = () => {
  return (
    <>
      <Navbar />
      <div className='container p-6 mx-auto'>
        {/* For Drivers Section */}
        <div className='mb-12 text-center'>
          <div className='flex justify-center'>
            <FaCarTunnel className='mb-4 text-6xl text-primary' />
          </div>
          <h1 className='text-4xl font-bold'>For drivers</h1>
          <p className='mt-2 text-xl'>
            Cover your driving costs when you’re driving <span className='italic'>from A to B</span>.
          </p>
        </div>

        <div className='p-8 mb-12 bg-white rounded-lg shadow-lg'>
          <div className='grid gap-8 md:grid-cols-3'>
            <div className='text-center'>
              <div className='flex justify-center mb-4 text-5xl font-bold text-center text-primary'>
                <PiNumberOneFill />
              </div>
              <h2 className='mb-2 text-2xl font-semibold'>Post a trip</h2>
              <p className='text-lg'>Enter your origin and destination</p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center mb-4 text-5xl font-bold text-center text-primary '>
                <PiNumberTwoFill />
              </div>
              <h2 className='mb-2 text-2xl font-semibold'>Receive bookings</h2>
              <p className='text-lg'>Passengers pay online, in advance</p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center mb-4 text-5xl font-bold text-center text-primary'>
                <PiNumberThreeFill />
              </div>
              <h2 className='mb-2 text-2xl font-semibold'>Meet & drive</h2>
              <p className='text-lg'>Cover your gas, insurance and other expenses</p>
            </div>
          </div>
        </div>

        {/* Reliable Passengers Section */}
        <div className='flex justify-between p-6 bg-white'>
          <div className='mb-12 '>
            <h2 className='text-3xl font-bold'>Reliable passengers</h2>
            <img src={ReliablePassengers} alt='' />
          </div>
          <div className='mt-5'>
            <div className='flex items-center'>
              <div className='flex items-center justify-center w-16 h-16 mr-4 text-white rounded-full bg-primary'>
                <span className='text-3xl'>✓</span>
              </div>
              <p className='text-xl'>Passengers pay in advance and are committed to showing up.</p>
            </div>
            <div className='mt-6'>
              <ul className='pl-8 text-lg list-disc'>
                <li className='mb-2'>
                  If a passenger cancels within 24 hours of departure, you get 50% of the payment.
                </li>
                <li>If a passenger doesn’t show up, you get 100% of the payment.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Get Paid After Every Trip Section */}
        <div className='p-8 mt-12 bg-white rounded-lg shadow-lg'>
          <h2 className='mb-4 text-2xl font-bold'>Get paid after every trip</h2>
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <div className='mb-6 md:w-1/2 md:mb-0'>
              <p className='mb-6 text-lg'>Receive money automatically after each and every trip.</p>
              <ul className='pl-6 mb-6 text-lg list-disc'>
                <li className='mb-2'>Get paid in your bank account or PayPal</li>
                <li>No need to carry cash</li>
              </ul>
            </div>
            <div className='md:w-1/2'>
              <img src={passengerIcon} alt='Card' className='w-full' />
            </div>
          </div>
        </div>
      </div>
      <CarpoolSection />
      <Footer />
    </>
  );
};

export default HowItWorksForDrivers;
