/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import icon1 from '../../assets/icon1.svg';
import icon2 from '../../assets/icon2.svg';
import icon3 from '../../assets/icon3.svg';

const BenefitCard = ({ number, title, description, icon, reverse, style = false }) => {
  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center bg-white ${style} rounded-lg shadow-lg overflow-hidden mb-8 ${reverse ? 'md:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className='p-8 md:w-1/2'>
        <div className='flex items-center mb-4'>
          <span className='mr-4 text-5xl font-bold text-primary'>{number}</span>
          <h3 className='text-2xl font-semibold'>{title}</h3>
        </div>
        <p className='mb-4 text-gray-600'>{description}</p>
      </div>
      <div className='md:w-1/2'>
        <img src={icon} alt={title} className='object-cover w-full h-48 md:h-64' />
      </div>
    </motion.div>
  );
};

function TegaRideBenefits() {
  return (
    <section className='py-16 bg-gray-100'>
      <div className='container px-4 mx-auto'>
        <motion.h2
          className='mb-12 text-4xl font-bold text-center md:text-5xl'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className='text-primary'>TegaRide</span> Benefits
        </motion.h2>

        <div className=''>
          <BenefitCard
            number='01'
            title='Flexible working hours'
            description='You can decide when, and how much time you want to drive. Enjoy the freedom to work on your own schedule and balance your life.'
            icon={icon1}
            style='mr-[500px]'
          />

          <BenefitCard
            number='02'
            title='Increased Earnings'
            description='By driving with TegaRide, you can earn more. Our platform connects you with passengers efficiently, maximizing your earning potential.'
            icon={icon2}
            style='ml-[500px]'
          />

          <BenefitCard
            number='03'
            title='24/7 Customer Support'
            description="TegaRide is a local service provider, and we're proud to support you in your local language. Our dedicated team is at your service 24/7, ensuring you always have the assistance you need."
            icon={icon3}
            style='mr-[500px]'
          />
        </div>
      </div>
    </section>
  );
}

export default TegaRideBenefits;
