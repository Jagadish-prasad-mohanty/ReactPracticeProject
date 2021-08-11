import React,{useEffect} from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux'

function App() {
  const toggle=useSelector(state=>state.cart.toggle)
  const products =useSelector(state=>state.products);
  useEffect(() => {
    fetch("https://redux-adv-project-default-rtdb.firebaseio.com/myCart.json",{
      method:'PUT',
      body:JSON.stringify(products)
    })
  }, [products])
  return (
    <Layout>
      {toggle && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
