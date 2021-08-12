import React, { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./store/store";
import Notification from "./components/UI/Notification";
let isFirst=true;
function App() {
  const notification = useSelector((state) => state.cart.notification);
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.cart.toggle);
  const products = useSelector((state) => state.products);
  
  useEffect(() => {
    if (isFirst){
      isFirst=false
      return;
    }
    const sendCartData = async () => {
      dispatch(
        cartActions.setNotification({
          status: "pending",
          title: "Pending...",
          message: "Wait!! Your is data is sending...",
        })
      );
      const response = await fetch(
        "https://redux-adv-project-default-rtdb.firebaseio.com/myCart.jso",
        {
          method: "PUT",
          body: JSON.stringify(products),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }
      dispatch(
        cartActions.setNotification({
          status: "success",
          title: "Success",
          message: "Your cart updated successfully.",
        })
      );
    };
    sendCartData().catch((error) => {
      dispatch(
        cartActions.setNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    });
  }, [products, dispatch]);
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
