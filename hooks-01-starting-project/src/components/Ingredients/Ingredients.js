import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
var id=1;
function Ingredients() {
  const [ingredients,setIngredients] =useState([]);
  const getIngredientHandler= (newIngredient)=>{
    console.log("[ingredients]",newIngredient);
    fetch('https://hook-starting-project-default-rtdb.firebaseio.com/products.json',{
      method:'POST',
      body:JSON.stringify(newIngredient),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>res.json()).then(responseData=>{
      
      console.log("[responseData]",responseData);
      setIngredients(prevState=>{
        console.log("prevState",prevState)
        return [...prevState,{...newIngredient,title:newIngredient.name,id:responseData.name}]
      });
    });
  }
  const removeIngredienthandler= (id) =>{
    setIngredients(prevState=>{
      return prevState.filter(item=>item.id!==id)
    })
  }
  return (
    <div className="App">
      <IngredientForm getIngredient={getIngredientHandler}/>

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList ingredients={ingredients} onRemoveItem={removeIngredienthandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
