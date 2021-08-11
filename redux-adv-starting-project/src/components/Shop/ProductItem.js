import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import React from 'react';
import {useDispatch} from 'react-redux';
import  {productsActions} from '../../store/store';

const ProductItem = (props) => {
    const {id, title, price, description } = props;
    const dispatch=useDispatch()
    // const cart=useSelector(state=>state.products)
  const addItemHandler= () =>{
    dispatch(productsActions.addItem({
      id:id,
      title:title,
      price:price,
      quantity:1,
      total:price
    }))
  }
  // const addItemHandler= ()=>{
  //   const updatedItems=cart.products.slice();
  //   const searchItem=updatedItems.find(item=>item.id===id);
  //   if (searchItem){
  //     const updatedItem={...searchItem};
  //     updatedItem.quantity+=1
  //     updatedItem.total+=price
  //     const index=updatedItems.findIndex(item=>item.id===id
  //     )
  //     updatedItems[index]=updatedItem
  //   }else{
  //     // dispatch(productsActions.addItem())
  //     updatedItems.push({
  //           id:id,
  //           title:title,
  //           price:price,
  //           quantity:1,
  //           total:price
  //         })
      
  //   }
  //   const newTotalQuantity=cart.totalQuantity+1

  //   dispatch(productsActions.replaceCart({
  //     products:updatedItems,totalQuantity:newTotalQuantity
  //   }))
    


  // }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
