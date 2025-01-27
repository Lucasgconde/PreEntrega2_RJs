import React, { useState } from 'react';

function ItemCount({ stock }) {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        if (count < stock) setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className="d-flex flex-column align-items-center mt-3">
            <div className="d-flex align-items-center">
                <button 
                    className="btn btn-danger" 
                    onClick={handleDecrement}
                    style={{ color: 'white' }}
                >
                    -
                </button>
                <input
                    type="text"
                    value={count}
                    readOnly
                    className="form-control text-center mx-2"
                    style={{ width: '60px' }}
                />
                <button 
                    className="btn btn-success" 
                    onClick={handleIncrement}
                    style={{ color: 'white' }}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default ItemCount;
