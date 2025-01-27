
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import products from '../mock/data';

function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = () => {
            const foundProduct = products.find((item) => item.id === id);
            setProduct(foundProduct);
        };

        fetchProduct();
    }, [id]);

    return (
        <div>
            {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
        </div>
    );
}

export default ItemDetailContainer;
