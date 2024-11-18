import React from 'react';

function Button({value, onClick}) {
  return (
    <>
       <button className='btn btn-outline-primary' onClick={onClick}>{value}</button>
    </>
  );
}

export default Button; 