import { Navbar } from '../components';
import Footer from './Footer';
import CarpoolSection from '../components/CarpoolSection';
import SecurePayment from '../assets/secure_payments.svg';
import ReviewDriver from '../assets/review_driver.svg';
import { FaCarTunnel } from 'react-icons/fa6';
import { PiNumberOneFill } from 'react-icons/pi';
import { PiNumberTwoFill } from 'react-icons/pi';
import { PiNumberThreeFill } from 'react-icons/pi';

const Passengers = () => {
  return (
    <>
      <Navbar />
      <div className='container p-6 mx-auto'>
        {/* For passenger Section */}
        <div className='mb-12 text-center'>
          <div className='flex justify-center'>
            <FaCarTunnel className='mb-4 text-6xl text-primary' />
          </div>
          <h1 className='text-4xl font-bold'>For passengers</h1>
          <p className='mt-2 text-xl'>
            Get a ride with someone in their car, it’s <span className='italic'>affordable</span> and{' '}
            <span className='italic'>convenient</span>.
          </p>
        </div>

        <div className='p-8 mb-12 bg-white rounded-lg shadow-lg'>
          <div className='grid gap-8 md:grid-cols-3'>
            <div className='text-center'>
              <div className='flex justify-center mb-4 text-5xl font-bold text-center text-primary'>
                <PiNumberOneFill />
              </div>
              <h2 className='mb-2 text-2xl font-semibold'>Find a ride</h2>
              <p className='text-lg'>Search by origin, destination and departure.</p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center mb-4 text-5xl font-bold text-center text-primary '>
                <PiNumberTwoFill />
              </div>
              <h2 className='mb-2 text-2xl font-semibold'>Book your seat</h2>
              <p className='text-lg'>Pay online using a credit or debit card.</p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center mb-4 text-5xl font-bold text-center text-primary'>
                <PiNumberThreeFill />
              </div>
              <h2 className='mb-2 text-2xl font-semibold'>Enjoy the drive</h2>
              <p className='text-lg'>Meet the driver at a pickup location.</p>
            </div>
          </div>
        </div>

        {/* Reliable Passengers Section */}
        <div className='flex justify-between p-6 bg-white rounded-lg shadow-lg'>
          <div className='mb-12 '>
            <h2 className='text-3xl font-bold'>Book and pay online</h2>
            <img src={SecurePayment} alt='' />
          </div>
          <div className='mt-5'>
            <div className='flex items-center'>
              <div className='flex items-center justify-center w-16 h-16 mr-4 text-white rounded-full bg-primary'>
                <span className='text-3xl'>✓</span>
              </div>
              <p className='text-xl'>Reserve your seats, meet the driver and go.</p>
            </div>
            <div className='mt-6'>
              <ul className='pl-8 text-lg list-disc'>
                <li className='mb-2'>We accept all major credit cards and Visa / Mastercard debit cards</li>
                <li>No need to carry cash</li>
                <li>The driver is paid after the trip is complete</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Review a driver Section */}
        <div className='flex justify-between p-6 mt-6 bg-white rounded-lg shadow-lg'>
          <div className='mb-12 '>
            <h2 className='text-3xl font-bold'>Review your driver</h2>
            <img src={ReviewDriver} alt='' />
          </div>
          <div className='mt-5'>
            <div className='flex items-center'>
              <div className='flex items-center justify-center w-16 h-16 mr-4 text-white rounded-full bg-primary'>
                <span className='text-3xl'>✓</span>
              </div>
              <p className='text-xl'>Review your driver and build your reputation.</p>
            </div>
            <div className='mt-6'>
              <ul className='pl-8 text-lg list-disc'>
                <li className='mb-2'>Leave a star rating and a review for the driver</li>
                <li>Receive reviews from drivers</li>
                <li>Give us your feedback about your experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CarpoolSection />
      <Footer />
    </>
  );
};

export default Passengers;
