import React from 'react';

function Input({type, placeholder}) {
  return (
    <>
      <input type={type} placeholder={placeholder} className='form-control' />
    </>
  );
}

export default Input;