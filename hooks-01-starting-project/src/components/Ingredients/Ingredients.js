import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
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
    const newIngrList=ingredients.filter(item=>item.id!==id);
    const ingrList={};
    newIngrList.forEach(item=>{
      ingrList[item.id]={amount:item.amount,name:item.title}
    })
    fetch('https://hook-starting-project-default-rtdb.firebaseio.com/products.json',{
      method:'PUT',
      body:JSON.stringify(ingrList),
      headers:{
        'Content-Type':'application/json'
      }
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data);
      setIngredients(prevState=>{
        return prevState.filter(item=>item.id!==id)
      })
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
