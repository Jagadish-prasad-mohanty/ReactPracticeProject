import { createContext, useState } from "react";
import React,{ useEffect } from "react";
const DEMO_Products=[{
    id: 'p1',
    title: 'Red Scarf',
    description: 'A pretty red scarf.',
    isFavorite: false
  },
  {
    id: 'p2',
    title: 'Blue T-Shirt',
    description: 'A pretty blue t-shirt.',
    isFavorite: false
  },
  {
    id: 'p3',
    title: 'Green Trousers',
    description: 'A pair of lightly green trousers.',
    isFavorite: false
  },
  {
    id: 'p4',
    title: 'Orange Hat',
    description: 'Street style! An orange hat.',
    isFavorite: false
  }]
export const ProdContext = createContext({
    products: [],
    fevProducts:[],
    toggleFev:(id)=>{}
  });

export const ProdContextProvider= (props)=>{
    const [productss,setProductss]=useState(DEMO_Products);
    const [fevProductss,setFevProductss]=useState([]);

    useEffect(()=>{
        const updatedFevProductss=productss.filter(elem=>elem.isFavorite)
        setFevProductss(updatedFevProductss);
    },[productss])
    const toggleFavHandler= (id) =>{
        const tIndex=productss.findIndex(elem=>elem.id===id);
        const updatedProductss=[...productss];
        const tProduct=productss[tIndex];
        tProduct.isFavorite=!productss[tIndex].isFavorite;
        updatedProductss[tIndex]=tProduct;
        setProductss(updatedProductss);

    }
    const context={
        products:productss,
        fevProducts:fevProductss,
        toggleFev: toggleFavHandler
    }
    return <ProdContext.Provider value={context}>{props.children}</ProdContext.Provider>
}