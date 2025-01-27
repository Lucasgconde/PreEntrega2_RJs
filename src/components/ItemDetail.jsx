import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ product }) {
    return (
        <div className="card" style={{ width: '18rem', margin: '1rem auto' }}>
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text fw-bold">Precio: ${product.price}</p>
                <ItemCount stock={product.stock} />
            </div>
        </div>
    );
}

export default ItemDetail;
