import { Navbar } from '../components';
import Footer from './Footer';
import { FaClock, FaMoneyBillAlt, FaExclamationTriangle } from 'react-icons/fa';

const PostTripRules = () => {
  return (
    <>
      <Navbar />
      <div className='container p-6 mx-auto'>
        <div className='mb-12 text-center'>
          <h1 className='text-4xl font-bold'>Rules when posting a trip</h1>
        </div>
        <div className='grid gap-8 mb-12 md:grid-cols-3'>
          <div className='text-center'>
            <FaClock className='mx-auto mb-4 text-6xl text-primary' />
            <h2 className='text-xl font-bold'>Be reliable</h2>
            <p className='text-lg'>Only post a trip if you’re sure you’re driving and show up on time.</p>
          </div>
          <div className='text-center'>
            <FaMoneyBillAlt className='mx-auto mb-4 text-6xl text-primary' style={{ textDecoration: 'line-through' }} />
            <h2 className='text-xl font-bold'>No cash</h2>
            <p className='text-lg'>All passengers pay online and you receive a payout after the trip.</p>
          </div>
          <div className='text-center'>
            <FaExclamationTriangle className='mx-auto mb-4 text-6xl text-primary' />
            <h2 className='text-xl font-bold'>Drive safely</h2>
            <p className='text-lg'>Stick to the speed limit and do not use your phone while driving.</p>
          </div>
        </div>
        <div className='mb-6 text-center'>
          <input type='checkbox' id='agree' name='agree' className='mr-2' />
          <label htmlFor='agree' className='text-lg'>
            I understand that <span className='font-bold'>my account could be suspended if I break these rules</span>
          </label>
        </div>
        <div className='text-center'>
          <button className='px-8 py-2 font-bold text-white rounded-md bg-primary'>Post a trip</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostTripRules;
