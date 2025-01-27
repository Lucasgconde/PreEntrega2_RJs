
import React from 'react';
import { Link } from 'react-router-dom';

function Item({ product }) {
    return (
        <div className="card" style={{ width: '18rem', margin: '1rem' }}>
    <img src={product.img} className="card-img-top" alt={product.name} />
    <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text fw-bold">${product.price}</p>
        <Link to={`/item/${product.id}`} className="btn btn-primary">Ver Más</Link>
    </div>
    </div>
    );
}

export default Item;
