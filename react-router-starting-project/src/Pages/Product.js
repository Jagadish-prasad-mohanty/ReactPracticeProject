import React from 'react'
import {useParams} from 'react-router-dom'

function Product() {
    const param=useParams();
    return (
        <div>
        <h1>Product Details</h1>
            <h3>{param.productID}</h3>
        </div>
    )
}

export default Product
