/* eslint-disable no-unused-vars */
import React from 'react';

const CarpoolSection = () => {
  // Sample data for demonstration
  const carpoolLocations = [
    { header: 'Carpool in Kigali', items: ['Kabuga to Nyabugogo', 'Another Location', 'Another Location'] },
    { header: 'Carpool in Musanze', items: ['Another Location', 'Another Location', 'Another Location'] },
    { header: 'Carpool in Rubavu', items: ['Another Location', 'Another Location', 'Another Location'] },
    { header: 'Carpool in Rusizi', items: ['Another Location', 'Another Location', 'Another Location'] },
    { header: 'Carpool in Huye', items: ['Another Location', 'Huye Location 2', 'Another Location'] },
  ];

  return (
    <section className='container py-12 mx-auto'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {carpoolLocations.map((locationGroup, index) => (
          <div key={index} className='bg-white rounded shadow'>
            <h3 className='p-4 font-serif text-lg italic font-black text-floor'>{locationGroup.header}</h3>
            <ul className='divide-y divide-gray-200'>
              {locationGroup.items.map((item, itemIndex) => (
                <li key={itemIndex} className='p-4'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarpoolSection;
