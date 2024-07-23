import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';

const CarpoolSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carpoolLocations = [
    { header: 'Carpool in Kigali', items: ['Kabuga to Nyabugogo', 'Kicukiro to Remera', 'Gikondo to Kimironko'] },
    { header: 'Carpool in Musanze', items: ['Kinigi to Musanze Town', 'Muhoza to Cyuve', 'Nyange to Busogo'] },
    { header: 'Carpool in Rubavu', items: ['Gisenyi to Nyundo', 'Rugerero to Rubavu Town', 'Nyamyumba to Gisenyi'] },
    { header: 'Carpool in Rusizi', items: ['Kamembe to Nkanka', 'Nkungu to Rusizi Town', 'Gihundwe to Nkombo'] },
    { header: 'Carpool in Huye', items: ['Huye Town to Ngoma', 'Tumba to Rango', 'Mbazi to Huye Town'] },
  ];

  const itemsPerPage = 3;
  const groupedLocations = [];
  for (let i = 0; i < carpoolLocations.length; i += itemsPerPage) {
    groupedLocations.push(carpoolLocations.slice(i, i + itemsPerPage));
  }
  const totalPages = groupedLocations.length;

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + totalPages) % totalPages);
  };

  return (
    <section className='container mx-auto py-8'>
      <h2 className='text-2xl font-bold text-center mb-6'>Popular Carpool Routes</h2>
      <div className='overflow-hidden w-full'>
        <motion.div
          className='flex'
          animate={{ x: `${-currentIndex * 100}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ width: `${totalPages * 50}%` }}
        >
          {groupedLocations.map((locationGroup, index) => (
            <div key={index} className='flex flex-row w-full' style={{ flex: `0 0 100%` }}>
              {locationGroup.map((location, locationIndex) => (
                <div key={locationIndex} className='bg-white rounded-xl shadow-xl p-6 m-2 flex-1'>
                  <h3 className='text-xl text-green-900  font-semibold mb-4'>{location.header}</h3>
                  <ul className='list-none text-gray-900 p-0'>
                    {location.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className='flex items-center mb-2  hover:scale-90 transform ease-in duration-300'
                      >
                        <FaMapMarkerAlt className='mr-2 text-green-800' />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
      <div className='flex justify-center mt-4'>
        <button
          onClick={prevSlide}
          className='bg-green-600  mr-6 rounded-full p-2 text-white bg-opacity-20 hover:bg-opacity-30 focus:outline-none transition-colors duration-300 hover:scale-105'
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className='bg-green-600  rounded-full p-2 text-white bg-opacity-20 hover:bg-opacity-30 focus:outline-none transition-colors duration-300 hover:scale-105'
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default CarpoolSection;
