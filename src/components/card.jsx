import React from 'react';

function Card({ item, onDelete, onDone }) {
    return (
        <>
            <div className="card w-full">
                <div className="card-body">
                    <p className="card-text">{item}</p>
                    {
                        onDone &&
                        <button className='btn btn-primary mx-2'onClick={onDone}>Done</button>
                    }
                    <button className='btn btn-primary' onClick={onDelete}>Delete</button>
                </div>
            </div>
        </>
    );
}

export default Card;