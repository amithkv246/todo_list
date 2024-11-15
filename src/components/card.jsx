import React from 'react';

function Card({item, index}) {
    return (
        <>
            <div className="card" style={{width : "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{index}</h6>
                    <p className="card-text">{item}</p>
                    <button className='btn btn-secondary'>button</button>
                </div>
            </div>
        </>
    );
}

export default Card;