import React from 'react';

function Input({type, placeholder, onChange, value}) {
  return (
    <>
      <input type={type} placeholder={placeholder} onChange={onChange} value={value} className='form-control form-control-secondary' />
    </>
  );
}

export default Input;