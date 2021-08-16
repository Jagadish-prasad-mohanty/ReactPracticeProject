import { cartActions, productsActions } from './store'

export const sendCartData= (cart) =>{
    return async(dispatch) =>{
    dispatch(
        cartActions.setNotification({
          status: "pending",
          title: "Pending...",
          message: "Wait!! Your is data is sending...",
        })
      );
    const sendReq= async () =>{
      const response = await fetch(
        "https://redux-adv-project-default-rtdb.firebaseio.com/myCart.json",
        {
          method: "PUT",
          body: JSON.stringify({products:cart.products, totalQuantity:cart.totalQuantity}),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }
      

    }
    try {
        await sendReq();
        dispatch(
          cartActions.setNotification({
            status: "success",
            title: "Success",
            message: "Your cart updated successfully.",
          })
        );
    }
    catch (error){
        dispatch(
            cartActions.setNotification({
              status: "error",
              title: "Error",
              message: error.message,
            })
          );
    }
}

}

export const fetchCartData = ()=>{
  return async dispatch =>{
    const fetchResponse = async()=>{
      dispatch(
        cartActions.setNotification({
          status: "pending",
          title: "Pending...",
          message: "Wait!! Your is data is sending...",
        })
      );
      const response=await fetch("https://redux-adv-project-default-rtdb.firebaseio.com/myCart.json");
      if (!response.ok){
        throw new Error ("Something went wrong!!");
      }
      const data= await response.json();
      console.log(data);
      return  data;

    }

    try{

      const data=await fetchResponse()
      dispatch(productsActions.replaceCart(data))
      dispatch(
        cartActions.setNotification({
          status: "success",
          title: "Success",
          message: "Cart fetched successfully",
        })
      );

    }catch (error){
      dispatch(
        cartActions.setNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  }
}