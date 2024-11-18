import React from 'react';

function Card({ item }) {
    return (
        <>
            <div className="card w-full">
                <div className="card-body">
                    <p className="card-text">{item}</p>
                    <button className='btn btn-secondary mx-2'>Done</button>
                    <button className='btn btn-secondary'>Delete</button>
                </div>
            </div>
        </>
    );
}

export default Card;