import React from 'react';

const InputField = React.memo(({ icon: Icon, label, ...props }) => (
  <div className='mb-4'>
    <label className='block mb-1 text-sm font-medium text-gray-700'>
      <Icon className='inline mr-2' />
      {label}
    </label>
    <input
      {...props}
      className='w-full p-3 transition duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
    />
  </div>
));

InputField.displayName = 'InputField';

export default InputField;
