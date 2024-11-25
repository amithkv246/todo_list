import React from 'react';

function Button({ value, onClick }) {
  return (
    <>
      <button className='btn btn-outline-secondary border-2' style={{ boxShadow: "0px 0px 1px 2px #ccc" }} onClick={onClick}>{value}</button>
    </>
  );
}

export default Button; 