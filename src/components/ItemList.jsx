
import React from 'react';
import Item from './Item';

function ItemList({ items }) {
    return (
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {items.map((item) => (
                <Item key={item.id} product={item} />
            ))}
        </div>
    );
}

export default ItemList;
