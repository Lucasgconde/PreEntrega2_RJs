
import React from 'react';

function CartWidget() {
    return (
        <div style={{ position: 'relative' }}>
            <span style={{ fontSize: '1.5rem' }}>🛒</span>
            <span style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                background: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '5px',
                fontSize: '0.8rem',
            }}>3</span>
        </div>
    );
}

export default CartWidget;
