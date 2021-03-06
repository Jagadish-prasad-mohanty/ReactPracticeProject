import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [input,setInput]= useState({name:"",amount:""});
  const changeNameHandler= (e)=>{
    setInput({
      ...input,
      name:e.target.value
    });
  }
  const changeAmountHandler= (e)=>{
    setInput({
      ...input,
      amount:e.target.value
    });
  }
  const submitHandler = event => {
    event.preventDefault();
    // ...
    console.log("[ingredientForm]",input);
    props.getIngredient(input)
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" onChange={changeNameHandler} value={input.name}/>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount"  onChange={changeAmountHandler} value={input.amount}/>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">{props.isLoading?'Loading.....':'Add Ingredient'}</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
