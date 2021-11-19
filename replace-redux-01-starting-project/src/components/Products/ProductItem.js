import React from 'react';
// import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import './ProductItem.css';
// import { toggleFav } from '../../store/actions/products';

// import { useContext } from 'react';
// import { ProdContext } from '../../context/context';
import { useStore } from '../../customStore/store';

const ProductItem = props => {
  // const prodCtx=useContext(ProdContext)
  const dispatch = useStore()[1];

  const toggleFavHandler = () => {
    // prodCtx.toggleFev(props.id);
    dispatch('TOGGLE_FEV',props.id)
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
