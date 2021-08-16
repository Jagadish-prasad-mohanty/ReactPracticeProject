import React, { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/UI/Notification";
import {fetchCartData, sendCartData} from './store/cart-action';
let isFirst=true;
function App() {
  const cartChanged=useSelector(state=>state.products.cartChanged)
  const notification = useSelector((state) => state.cart.notification);
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.cart.toggle);
  const products = useSelector((state) => state.products);
  
  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])
  useEffect(() => {
    if (isFirst || !cartChanged){
      isFirst=false
      return;
    }
    dispatch(sendCartData(products));
    
  }, [products,dispatch,cartChanged]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {toggle && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
