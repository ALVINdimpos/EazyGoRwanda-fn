import { Navbar } from '../components';
import Footer from './Footer';
import { FaClock, FaMoneyBillAlt, FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PostTripRules = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gray-100'>
        <div className='container p-8 mx-auto'>
          <div className='mb-12 text-center'>
            <h1 className='text-5xl font-extrabold text-gray-800'>Rules for Posting a Trip</h1>
            <p className='mt-4 text-xl text-gray-600'>
              Ensure a smooth and safe journey by following these guidelines.
            </p>
          </div>
          <div className='grid gap-12 mb-12 md:grid-cols-3'>
            <div className='p-8 bg-white rounded-lg shadow-md'>
              <div className='flex flex-col items-center'>
                <FaClock className='mb-4 text-6xl text-primary' />
                <h2 className='text-2xl font-bold text-gray-800'>Be Reliable</h2>
                <p className='mt-2 text-lg text-gray-600'>
                  Only post a trip if you’re sure you’re driving and show up on time.
                </p>
              </div>
            </div>
            <div className='p-8 bg-white rounded-lg shadow-md'>
              <div className='flex flex-col items-center'>
                <FaMoneyBillAlt className='mb-4 text-6xl text-primary' style={{ textDecoration: 'line-through' }} />
                <h2 className='text-2xl font-bold text-gray-800'>No Cash</h2>
                <p className='mt-2 text-lg text-gray-600'>
                  All passengers pay online and you receive a payout after the trip.
                </p>
              </div>
            </div>
            <div className='p-8 bg-white rounded-lg shadow-md'>
              <div className='flex flex-col items-center'>
                <FaExclamationTriangle className='mb-4 text-6xl text-primary' />
                <h2 className='text-2xl font-bold text-gray-800'>Drive Safely</h2>
                <p className='mt-2 text-lg text-gray-600'>
                  Stick to the speed limit and do not use your phone while driving.
                </p>
              </div>
            </div>
          </div>
          <div className='mb-6 text-center'>
            <label htmlFor='agree' className='inline-flex items-center'>
              <input type='checkbox' id='agree' name='agree' className='mr-2' />
              <span className='text-lg text-gray-800'>
                I understand that{' '}
                <span className='font-bold'>my account could be suspended if I break these rules</span>
              </span>
            </label>
          </div>
          <div className='text-center'>
            <button
              onClick={() => {
                navigate('/trip/post');
              }}
              className='px-8 py-4 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700'
            >
              Post a Trip
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostTripRules;
