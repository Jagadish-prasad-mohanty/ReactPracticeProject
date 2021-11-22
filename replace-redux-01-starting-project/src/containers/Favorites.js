import React from 'react';
// import { useSelector } from 'react-redux';
// import { useContext } from 'react';
// import { ProdContext } from '../context/context';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

import { useStore } from '../customStore/store';

const Favorites = props => {
  const state= useStore()[0];
  // const prodCtx=useContext(ProdContext)
  // const favoriteProducts = prodCtx.fevProducts;

  const favoriteProducts= state.products.filter(item=>item.isFavorite)
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
