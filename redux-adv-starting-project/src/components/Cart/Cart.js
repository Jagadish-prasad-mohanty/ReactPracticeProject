import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const products=useSelector(state=>state.products.products)
  
  const cartItems=products.map(product=><CartItem key={product.id} item={{ id:product.id ,title: product.title, quantity: product.quantity, total: product.total, price: product.price }}></CartItem>)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {products.length?<ul>
        {cartItems}
      </ul>:<h3>Start adding in the Cart</h3>}
    </Card>
  );
};

export default Cart;
