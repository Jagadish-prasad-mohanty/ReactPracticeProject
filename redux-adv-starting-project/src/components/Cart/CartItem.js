import classes from './CartItem.module.css';
import React from 'react';
import  {productsActions} from '../../store/store'
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch=useDispatch();
  const decrItemHandler= () =>{
    dispatch(productsActions.decrItem(id))
  }
  const removeItemHandler= () =>{
    dispatch(productsActions.removeItem(id))
  }
  const addItemHandler = ()=>{
    dispatch(productsActions.addItem({id:id,price:price}))
  }
  return (
    <li className={classes.item}>
      <div style={{textAlign:'right'}}>
        <button onClick={removeItemHandler} className={classes.removeButton}>remove</button>
      </div>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
