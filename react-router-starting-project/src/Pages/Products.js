import React from 'react';
import { NavLink } from 'react-router-dom';

function Products() {
    return (
        <div>
            <h2>Products</h2>
            <ul>
            <li>
                <NavLink  to= '/products/s1'>product 1</NavLink>
                </li><li>
                <NavLink  to= '/products/s2'>product 2</NavLink>
                </li><li>
                <NavLink  to= '/products/s3'>product 3</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Products
