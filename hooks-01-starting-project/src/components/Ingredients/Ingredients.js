import React, { useState, useEffect } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
function Ingredients() {
  const [ingredients,setIngredients] =useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [filterData,setFilterData]=useState('');
  useEffect(() => {
    setIsLoading(true)
    fetch('https://hook-starting-project-default-rtdb.firebaseio.com/products.json'
    ).then(res=>{
      setIsLoading(false)
      return res.json()
    }).then(responseData=>{
      
      console.log("[responseData]",responseData);
      const loadedData=[];
      for (let key in responseData){
        loadedData.push({amount:responseData[key].amount,title:responseData[key].name,id:key})
      }
      setIngredients(prevState=>{
        console.log("prevState",prevState)
        return [...prevState,...loadedData]
      });
    });
  
  }, [])
  
  const getIngredientHandler= (newIngredient)=>{
    console.log("[newIngredients]",newIngredient);
    fetch('https://hook-starting-project-default-rtdb.firebaseio.com/products.json',{
      method:'POST',
      body:JSON.stringify(newIngredient),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>res.json()).then(responseData=>{
      
      console.log("[responseData]",responseData.name);
      setIngredients(prevState=>{
        console.log("prevState",prevState)
        return [...prevState,{amount:newIngredient.amount,title:newIngredient.name,id:responseData.name}]
      });
    });
  }
  const removeIngredienthandler= (id) =>{
    const newIngrList=ingredients.filter(item=>item.id!==id);
    console.log("[removeIngr->ingredient]",ingredients)
    console.log("[removeIngr->newIngrList]",newIngrList)
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
  const getFilterData= (filterValue) =>{
    setFilterData(filterValue);
    console.log(filterValue);
  }

  let filteredIngredients=[...ingredients];
  if (filterData)
    filteredIngredients=ingredients.filter(item=>{
      const filterDataLen=filterData.length;
      return item.title.substr(0,filterDataLen)===filterData;
    })
  return (
    <div className="App">
      <IngredientForm getIngredient={getIngredientHandler} isLoading={isLoading} />

      <section>
        <Search getFilter={getFilterData}/>
        {/* Need to add list here! */}
        <IngredientList ingredients={filteredIngredients} onRemoveItem={removeIngredienthandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
