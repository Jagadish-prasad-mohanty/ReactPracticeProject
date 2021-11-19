import React from 'react';
// import { useSelector } from 'react-redux';
import { useStore } from '../customStore/store';
import ConfigureStore from '../customStore/configureStore';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';

// import { ProdContext } from '../context/context';
ConfigureStore();
const Products = props => {
  const prodState= useStore()[0];
  // const prodCtx=useContext(ProdContext);
  const productList = prodState.products;
  console.log(productList);
  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
