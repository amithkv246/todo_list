import React from 'react';

function Button({value}) {
  return (
    <>
       <button className='btn btn-outline-primary'>{value}</button>
    </>
  );
}

export default Button; 