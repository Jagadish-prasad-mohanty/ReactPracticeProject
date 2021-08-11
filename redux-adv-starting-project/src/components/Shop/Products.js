import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {storeProductActions} from '../../store/store'

const DUMMY_DATA = [
  {
    id: "p1",
    title: "Book",
    price: 10,
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    title: "Pen",
    price: 5,
    description: "This is a second product - amazing!",
  },
  {
    id: "p3",
    title: "Note",
    price: 8,
    description: "This is a third product - amazing!",
  },
];

const Products = (props) => {
  const dispatch=useDispatch();
  const storeProducts=useSelector(store=>store.storeProducts.storeProducts);
  const isLoading=useSelector(store=>store.storeProducts.isLoading);
  console.log(storeProducts);
  
  useEffect(() => {
    const fetchData =async ()=>{
      const response= await fetch('https://redux-adv-project-default-rtdb.firebaseio.com/products.json');
      const data=await response.json();
      // console.log(data);
      const resData=[];
      for (const d in data){
        console.log(d);
        resData.push({
          id:d,
          title:data[d].title,
          description:data[d].description,
          price:data[d].price
        })
      }
      // console.log(resData);
      dispatch(storeProductActions.addStoreProduct(resData));
      dispatch(storeProductActions.finishLoading());
    }
    fetchData();
  }, [])
  let allProducts=<h3 style={{textAlign:"center",color:'ButtonFace'}}>Loading...</h3>
  if (isLoading){
    return allProducts
  }
  allProducts = DUMMY_DATA.map((data) => (
    <ProductItem
      key={data.id}
      id={data.id}
      title={data.title}
      price={data.price}
      description={data.description}
    />
  ));
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{allProducts}</ul>
    </section>
  );
};

export default Products;
