
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import products from '../mock/data';

function ItemListContainer({ greeting }) {
    const { id: categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = () => {
            if (categoryId) {
                const filtered = products.filter((item) => item.category === categoryId);
                setFilteredProducts(filtered);
            } else {
                setFilteredProducts(products);
            }
        };

        fetchProducts();
    }, [categoryId]);

    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>{greeting}</h1>
            <ItemList items={filteredProducts} />
        </div>
    );
}

export default ItemListContainer;
